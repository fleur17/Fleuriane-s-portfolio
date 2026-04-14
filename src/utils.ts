export function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

export function isDocument(src: string) {
  return /\.(pdf|pptx|docx|txt|xlsx|csv)$/i.test(src);
}
