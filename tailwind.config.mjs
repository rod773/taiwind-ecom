/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "DM Serif Text",
        sans: "",
      },
      backgroundImage: {
        imgmain: "url('./public/3.1 bg.jpg')",
      },
    },
  },
  plugins: [],
};
