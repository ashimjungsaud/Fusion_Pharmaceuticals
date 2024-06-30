/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
        'stats-background': "url('/images/wideImage.jpeg')",
    },
  },
  plugins: [],
}

