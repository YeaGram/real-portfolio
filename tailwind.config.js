/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        myBounce_in_light: {
          "0%, 100%": { transform: "translateY(-10%)", color: "white" },
          "3%, 97%": { transform: "translateY(0%)", color: "black" },
        },
        myBounce_in_dark: {
          "0%, 100%": { transform: "translateY(-10%)", color: "black" },
          "3%, 97%": { transform: "translateY(0%)", color: "white" },
        },
        myBounce_scale: {
          "0%, 100%": { transform: "scale(105%)" },
          "10%, 90%": { transform: "scale(100%)" },
        },
      },
      animation: {
        myBounce_light: "myBounce_in_light 6s ease-in-out infinite",
        myBounce_dark: "myBounce_in_dark 6s ease-in-out infinite",
        myBounce_scale: "myBounce_scale 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
