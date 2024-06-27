module.exports = {
  content: ["./index.html", "./script.js", "./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        richBlack: "#0D0D0D",
        jetBlack: "#1A1A1A",
        charcoal: "#333333",
        darkGray: "#4D4D4D",
        ivory: "#FFFFF0",
        paleGold: "#E6D8AC",
        lightBeige: "#F5F5DC",
        softTaupe: "#D8CFC4",
        vibrantBlue: "#007ACC", // Replacing deep blue
        vibrantRed: "#FF4500", // Replacing burgundy
        emeraldGreen: "#50C878",
        charcoalGray: "#36454F",
        gold: "#FFD700",
      },
      keyframes: {
        blowUp: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
        bounce: {
          "0%, 100%, 20%, 50%, 80%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        blowUp: "blowUp 1s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
