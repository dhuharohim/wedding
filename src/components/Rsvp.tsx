import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { BlurText } from "./ui/blur-text";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "./ui/select";

import { supabase } from "../lib/supabase";

interface RsvpFormData {
  fullName: string;
  email: string;
  attending: number;
  guests: number;
}

const SUBMIT_COOLDOWN_MS = 60_000;
const LS_KEY_RSVP_LAST_SUBMIT_AT = "rsvp:lastSubmittedAt";

export const Rsvp = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<RsvpFormData>({
    defaultValues: {
      attending: 1,
      guests: 1,
      fullName: "",
      email: "",
    },
  });

  const onSubmit = async (data: RsvpFormData) => {
    try {
      const last = Number(
        localStorage.getItem(LS_KEY_RSVP_LAST_SUBMIT_AT) || "0"
      );
      const now = Date.now();
      if (Number.isFinite(last) && now - last < SUBMIT_COOLDOWN_MS) {
        const remaining = Math.ceil((SUBMIT_COOLDOWN_MS - (now - last)) / 1000);
        toast.error(t("rsvp.spam_wait", { s: remaining }));
        return;
      }
    } catch {}

    setIsSubmitting(true);

    Confirm.show(
      t("rsvp.confirm_title"),
      t("rsvp.confirm_message"),
      t("rsvp.confirm_yes"),
      t("rsvp.confirm_no"),
      async () => {
        const exec = async () => {
          if (supabase) {
            const { error } = await supabase.from("rsvp_wedding").insert({
              full_name: data.fullName,
              email: data.email,
              attending: data.attending,
              guests: data.guests,
            });
            if (error) throw new Error("Failed to submit RSVP");
          }
        };
        try {
          await toast.promise(exec(), {
            loading: t("rsvp.toast_loading"),
            success: t("rsvp.toast_success"),
            error: t("rsvp.toast_error"),
          });
          form.reset();
          try {
            localStorage.setItem(
              LS_KEY_RSVP_LAST_SUBMIT_AT,
              String(Date.now())
            );
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
    <section
      id="rsvp"
      className="py-24 relative z-10 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <BlurText
            text={t("rsvp.title")}
            className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
          />
          <p className="text-neutral-500 uppercase tracking-widest text-xs">
            {t("rsvp.subtitle")}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <FormField
                  name="fullName"
                  control={form.control}
                  rules={{ required: "Required" }}
                  render={({ field }) => (
                    <FormItem>
                  <FormLabel className="text-neutral-500 text-xs uppercase tracking-widest">
                    {t("rsvp.fields.full_name")}
                  </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  rules={{ required: "Required" }}
                  render={({ field }) => (
                    <FormItem>
                  <FormLabel className="text-neutral-500 text-xs uppercase tracking-widest">
                    {t("rsvp.fields.email")}
                  </FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="attending"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="pt-4">
                  <FormLabel className="text-neutral-500 text-xs uppercase tracking-widest mb-2 block">
                    {t("rsvp.fields.attendance")}
                  </FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={String(field.value)}
                          onValueChange={(val) => field.onChange(Number(val))}
                          className="flex gap-8"
                        >
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem
                              value="1"
                              id="yes"
                              className="border-neutral-600 text-yellow-500"
                            />
                            <Label
                              htmlFor="yes"
                              className="font-serif text-xl text-yellow-100 cursor-pointer font-light"
                            >
                              {t("rsvp.fields.accept")}
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem
                              value="0"
                              id="no"
                              className="border-neutral-600 text-yellow-500"
                            />
                            <Label
                              htmlFor="no"
                              className="font-serif text-xl text-neutral-400 cursor-pointer font-light"
                            >
                              {t("rsvp.fields.decline")}
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    name="guests"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-500 text-xs uppercase tracking-widest">
                          {t("rsvp.fields.guests")}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={String(field.value ?? 1)}
                            onValueChange={(val) => field.onChange(Number(val))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-900/50 border-neutral-800 focus:border-yellow-600 rounded-none text-yellow-50">
                              <SelectGroup>
                                <SelectLabel>Number of Guests</SelectLabel>
                                {[1, 2, 3, 4, 5].map((n) => (
                                  <SelectItem key={n} value={String(n)}>
                                    {n}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-700 hover:bg-yellow-600 text-white h-14 rounded-none text-xs uppercase tracking-[0.2em] font-bold mt-8"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  t("rsvp.submit")
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
