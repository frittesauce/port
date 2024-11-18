/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "text-color": "var(--text-color)",
        "top-color": "var(--top-color)",
        "highlight": "var(--highlight-color)",
      },
    },
  },
};
