const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 214 32% 91%))",
        background: "hsl(var(--background, 220 20% 98%))",
        foreground: "hsl(var(--foreground, 222 47% 11%))",
      },
      fontFamily: {
        sans: ["Lato", "var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
