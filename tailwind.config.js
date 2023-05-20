/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        bgPrimary: "#fff",
        bgSecondayColor: "#F9EFF5",
        bgTertiaryColor: "#E8ECFE",
        bgQuaternaryColor: "#F7F7FF",
        fontPrimaryColor: "#1f1f41",
        fontSecondaryColor: "#706EFF",
        fontTertiaryColor: "#7679B5",
      },
    },
  },
  plugins: [],
};
