/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
    },
    extend: {
      colors: {
        blackest: "#020617",
        halfblack: "#1e293b",
        dimgray: "#64748b",
        silver: "#e2e8f0",
        lightstar: "#f8fafc",
        orange: "#f59e0b",
      },
    },
  },
  plugins: [],
};
