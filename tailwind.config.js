/** @type {import('tailwindcss').Config} */

import textShadow from "tailwindcss-textshadow";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./src/assets/main-bg-2.jpg')",
        giphy: "url('./src/assets/giphy.webp')",
      },
    },
  },
  plugins: [textShadow],
};
