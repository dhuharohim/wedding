import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative z-10 py-12 border-t border-yellow-500/20 bg-black/40 backdrop-blur-lg mt-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-yellow-500 mb-6 drop-shadow-sm">
          Dhuha & Nisa
        </h2>
        <p className="text-neutral-600 text-sm">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};
