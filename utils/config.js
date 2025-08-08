//export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";


if (!baseUrl) {
  console.error("Missing NEXT_PUBLIC_API_URL environment variable!");
}
