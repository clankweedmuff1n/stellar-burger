/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        custom: ['144px', '120px'],
      },
      gridTemplateColumns: {
        'custom': 'repeat(2, 1fr)',
      },
      colors: {
        "header-bg": "#131316",
        "overlay-bg": "rgba(0, 0, 0, 0.6)",
        "dark-bg": "#1C1C21",
        "purple": "#4c4cff",
        "purple-dark": "rgba(76, 76, 255, 0.2)",
        "white-custom": "#F2F2F3",
        "purple-light": "#8585ad",
      },
      boxShadow: {
        "details-shadow": "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)",
        "shadow-modal": "0 24px 32px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04)"
      },
      borderRadius: {
        "modal": "40px"
      }
    },
  },
  plugins: [],
}

