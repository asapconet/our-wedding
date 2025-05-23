
export const downloadImage = async (
  imageUrl: string,
  filename: string
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
  category?: string
): string => {
  const baseName = `${groomName}-${brideName}`;
  const categorySuffix = category ? `-${category}` : "";
  return `${baseName}${categorySuffix}-${imageId}.jpg`;
};
