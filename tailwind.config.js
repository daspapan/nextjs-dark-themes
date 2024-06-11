/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        default: "1rem",
        md: "1.5rem",
        lg: "2rem"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        size: {
          "3x1": "3rem"
        },
        fontWeight: {
          bold: "700"
        },
        fontColor: {
          primary: "#333",
          secondary: "#666"
        }
      },
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
