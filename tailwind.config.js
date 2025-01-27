module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3490dc", // your primary color
        secondary: "#ff6f61", // your secondary color
        // primary: "#1D4ED8",
        // secondary: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // your custom font family
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out", // Adding fade-in animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
