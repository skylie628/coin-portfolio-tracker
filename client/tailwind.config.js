/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
    },
    extend: {
      zIndex: {
        100: "100",
        max: "9999",
      },
      animation: {
        "move-right": "moveRight 0.4s ease-out ",
      },
      keyframes: {
        moveRight: {
          "0%, 100%": { transform: "translateX(0)", opacity: 1 },
          "50%": { transform: "translateX(10px)", opacity: 0 },
          "51%": { transform: "translateX(-10px)", opacity: 0 },
        },
      },
      colors: {
        blacker: "#080d24",
        blackest: "#020617",
        halfblack: "#1e293b",
        dimgray: "#64748b",
        silver: "#e2e8f0",
        lightstar: "#f8fafc",
        orange: "#f59e0b",
        metalgray: "#F5F5F7",
        metaldark: "rgb(202,202,204)",
        meshgrid: "rgba(100, 116, 139,0.3)",
        greenstats: "#16C784",
        redstats: "#EA3943",
        carotene: "#FE4F31",
      },
      backgroundImage: {
        "sign-pattern":
          "url('https://coiportcdn.s3.ap-southeast-2.amazonaws.com/sign-backdrop.webp')",
        "noise-pattern":
          "url('https://coiportcdn.s3.ap-southeast-2.amazonaws.com/noisy.png')",
      },
      aspectRatio: {
        sparkline: "135/50",
      },
    },
  },
  plugins: [],
};
