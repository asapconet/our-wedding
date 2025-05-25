import { IMAGE_ID_RANGES } from "@constants/gallery";

export const downloadImage = async (
  imageUrl: string,
  filename: string,
): Promise<void> => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename || "ayo-osa-wedding-photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
    alert("Download failed. Please try again.");
  }
};

export const generateFilename = (
  imageId: number,
  groomName: string = "ayo",
  brideName: string = "osa",
  category?: string,
): string => {
  const baseName = `${groomName}-${brideName}`;
  const categorySuffix = category ? `-${category}` : "";
  return `${baseName}${categorySuffix}-${imageId}.jpg`;
};

export const imageIds = (() => {
  const numbers = ((start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  })(IMAGE_ID_RANGES.start, IMAGE_ID_RANGES.end);

  const randomizedNumbers = numbers.sort(() => Math.random() - 0.5);

  const batchedArrayOfNumbers = ((array: number[], batchSize: number) => {
    const batches = [];
    for (let i = 0; i < array.length; i += batchSize) {
      batches.push(array.slice(i, i + batchSize));
    }
    return batches;
  })(randomizedNumbers, IMAGE_ID_RANGES.batchSize);

  return batchedArrayOfNumbers;
})();
