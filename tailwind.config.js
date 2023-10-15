/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    colors:{
      white:"#ffffff",
      red:"#f52e2e",
      c_blue:"#344767",
      c_gray:"#3a474d",
      c_brown:"#5c281d",
      b_gray:"#28363c",
      b_slate:"#212529",
      a_black:"#000000",
      b_black:"#000000d9",
      c_black:"#00000073",

    }

  },
  plugins: [],
}

