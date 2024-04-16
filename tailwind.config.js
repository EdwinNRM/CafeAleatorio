/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.ihtml",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nsmono: ["Noto Sans Mono", "monospace"]
      }
    }
  },
  plugins: [],
}
