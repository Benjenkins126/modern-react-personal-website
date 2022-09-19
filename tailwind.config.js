/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./src/**/**/*.{js,jsx,ts,tsx,}",
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/assets/img/home-background.png')",
      },
      width: {
        '1350': '1350px',
        '268': '268px',
        '305': '305px',
      },
      fontFamily: {
        'ben': ['Metropolis', 'sans-serif', 'system-ui']
      },
      colors: {
        'primary': '#5C9BFF',
        'secondary': '#9C53FF'
      }
    },
  },
  plugins: [],
}
