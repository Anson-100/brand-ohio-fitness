/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lime: "#33FE12",
        charcoal: "#323232",
        grayish: "#EEEEEE",
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        // dark theme
        "gray-20-dark": "#272727",
        "gray-50-dark": "#3D3D3D",
        "gray-100-dark": "#555555",
        "gray-500-dark": "#A5A5A5",
        "primary-100-dark": "#1F1C1B",
        "primary-300-dark": "#63302F",
        "primary-500-dark": "#8B4442",
        "secondary-400-dark": "#8B7500",
        "secondary-500-dark": "#A68C00",
      },
      backgroundImage: theme => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        rocksalt: ["Rock Salt", "cursive"],
      },
      content: {
        evotext: "url('./assets/EvolveText.png')",
        ofmabg: "url('./assets/ofma-bg.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1480px",
    },
  },
  plugins: [],
}
