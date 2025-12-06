import CardNav from "./CardNav";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const items: {
    label: string;
    bgColor: string;
    textColor: string;
    links: {
      label: string;
      href: string;
    }[];
  }[] = [
    {
      label: t("navbar.couple"),
      bgColor: "#0a0a0a",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.view"), href: "#couple" }],
    },
    {
      label: t("navbar.story"),
      bgColor: "#0b0b0b",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.read"), href: "#story" }],
    },
    {
      label: t("navbar.gallery"),
      bgColor: "#0c0c0c",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.open"), href: "#gallery" }],
    },
    {
      label: t("navbar.events"),
      bgColor: "#0a0a0a",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.details"), href: "#events" }],
    },
    {
      label: t("navbar.gift"),
      bgColor: "#0b0b0b",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.info"), href: "#gift" }],
    },
    {
      label: t("navbar.rsvp"),
      bgColor: "#0c0c0c",
      textColor: "#fbbf24",
      links: [{ label: t("navbar.confirm"), href: "#rsvp" }],
    },
  ];

  return (
    <CardNav
      className="sticky top-0 z-50"
      items={items}
      baseColor="transparent"
      menuColor="#fbbf24"
      buttonBgColor="#f59e0b"
      buttonTextColor="#111111"
    />
  );
};
