module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      oxanium: ["Oxanium", "cursive"],
      raleway: ["Raleway", "sans-serif"],
      cairo: ["Cairo", "sans-serif"],
    },
    textColor: {
      primary: "#212121",
      secondary: "#FFF",
      warning: "#FF3333",
    },
    boxShadow: {
      a1: "0 6px 10px rgba(0, 0, 0, 0.2)",
    },
    backgroundColor: (theme) => ({
      a1: "#F9F9F9",
      a2: "#0F1C49",
      a3: "#0F1C49",
      input1: "#F2F2F2",
      red: "#ff0000",
    }),
    inset: {
      0: "0",
      "100%": "100%",
      "1/2": "50%",
      y1: "64px",
      x2: "-88px",
      y2: "-24px",
      x3: "calc(50% - 15px)",
      y3: "calc(50% - 15px)",
    },
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
      },
      animation: {
        turn: "turn 10s linear infinite",
        colorChange1: "colorChange1 10s linear infinite",
        colorChange2: "colorChange2 10s linear infinite",
        stroke: "stroke 3s ease forwards",
        wind: "wind 3s linear infinite",
        pressure: "pressure 5s ease infinite",
        stroke1: "stroke1 0.7s ease-out infinite",
        stroke2: "stroke2 1s linear infinite",
      },
      keyframes: {
        turn: {
          "0%": { transform: "rotate(-25deg)" },
          "100%": { transform: "rotate(205deg)" },
        },
        colorChange1: {
          "0%": { fill: "#FFF100", stroke: "#FFC339" },
          "100%": { fill: "#FFA800", stroke: "#FF5C00" },
        },
        colorChange2: {
          "0%": { fill: "#FFC339" },
          "100%": { fill: "#FF5C00" },
        },
        stroke: {
          "100%": { strokeDashoffset: 0 },
        },
        wind: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pressure: {
          "0%,100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(140deg)" },
          "60%,70%,80%": { transform: "rotate(110deg)" },
          "65%,75%,85%": { transform: "rotate(140deg)" },
        },
        stroke1: {
          "100%": { strokeDashoffset: 0 },
        },
        stroke2: {
          "100%": { strokeDashoffset: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
