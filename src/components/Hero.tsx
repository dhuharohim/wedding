import { motion } from "motion/react";
import { ShinyText } from "./ui/shiny-text";
import { Particles } from "./ui/particles";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  const logos: { src: string; name: string }[] = [
    { src: "/assets/logo/akart-creative.png", name: "Akart Creative" },
    { src: "/assets/logo/akart-records.png", name: "Akart Records" },
    { src: "/assets/logo/hippi.png", name: "HIPPI" },
    { src: "/assets/logo/maps-prod.png", name: "Maps Prod" },
    { src: "/assets/logo/volkadot.png", name: "Volkadot" },
    { src: "/assets/logo/zestha.png", name: "Zestha" },
  ];
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* Background Image with refined gradient */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Couple"
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale-[50%] sepia-[20%]"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-yellow-500/50" />
          <ShinyText
            text={t("hero.wedding_of")}
            speed={6}
            className="text-xs md:text-sm uppercase tracking-[0.35em] font-semibold text-yellow-400/90"
          />
          <div className="h-px w-12 bg-yellow-500/50" />
        </motion.div>

        <div className="mb-10">
          <h1 className="font-serif font-bold tracking-tight leading-[1.05]">
            <ShinyText
              text="Dhuha & Nisa"
              speed={7}
              className="block text-5xl md:text-8xl lg:text-[8rem] text-yellow-100 drop-shadow-[0_2px_10px_rgba(251,191,36,0.15)]"
            />
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-base md:text-lg font-medium text-yellow-100/90 tracking-[0.25em] uppercase"
        >
          <span>December 19, 2025</span>
          <span className="hidden md:block w-1.5 h-1.5 bg-yellow-600 rounded-full rotate-45" />
          <span>Sidikalang, North Sumatera</span>
        </motion.div>

        <div className="mt-10 w-full">
          <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-yellow-500/70">
            {t("hero.supported_by")}
          </div>
          <div className="w-full rounded-2xl border border-yellow-600/30 bg-yellow-50/5 backdrop-blur-sm p-4">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {logos.map((logo) => (
                <div
                  key={logo.src}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-md border border-yellow-600/25 bg-neutral-900">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      className="h-10 w-100 object-cover"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-yellow-100/80 text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          {t("hero.scroll")}
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-yellow-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
