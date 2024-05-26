/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "blue-violet": "#627EEA",
          "dark-navy": "#191925",
          orange: "#F7931A",
          teal: "#01F1E3",
          pink: "#FE2264",
          "dark-navy-2": "#191932",
          "dark-blue": "#393978",
          "dark-gray": "#13121A",
          "dark-navy-3": "#1E1932",
        },
      },
      screens: {
        xs: "445px", // Adding custom breakpoint
      },
    },
  },
  plugins: [],
};
