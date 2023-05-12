/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4AB449",

          "secondary": "#19ABE3",

          "accent": "#C149AD",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#E5F8FF",

          "success": "#80CED1",

          "warning": "#EFD8BD",

          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

