import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { BlurText } from "./ui/blur-text";
import { useTranslation } from "react-i18next";
import { ShinyText } from "./ui/shiny-text";

export const Gift = () => {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: "Bank Central Asia",
      number: "2480616211",
      name: "MUHAMMAD DHUHA R",
    },
    {
      bank: "BRI",
      number: "092501028791532",
      name: "NISA GRESTASYA",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="gift"
      className="py-24 relative z-10 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <BlurText
            text={t("gift.title")}
            className="justify-center font-serif text-3xl md:text-4xl text-yellow-100/90 mb-8"
          />

          <p className="text-neutral-500 mb-12 font-light leading-relaxed">
            {t("gift.description")}
          </p>

          <div className="bg-neutral-900/50 p-8 border border-neutral-800 flex flex-col items-center gap-4 mb-8">
            <h3 className="text-neutral-400 text-sm tracking-widest uppercase">
              {t("gift.address_label")}
            </h3>
            <p className="text-yellow-100/90">{t("gift.address_text")}</p>
            <a
              href="https://maps.app.goo.gl/dTS6gvJQbK5kff956"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-center px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full gap-2 text-yellow-600 hover:text-yellow-500 hover:border-yellow-700/50 hover:bg-yellow-700/10 transition-colors uppercase tracking-widest"
            >
              {t("gift.open_in_maps")}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bankAccounts.map((account, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 p-8 border border-neutral-800 flex flex-col items-center gap-4 transition-colors hover:border-yellow-900/50"
              >
                <h3 className="text-neutral-400 text-sm tracking-widest uppercase">
                  <ShinyText
                    text={account.bank}
                    speed={8}
                    className="text-neutral-400"
                  />
                </h3>
                <div className="text-xl font-mono text-yellow-100/90 tracking-wider">
                  {account.number}
                </div>
                <p className="text-xs text-neutral-600 uppercase tracking-wider mb-2">
                  {account.name}
                </p>

                <motion.button
                  onClick={() => handleCopy(account.number, index)}
                  className="text-xs flex items-center gap-2 text-yellow-600 hover:text-yellow-500 hover:border-yellow-700/50 px-4 py-2 border border-neutral-700 rounded-full transition-colors uppercase tracking-widest"
                  whileTap={{ scale: 0.97 }}
                >
                  {copiedIndex === index ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-3 h-3" /> {t("gift.copied")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Copy className="w-3 h-3" /> {t("gift.copy")}
                    </span>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
