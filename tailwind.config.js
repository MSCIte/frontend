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
      height: {
        128: "32rem",
      },
      width: {
        320: "80rem",
        128: "32rem",
      },
    },
  },
  safelist: [
    {
      pattern:
        /bg-(red|green|orange|yellow|blue|purple|pink|indigo|gray|slate|rose)-[0-9]{1,2}00/,
    },
    {
      pattern:
        /border-l-(red|green|orange|yellow|blue|purple|pink|indigo|gray|slate|rose)-[0-9]{1,2}00/,
    },
  ],
  plugins: [],
};
