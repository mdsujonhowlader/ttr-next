export function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // special char remove
    .replace(/\s+/g, "-"); // space → dash
}
