"use client";

import { useEffect, useState } from "react";

export type SlotWord = {
  word: string;
  lang: string;
  fontClass?: string;
  dir?: "ltr" | "rtl";
};

export const SKILL_WORDS: SlotWord[] = [
  { word: "Skill", lang: "English" },
  { word: "कौशल", lang: "Hindi", fontClass: "font-devanagari" },
  { word: "Kaushal", lang: "Sanskrit" },
  { word: "技能", lang: "Japanese", fontClass: "font-jp" },
  { word: "기술", lang: "Korean", fontClass: "font-kr" },
  { word: "مهارة", lang: "Arabic", fontClass: "font-arabic", dir: "rtl" },
  { word: "ทักษะ", lang: "Thai", fontClass: "font-thai" },
  { word: "навык", lang: "Russian" },
  { word: "habilidad", lang: "Spanish" },
  { word: "compétence", lang: "French" },
];

type Props = {
  words?: SlotWord[];
  intervalMs?: number;
  onChange?: (index: number) => void;
  className?: string;
};

/**
 * Word cycle with a simple fade/slide replace animation. Cycles through the
 * given words, cross-fading the next word in while nudging it upward. Keeps
 * the surrounding heading stable: the word inherits the H1's font-size so no
 * layout jumps or container overflow.
 */
export default function SlotPhrase({
  words = SKILL_WORDS,
  intervalMs = 2800,
  onChange,
  className = "",
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
      className={`slot-phrase ${className}`}
      aria-label={current.word}
    >
      <span
        key={index}
        className={`slot-swap ${current.fontClass ?? ""}`}
        dir={current.dir ?? "ltr"}
      >
        {current.word}
      </span>
    </span>
  );
}
