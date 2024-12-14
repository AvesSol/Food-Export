/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend Tailwind here if needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.faded': {
          position: 'relative',
           transition: 'all 200ms linear',
        },
        '.faded:before': {
          content: "''",
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          left: '0',
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.103))',
          zIndex: '10',
          transition: 'all 200ms linear',
        },
      }, {
        variants: ['hover'], // Apply to hover
      });
    }
  ],
}
