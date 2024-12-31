/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        "2md": "960px",
      },
      colors: {
        primary: "#7E3AF2",
        secondaryText: "#6B7280",
        mainText: "#111928",
        "clr-grey": "#9194A2",
        "clr-white": "#f7f7f7",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
