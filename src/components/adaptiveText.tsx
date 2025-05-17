import { useRef } from "react";
import { useBackgroundBrightness } from "./hooks";

interface AdaptiveTextProps {
  children: React.ReactNode;
  className?: string;
  lightTextClass?: string;
  darkTextClass?: string;
}

const AdaptiveText = ({
  children,
  className = "",
  lightTextClass = "text-black",
  darkTextClass = "text-white",
}: AdaptiveTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isDarkBackground = useBackgroundBrightness(textRef);

  const textColorClass = isDarkBackground ? darkTextClass : lightTextClass;

  return (
    <div
      ref={textRef}
      className={`${className} ${textColorClass} transition-colors duration-300`}
    >
      {children}
    </div>
  );
};

export default AdaptiveText;
