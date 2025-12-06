import CircularGallery from "./CircularGallery";
import DomeGallery from "./DomeGallery";
import { BlurText } from "./ui/blur-text";
import { useTranslation } from "react-i18next";

const images = [
  "/assets/images/batak.jpg",
  "/assets/images/white.jpg",
  "/assets/images/black.jpg",
  "/assets/images/jawa.jpg",
];

export const Gallery = () => {
  const { t } = useTranslation();
  const items = images.map((image, i) => ({ image, text: t("gallery.item", { index: i + 1 }) }));
  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <BlurText
            text={t("gallery.title")}
            className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90"
          />
          <div className="h-px w-24 bg-yellow-600/30 mx-auto mt-6" />
        </div>

        <div style={{ height: "800px", position: "relative", width: "100%" }}>
          <DomeGallery
            images={images}
            fit={1}
            grayscale={false}
            minRadius={900}
          />
        </div>
      </div>
    </section>
  );
};
