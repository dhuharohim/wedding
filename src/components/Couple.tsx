import { BlurText } from "./ui/blur-text";
import { ProfileCard } from "./ui/profile-card";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ShinyText } from "./ui/shiny-text";

export const Couple = () => {
  const { t } = useTranslation();
  return (
    <section id="couple" className="py-24 relative z-10 overflow-hidden">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-10 h-48 w-48 rounded-full bg-yellow-500/10 blur-2xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <BlurText
            text={t("couple.title")}
            className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
          />
          <p className="text-neutral-500 text-sm tracking-widest uppercase mt-4">
            {t("couple.subtitle")}
          </p>
        </div>
        <div className="relative grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto items-start">
          {/* Center monogram */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex h-24 w-24 items-center justify-center rounded-full border border-yellow-700/30 bg-yellow-50/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/20 via-transparent to-yellow-500/10" />
              <ShinyText
                text="D & N"
                className="font-serif text-yellow-100 text-xl"
                speed={7}
              />
            </motion.div>
          </div>
          {/* Groom */}
          <ProfileCard
            name="M Dhuha Rohim, S.Kom"
            role={t("couple.groom_role")}
            image="/assets/images/dhuha.avif"
            align="right"
            description={
              <>
                <div className="mt-4 pt-4 border-t border-yellow-900/30">
                  <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">
                    {t("couple.only_child_of")}
                  </p>
                  <p className="text-base font-serif text-neutral-300">
                    Drs. Suwarno (Alm) & Martiningrum, S.H (Almh)
                  </p>
                </div>
              </>
            }
          />

          {/* Bride */}
          <ProfileCard
            name="Nisa Grestasya Tampubolon, S.M"
            role={t("couple.bride_role")}
            image="/assets/images/nisa.avif"
            align="left"
            description={
              <>
                <div className="mt-4 pt-4 border-t border-yellow-900/30">
                  <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">
                    {t("couple.first_daughter_of")}
                  </p>
                  <p className="text-base font-serif text-neutral-300">
                    Winton Jefriadi Tampubolon & Rominta Simbolon
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
