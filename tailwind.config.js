/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: "#0093F4",
        secondary: "#F59E0B",
        boldColor: '#757575',
      },
      screens: {
        mobile: {
          max: '740px'
        },
        desktop: {
          min: '741px'
        }
      }
    },
  },
  plugins: [],
};