/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#313F38",
        "secondary": "#FCD043",
        "custom-white": "#FFFCF6",
        "text": "#1B3B36",
        "error": "#B03E3E",
        "success": "#2A5B46",
        "attention": "#DC9B39",
      },
    },
  },
  plugins: [],
};
