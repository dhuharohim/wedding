
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./styles/globals.css";
  import { Confirm } from "notiflix/build/notiflix-confirm-aio";

  Confirm.init({
    className: "notiflix-confirm",
    width: "340px",
    zindex: 5000,
    position: "center",
    distance: "10px",
    backgroundColor: "rgba(10,10,10,0.98)",
    borderRadius: "0px",
    backOverlay: true,
    backOverlayColor: "rgba(10,10,10,0.6)",
    rtl: false,
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    cssAnimation: true,
    cssAnimationDuration: 300,
    cssAnimationStyle: "fade",
    plainText: true,
    titleColor: "#fef9c3",
    titleFontSize: "16px",
    messageColor: "#a3a3a3",
    messageFontSize: "14px",
    buttonsFontSize: "12px",
    okButtonColor: "#ffffff",
    okButtonBackground: "#ca8a04",
    cancelButtonColor: "#eab308",
    cancelButtonBackground: "#262626",
  });

  createRoot(document.getElementById("root")!).render(<App />);
  
