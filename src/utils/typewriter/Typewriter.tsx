import { useEffect, useState } from "react";
import typeWriterStyle from "./typewriterStyle.module.css";

interface TypeWritterProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const TypeWritter: React.FC<TypeWritterProps> = ({
  texts,
  typingSpeed = 100,
  pauseDuration = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (charIndex < texts[textIndex].length) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, textIndex, texts, typingSpeed, pauseDuration]);

  return <span className={typeWriterStyle.typewriter}>{displayedText}</span>;
};

export default TypeWritter;
