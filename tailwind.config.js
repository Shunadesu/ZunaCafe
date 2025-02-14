/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd700",  // Gold
        secondary: "#020216", // Dark Blue
      },
      
    },
  },
  plugins: [],
};
