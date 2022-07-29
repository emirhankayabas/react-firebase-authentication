/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0a66c2",
        triangle: "transparent transparent red transparent",
      },
      boxShadow: {
        inputFocus: "0 0 0 2px #0a66c2",
        wrapperFocus: "0 4px 12px rgb(0 0 0 / 15%)",
        button:
          "inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%)",
        buttonHover: "inset 0 0 0 2px rgb(0 0 0 / 60%) !important",
        header: "0 2px 6px 0 rgb(0 0 0 / 12%), inset 0 -1px 0 0 #dadce0",
      },
    },
  },
  plugins: [],
};
