/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        myBounce_in: {
          "0%, 100%": { transform: "translateY(-10%)", color: "white" },
          "3%, 97%": { transform: "translateY(0%)", color: "black" },
        },
        myBounce_scale: {
          "0%, 100%": { transform: "scale(105%)" },
          "10%, 90%": { transform: "scale(100%)" },
        },
      },
      animation: {
        myBounce: "myBounce_in 6s ease-in-out infinite",
        myBounce_scale: "myBounce_scale 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
