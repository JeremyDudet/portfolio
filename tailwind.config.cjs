/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fristGradient: "#F4E8E5",
        secondGradient: "#DBDEF1",
        primary: "#230359",
        primaryFaded: "#A99AB4",
        secondary: "#FFFFFF",
      },
      fontFamily: {
        serif: ["system-ui", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [require("daisyui")],
};
