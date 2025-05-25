import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";

const useContrastTextColor = <T extends HTMLElement>(
  textRef: RefObject<T | null>,
): string => {
  const [textColor, setTextColor] = useState<string>("white");
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement("canvas"));

  useEffect(() => {
    const updateTextColor = () => {
      if (!textRef.current) return;

      const rect: DOMRect = textRef.current.getBoundingClientRect();
      const x: number = rect.left + rect.width / 2;
      const y: number = rect.top + rect.height / 2;

      const parent: HTMLElement | null = textRef.current.parentElement;
      if (!parent) return;
      const bgImage: string = window.getComputedStyle(parent).backgroundImage;

      if (bgImage && bgImage !== "none") {
        const imageUrl: string = bgImage.slice(5, -2);
        const img: HTMLImageElement = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;

        img.onload = () => {
          const canvas: HTMLCanvasElement = canvasRef.current;
          const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
          if (!ctx) return;
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          const bgPosX: number =
            parseFloat(window.getComputedStyle(parent).backgroundPositionX) ||
            0;
          const bgPosY: number =
            parseFloat(window.getComputedStyle(parent).backgroundPositionY) ||
            0;
          const bgSize: string = window.getComputedStyle(parent).backgroundSize;

          let sampleX: number = x - bgPosX;
          let sampleY: number = y - bgPosY;

          if (bgSize === "cover") {
            const imgRatio: number = img.width / img.height;
            const containerRatio: number =
              parent.offsetWidth / parent.offsetHeight;
            if (imgRatio > containerRatio) {
              const scaledHeight: number = parent.offsetHeight;
              const scaledWidth: number = scaledHeight * imgRatio;
              sampleX = (x / parent.offsetWidth) * scaledWidth;
              sampleY = (y / parent.offsetHeight) * scaledHeight;
            } else {
              const scaledWidth: number = parent.offsetWidth;
              const scaledHeight: number = scaledWidth / imgRatio;
              sampleX = (x / parent.offsetWidth) * scaledWidth;
              sampleY = (y / parent.offsetHeight) * scaledHeight;
            }
          }

          sampleX = Math.max(0, Math.min(sampleX, img.width - 1));
          sampleY = Math.max(0, Math.min(sampleY, img.height - 1));

          const pixelData: ImageData = ctx.getImageData(sampleX, sampleY, 1, 1);
          const [r, g, b] = pixelData.data;

          const luminance: number = 0.299 * r + 0.587 * g + 0.114 * b;
          const contrastColor: string = luminance > 128 ? "black" : "white";

          setTextColor(contrastColor);
        };
      }
    };

    const handleUpdate = () => {
      updateTextColor();
    };

    window.addEventListener("scroll", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    updateTextColor();

    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [textRef]);

  return textColor;
};

export default useContrastTextColor;
