/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 5s ease-in forwards",
      },
      transitionProperty: {
        width: "width",
        "margin-right": "margin-right",
      },
    },
  },
  safelist: [
    {
      pattern:
        /bg-(red|green|orange|yellow|blue|purple|pink|indigo|gray)-[0-9]{1,2}00/,
    },
  ],
  plugins: [],
};
