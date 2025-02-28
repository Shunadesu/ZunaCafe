/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        day: "#ffd700",  // Gold
        night: "#020216", // Dark Blue
      },
      
    },
  },
  plugins: [],
};
