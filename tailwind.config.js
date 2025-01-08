/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        dark: "#161622",
        border: "#232533"
      },
      fontFamily: {
        pblack: ["Poppins-Black"],
        pbold: ["Poppins-Bold"],
        pextrabold: ["Poppins-ExtraBold"],
        pextralight: ["Poppins-ExtraLight"],
        plight: ["Poppins-Light"],
        pmedium: ["Poppins-Medium"],
        pregular: ["Poppins-Regular"],
        psemibold: ["Poppins-SemiBold"],
        pthin: ["Poppins-Thin"],
      },
    },
  },
  plugins: [],
} 