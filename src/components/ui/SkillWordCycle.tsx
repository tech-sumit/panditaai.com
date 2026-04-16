"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type SkillWord = {
  word: string;
  lang: string;
  fontClass?: string;
  dir?: "ltr" | "rtl";
};

export const SKILL_WORDS: SkillWord[] = [
  { word: "कौशल", lang: "Hindi", fontClass: "font-devanagari" },
  { word: "Kaushal", lang: "Sanskrit" },
  { word: "技能", lang: "Japanese", fontClass: "font-jp" },
  { word: "기술", lang: "Korean", fontClass: "font-kr" },
  { word: "مهارة", lang: "Arabic", fontClass: "font-arabic", dir: "rtl" },
  { word: "ทักษะ", lang: "Thai", fontClass: "font-thai" },
  { word: "навык", lang: "Russian" },
  { word: "habilidad", lang: "Spanish" },
  { word: "compétence", lang: "French" },
  { word: "Skill", lang: "English" },
];

type Props = {
  words?: SkillWord[];
  intervalMs?: number;
  className?: string;
  onChange?: (index: number) => void;
};

export default function SkillWordCycle({
  words = SKILL_WORDS,
  intervalMs = 2400,
  className = "",
  onChange,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, words.length]);

  useEffect(() => {
    onChange?.(index);
  }, [index, onChange]);

  const current = words[index];

  return (
    <span
      className={`relative inline-block align-baseline ${className}`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current.word}
          dir={current.dir ?? "ltr"}
          className={`inline-block not-italic ${current.fontClass ?? ""}`}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {current.word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
