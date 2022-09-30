/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./src/**/**/*.{js,jsx,ts,tsx,}",
    "./src/**/*.{js,jsx,ts,tsx,}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}"
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
        '578': '578px',
        '586': '586px',
        '124': '124px',
        '502': '502px'
      },
      height: {
        '40': '40px'
      },
      lineHeight: {
        '40': '40px',
        '48': '48px',
        '18': '18px'
      },
      fontFamily: {
        'ben': ['Metropolis', 'sans-serif', 'system-ui']
      },
      fontSize: {
        '9': '9px'
      },
      colors: {
        'primary': '#5C9BFF',
        'secondary': '#9C53FF',
        'background': '#151A2F',
        'background-secondary': '#121522',
        'github-section': '#1C2138',
        'success-green': '#197C19'
      },
      boxShadow: {
        'github': '0 15px 50px rgba(0, 0, 0, .11)'
      }
    },
  },
  plugins: [],
}
