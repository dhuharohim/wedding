import { useState, useEffect } from "react";
import Counter from "./Counter";
import { useTranslation } from "react-i18next";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const { t } = useTranslation();
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center group cursor-default"
        >
          <Counter
            value={Number(value)}
            places={[10, 1]}
            fontSize={50}
            padding={5}
            gap={2}
            textColor="yellow-500"
            fontWeight={500}
          />

          <span className="text-[10px] uppercase tracking-[0.2em] mt-4 text-neutral-200 font-medium">
            {t(`countdown.units.${unit}`)}
          </span>
        </div>
      ))}
    </div>
  );
};
