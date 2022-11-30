/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg01.jpg')",
        farm: "url('/images/bg-farm.jpg')",
      },
      container: {
        center: true,
      },
    },
  },
};
