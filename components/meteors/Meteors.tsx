import { cn } from "@/lib/utils";
import styles from "./meteors.module.css";

export const Meteors = ({ number }: { number: number }) => {
  return [...new Array(number || 20).fill(true)].map((el, idx) => (
    <span
      key={idx}
      className={cn(
        "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
        styles.meteor
      )}
      style={{
        top: 0,
        left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
      }}
    ></span>
  ));
};
