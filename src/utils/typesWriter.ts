export const typeWriter = (
  text: string,
  options: {
    speed?: number;
    onUpdate?: (currentText: string) => void;
    startFrom?: number;
  } = {}
): Promise<void> => {
  const { speed = 20, onUpdate, startFrom = 0 } = options;

  return new Promise((resolve) => {
    let currentLength = startFrom;

    const typeNextCharacter = () => {
      if (currentLength < text.length) {
        const currentText = text.slice(0, currentLength + 1);
        onUpdate?.(currentText);
        currentLength++;

        setTimeout(typeNextCharacter, speed);
      } else {
        resolve();
      }
    };

    typeNextCharacter();
  });
};
