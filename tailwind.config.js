/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#f4f4f5",
        lime: "#2bd410",
        "emerald-theme": "#059669",
        "zinc-theme": "#a1a1aa",

        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        // dark theme
        "gray-20-dark": "#272727",
        "gray-50-dark": "#3D3D3D",
        "gray-100-dark": "#555555",
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
        "gradient-theme": "linear-gradient(90deg, #2bd410, #047857)",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        rocksalt: ["Montserrat", "sans-serif"],
      },
      content: {
        ofmabg: "url('./assets/ofma-bg.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      ml: "1200px",
      ml2: "1260px",
      lg: "1480px",
      se: { raw: "(max-width: 376px) and (max-height: 700px)" },
    },
  },
  plugins: [],
}
