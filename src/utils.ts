export function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

export function isDocument(src: string) {
  return /\.(pdf|pptx|docx|txt|xlsx|csv)$/i.test(src);
}

export function sizeClass(depth?: number) {
  switch (depth) {
    case 0:
      return "text-5xl";
    case 1:
      return "text-4xl";
    case 2:
      return "text-3xl";
    case 3:
      return "text-2xl";
    default:
      return "text-5xl";
  }
}
