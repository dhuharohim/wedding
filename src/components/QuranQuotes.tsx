import ScrollReveal from "./ScrollReveal";
import { useTranslation } from "react-i18next";

export const QuranQuotes = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Decorative Borders - Top/Bottom */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-yellow-600/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-yellow-600/30" />
          <div className="py-12">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="px-0"
              textClassName="font-serif text-3xl md:text-4xl text-yellow-100/90 mb-8 leading-relaxed font-light italic"
            >
              {t("quotes.main")}
            </ScrollReveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-yellow-700/30" />
              <p className="text-yellow-600 uppercase tracking-[0.25em] text-xs font-semibold">
                {t("quotes.author")}
              </p>
              <span className="h-px w-8 bg-yellow-700/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
