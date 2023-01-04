const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    // ...
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "bg-base": "var(--bg-base)",
        "bg-medium": "var(--bg-medium)",
        "bg-press": "var(--bg-press)",
        "text-base": "var(--text-base)",
        "text-subdued": "var(--text-subdued)",
        primary: "var(--primary)",
      },
      animation: {
        toUp: "toUp 0.3s ease-in-out infinite",
        rotateInfinity: "rotateInfinity 4s linear infinite",
      },
      keyframes: {
        toUp: {
          from: {
            transform: "translateY(25%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        rotateInfinity: {
          from: {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
};
