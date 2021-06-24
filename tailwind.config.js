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
      primary: "#6C7CB4",
      secondary: "#D6DFFF",
      warning: "#FF3333",
      transparent: "transparent",
    },
    boxShadow: {
      "out-a1": "2px 2px 4px #BBCAFF, -2px -2px 4px rgba(255, 255, 255, 0.6)",
      "out-b1": "10px 10px 20px #bbcaff99, -10px -10px 20px #ffffff66",
      "out-c1": "4px 4px 8px #BBCAFF",
      "out-d1": "4px 4px 8px #BBCAFF, -4px -4px 8px rgba(255, 255, 255, 0.6)",
      "in-c1":
        "inset 1px 1px 2px #BBCAFF,inset -1px -1px 2px rgba(255, 255, 255, 0.6)",
      "in-out-a1":
        "2px 2px 4px #BBCAFF, -2px -2px 4px rgba(255, 255, 255, 0.6), inset 2px 2px 4px #BBCAFF,inset -2px -2px 4px rgba(255, 255, 255, 0.6)",
    },
    backgroundColor: (theme) => ({
      a1: "#D6DFFF",
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
      animation: {
        turn: "turn 10s linear infinite",
        colorChange1: "colorChange1 10s linear infinite",
        colorChange2: "colorChange2 10s linear infinite",
        stroke: "stroke 3s ease forwards",
        wind: "wind 3s linear infinite",
        pressure: "pressure 5s ease infinite",
        stroke1: "stroke1 0.7s ease-out infinite",
        stroke2: "stroke2 1s linear infinite",
        search: "search 3s linear forwards",
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
        search: {
          "0%": {
            width: "40px",
            boxShadow:
              "2px 2px 4px #bbcaff, -2px -2px 4px rgb(255 255 255 / 60%)",
          },
          "30%": {
            width: "40px",
            boxShadow:
              "2px 2px 4px #bbcaff, -2px -2px 4px rgb(255 255 255 / 60%)",
          },
          "60%": {
            width: "40px",
            boxShadow:
              "2px 2px 4px #BBCAFF, -2px -2px 4px rgba(255, 255, 255, 0.6), inset 2px 2px 4px #BBCAFF,inset -2px -2px 4px rgba(255, 255, 255, 0.6)",
          },
          "70%": {
            width: "40px",
          },
          "100%": {
            padding: "0 40px 0 20px",
            width: "240px",
            boxShadow:
              "2px 2px 4px #BBCAFF, -2px -2px 4px rgba(255, 255, 255, 0.6), inset 2px 2px 4px #BBCAFF,inset -2px -2px 4px rgba(255, 255, 255, 0.6)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
