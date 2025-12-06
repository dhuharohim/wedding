import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Howl } from "howler";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Couple } from "./components/Couple";
import { QuranQuotes } from "./components/QuranQuotes";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { Rsvp } from "./components/Rsvp";
import { Gift } from "./components/Gift";
import { Wishes } from "./components/Wishes";
import { Footer } from "./components/Footer";
import { Countdown } from "./components/Countdown";
import { FancyCard } from "./components/ui/fancy-card";
import { Toaster } from "./components/ui/sonner";
import Particles from "./components/Particles";
import { ModalProvider } from "./components/ui/animated-modal";
import { FloatingDock } from "./components/ui/floating-dock";
import { HomeIcon, Music2, Pause, Languages, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  const weddingDate = new Date("2025-12-19T10:00:00");
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language);
  const soundRef = useRef<Howl | null>(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (opened && !soundRef.current) {
      const bgm = new Howl({
        src: ["/assets/soundtrack/soundtrack.mp3"],
        loop: true,
        volume: 0,
        html5: true,
        onplay: () => setPlaying(true),
        onpause: () => setPlaying(false),
        onstop: () => setPlaying(false),
      });
      soundRef.current = bgm;
      bgm.play();
      bgm.fade(0, 0.5, 2000); // fade in over 2 seconds
      setPlaying(true);
    }
    if (!opened && soundRef.current) {
      soundRef.current.stop();
      soundRef.current = null;
      setPlaying(false);
    }
  }, [opened]);

  const invitee = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (!to) return "Guest";
      return decodeURIComponent(to).trim() || "Guest";
    } catch {
      return "Guest";
    }
  }, []);

  return (
    <ModalProvider>
      <div className="min-h-screen font-sans text-neutral-200 relative selection:bg-yellow-500 selection:text-black overflow-x-hidden bg-neutral-950">
        <Toaster richColors position="top-right" />
        {/* <Silk
        className="fixed inset-0 -z-10"
        color="#7B7481"
        speed={5}
        scale={1}
        noiseIntensity={1.5}
      /> */}
        {/* Texture Overlay */}

        <AnimatePresence>
          {!opened && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduceMotion ? 0.15 : 0.4,
                  ease: "easeOut",
                }}
                className="fixed inset-0 z-50 flex items-center justify-center px-6"
              >
                <FancyCard
                  title={t("invitation.dear", { name: invitee })}
                  description={t("invitation.description")}
                  imageUrl="https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  actionLabel={t("invitation.open")}
                  onAction={() => {
                    setOpened(true);
                  }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", damping: 30, stiffness: 220 }
            }
          >
            <Hero />
          </motion.div>
        )}

        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", damping: 30, stiffness: 220, delay: 0.06 }
            }
            className="relative z-10"
          >
            <div className="container mx-auto px-4 text-center">
              <div className="inline-flex flex-col items-center">
                <span className="w-px h-16 bg-gradient-to-b from-transparent to-yellow-500/50 mb-6"></span>
                <p className="uppercase tracking-[0.4em] text-yellow-500/60 mb-8 text-xs font-semibold">
                  {t("countdown.label")}
                </p>
                <Countdown targetDate={weddingDate} />
                {/* <span className="w-px h-16 bg-gradient-to-t from-transparent to-yellow-500/50 mt-6"></span> */}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.8,
            ease: "easeOut",
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Particles
            particleColors={["#fbbf24", "#fbbf24"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </motion.div>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", damping: 28, stiffness: 220, delay: 0.12 }
            }
          >
            <QuranQuotes />
            <Couple />
            <Story />
            <Gallery />
            <Events />
            <Gift />
            <Wishes />
            <Rsvp />
            <Footer />
          </motion.div>
        )}
        {opened && (
          <>
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <div className="relative">
                {/* Navigation overlay */}
                <AnimatePresence>
                  {navOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{
                        type: "spring",
                        damping: 26,
                        stiffness: 220,
                      }}
                      className="absolute -top-28 left-0 right-0 mx-auto max-w-4xl px-4"
                    >
                      <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-yellow-600/25 bg-yellow-100/10 backdrop-blur-sm shadow-xl p-3">
                        {[
                          { label: t("navbar.couple"), href: "#couple" },
                          { label: t("navbar.story"), href: "#story" },
                          { label: t("navbar.gallery"), href: "#gallery" },
                          { label: t("navbar.events"), href: "#events" },
                          { label: t("navbar.gift"), href: "#gift" },
                          { label: t("navbar.rsvp"), href: "#rsvp" },
                          { label: t("wishes.title"), href: "#wishes" },
                        ].map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setNavOpen(false)}
                            className="text-xs px-3 py-2 rounded-full border border-yellow-600/20 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-100/10 transition-colors uppercase tracking-widest"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dock bar */}
                <div className="flex h-14 w-full items-center justify-between gap-3 border-t border-yellow-600/25 bg-yellow-100/10 backdrop-blur-xl shadow-lg px-4">
                  {/* Brand */}
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm tracking-widest text-yellow-200">
                      D &amp; N
                    </span>
                  </div>
                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      aria-label={playing ? t("music.pause") : t("music.play")}
                      title={playing ? t("music.pause") : t("music.play")}
                      onClick={() => {
                        if (!soundRef.current) return;
                        if (!playing) {
                          soundRef.current.fade(0, 0.5, 1000);
                          soundRef.current.play();
                        } else {
                          soundRef.current.fade(0.5, 0, 1000);
                          setTimeout(() => soundRef.current?.pause(), 1000);
                        }
                        setPlaying(!playing);
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-600/25 bg-yellow-100/10 text-yellow-200 hover:bg-yellow-100/20 transition-colors"
                    >
                      {playing ? (
                        <Pause className="h-5 w-5" />
                      ) : (
                        <Music2 className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      aria-label={lang === "en" ? t("lang.id") : t("lang.en")}
                      title={lang === "en" ? t("lang.id") : t("lang.en")}
                      onClick={() => {
                        const next = lang === "en" ? "id" : "en";
                        setLang(next);
                        i18n.changeLanguage(next);
                        try {
                          localStorage.setItem("lang", next);
                        } catch {}
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-600/25 bg-yellow-100/10 text-yellow-200 hover:bg-yellow-100/20 transition-colors"
                    >
                      <Languages className="h-5 w-5" />
                    </button>
                    <button
                      aria-label={navOpen ? "Close Menu" : "Open Menu"}
                      title={navOpen ? "Close Menu" : "Open Menu"}
                      onClick={() => setNavOpen((v) => !v)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-600/25 bg-yellow-100/10 text-yellow-200 hover:bg-yellow-100/20 transition-colors"
                    >
                      {navOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ModalProvider>
  );
}

export default App;
