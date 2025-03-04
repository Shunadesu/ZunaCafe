export const createSlug = (string) =>
    string
      .toLowerCase()
      .normalize("NFD")
      .replace(/đ/g, "d") // Convert "đ" to "d"
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim() // Remove leading/trailing spaces
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  