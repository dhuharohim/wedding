import { motion } from "motion/react";
import { BlurText } from "./ui/blur-text";
import { useTranslation } from "react-i18next";

export const Story = () => {
  const { t } = useTranslation();
  return (
    <section id="story" className="py-24 bg-neutral-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <BlurText
              text={t("story.title")}
              className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-6"
            />
            <div className="h-px w-24 bg-yellow-600/30 mx-auto" />
          </div>
          <div className="space-y-8 font-serif text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {t("story.p1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("story.p2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {t("story.p3")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-yellow-500/80"
            >
              {t("story.p4")}
            </motion.p>
          </div>

          <div className="mt-16 relative h-64 md:h-96 w-full overflow-hidden grayscale-[40%]">
            <motion.img
              src="/assets/images/street.jpg"
              initial={{ scale: 1.02, y: 8, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full object-cover object-center"
              alt="Story Banner"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
