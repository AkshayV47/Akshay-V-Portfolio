import { useState, useEffect, useRef } from "react";

interface TypewriterPhrase {
  prefix: string;
  word: string;
}

export const useTypewriter = (
  phrases: TypewriterPhrase[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 2000
) => {
  const [prefix, setPrefix] = useState(phrases[0]?.prefix ?? "");
  const [typedWord, setTypedWord] = useState("");
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    phase: "typing" as "typing" | "pausing" | "deleting",
  });

  useEffect(() => {
    stateRef.current = { wordIndex: 0, charIndex: 0, phase: "typing" };
    if (phrases.length === 0) {
      setPrefix("");
      setTypedWord("");
      return;
    }
    setPrefix(phrases[0].prefix);
    setTypedWord("");

    let active = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!active || phrases.length === 0) return;
      const s = stateRef.current;
      s.wordIndex = s.wordIndex % phrases.length;
      const current = phrases[s.wordIndex];

      if (s.phase === "typing") {
        s.charIndex = Math.min(s.charIndex + 1, current.word.length);
        setTypedWord(current.word.slice(0, s.charIndex));
        if (s.charIndex >= current.word.length) {
          s.phase = "pausing";
          timer = setTimeout(tick, pauseTime);
        } else {
          timer = setTimeout(tick, typingSpeed);
        }
      } else if (s.phase === "pausing") {
        s.phase = "deleting";
        timer = setTimeout(tick, deletingSpeed);
      } else {
        s.charIndex = Math.max(s.charIndex - 1, 0);
        setTypedWord(current.word.slice(0, s.charIndex));
        if (s.charIndex <= 0) {
          s.phase = "typing";
          s.wordIndex = (s.wordIndex + 1) % phrases.length;
          setPrefix(phrases[s.wordIndex].prefix);
          timer = setTimeout(tick, typingSpeed);
        } else {
          timer = setTimeout(tick, deletingSpeed);
        }
      }
    };

    timer = setTimeout(tick, typingSpeed);
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseTime]);

  return { prefix, typedWord };
};
