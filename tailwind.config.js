module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#1E1C1D",
          primary: "#661AE6",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      // "dark",
      // "light",
    ],
  },
};
