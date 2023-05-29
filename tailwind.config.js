/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "myprimary-200": "#f2755e",
        "myprimary-100": "#edbeb4",
        "mysecondary-300": "#2C2B30",
        "mysecondary-200": "#3d3c42",
        "mysecondary-100": "#D6D6D6"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'monospace'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
        mySerif: ['DM Serif Display', 'serif'],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
