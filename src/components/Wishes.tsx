import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import { supabase } from "../lib/supabase";
import { useTranslation } from "react-i18next";

interface WishFormData {
  name: string;
  message: string;
}

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

const SUBMIT_COOLDOWN_MS = 60_000;
const LS_KEY_LAST_SUBMIT_AT = "wishes:lastSubmittedAt";

export const Wishes = () => {
  const { t } = useTranslation();
  const [pendingData, setPendingData] = useState<WishFormData | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WishFormData>();

  useEffect(() => {
    const fetchWishes = async () => {
      if (!supabase) {
        return;
      }
      const { data, error } = await supabase
        .from("wishes_wedding")
        .select("id,name,message,created_at")
        .order("created_at", { ascending: false });
      if (error || !data) {
        return;
      }
      setWishes(
        data.map((row) => ({
          id: row.id as number,
          name: row.name as string,
          message: row.message as string,
          created_at: new Date(String(row.created_at)).toLocaleString(),
        }))
      );
    };
    fetchWishes();
  }, []);

  const onSubmit = async (data: WishFormData) => {
    try {
      const last = Number(localStorage.getItem(LS_KEY_LAST_SUBMIT_AT) || "0");
      const now = Date.now();
      if (Number.isFinite(last) && now - last < SUBMIT_COOLDOWN_MS) {
        const remaining = Math.ceil((SUBMIT_COOLDOWN_MS - (now - last)) / 1000);
        toast.error(t("wishes.spam_wait", { s: remaining }));
        return;
      }
    } catch {}

    setIsSubmitting(true);

    Confirm.show(
      t("wishes.confirm_title"),
      t("wishes.confirm_message"),
      t("wishes.confirm_yes"),
      t("wishes.confirm_no"),
      async () => {
        const exec = async () => {
          if (supabase) {
            const { data: inserted, error } = await supabase
              .from("wishes_wedding")
              .insert({ name: data.name, message: data.message })
              .select("id,name,message,created_at")
              .single();
            if (error) {
              const msg = String(error.message || "");
              if (msg.toLowerCase().includes("row-level security")) {
                throw new Error(
                  "Submission blocked by Supabase Row Level Security"
                );
              }
              throw new Error("Failed to send wish");
            }
            setWishes((prev) => [
              {
                id: inserted!.id as number,
                name: inserted!.name as string,
                message: inserted!.message as string,
                created_at: new Date(
                  String(inserted!.created_at)
                ).toLocaleString(),
              },
              ...prev,
            ]);
          }
        };
        try {
          await toast.promise(exec(), {
            loading: t("wishes.toast_loading"),
            success: t("wishes.toast_success"),
            error: (e) => String(e?.message || t("wishes.toast_error")),
          });
          form.reset({ name: "", message: "" });
          try {
            localStorage.setItem(LS_KEY_LAST_SUBMIT_AT, String(Date.now()));
          } catch {}
        } finally {
          setIsSubmitting(false);
        }
      },
      () => {
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="wishes" className="py-24 relative z-10 bg-neutral-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-yellow-100">
              {t("wishes.title")}
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  name="name"
                  control={form.control}
                  rules={{ required: "Name is required" }}
                  render={({
                    field,
                    fieldState,
                  }: {
                    field: import("react-hook-form").ControllerRenderProps<
                      WishFormData,
                      "name"
                    >;
                    fieldState: import("react-hook-form").ControllerFieldState;
                  }) => (
                    <FormItem data-invalid={fieldState.invalid}>
                      <FormLabel
                        htmlFor={field.name}
                        className="text-yellow-100"
                      >
                        {t("wishes.fields.name")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your name"
                          autoComplete="off"
                          className="border border-yellow-100 text-yellow-100"
                        />
                      </FormControl>
                      {fieldState.invalid && (
                        <FormMessage className="text-yellow-100">
                          {fieldState.error?.message}
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  name="message"
                  control={form.control}
                  rules={{ required: "Please write a message" }}
                  render={({
                    field,
                    fieldState,
                  }: {
                    field: import("react-hook-form").ControllerRenderProps<
                      WishFormData,
                      "message"
                    >;
                    fieldState: import("react-hook-form").ControllerFieldState;
                  }) => (
                    <FormItem data-invalid={fieldState.invalid}>
                      <FormLabel
                        htmlFor={field.name}
                        className="text-yellow-100"
                      >
                        {t("wishes.fields.message")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Write a message..."
                          autoComplete="off"
                        />
                      </FormControl>
                      {fieldState.invalid && (
                        <FormMessage className="text-yellow-100">
                          {fieldState.error?.message}
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="default"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-700 hover:bg-yellow-600 text-white h-14 rounded-none text-xs uppercase tracking-[0.2em] font-bold mt-8"
                >
                  {t("wishes.submit")}
                </Button>
              </form>
            </Form>
          </div>

          {/* List */}
          <div className="space-y-8 border-l border-neutral-800 pl-8 lg:pl-16">
            <h3 className="font-serif text-2xl text-neutral-500">
              {t("wishes.latest")}
            </h3>
            <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {wishes.length === 0 && (
                <p className="text-yellow-600 text-sm">{t("wishes.empty")}</p>
              )}
              {wishes.map((wish, i) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="space-y-2"
                >
                  <p className="font-serif text-lg text-yellow-100/80 leading-relaxed">
                    "{wish.message}"
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">
                      {wish.name}
                    </span>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span className="text-neutral-600 text-xs">
                      {wish.created_at}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
