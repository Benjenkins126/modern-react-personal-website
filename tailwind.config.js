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
        '578': '578px'
      },
      fontFamily: {
        'ben': ['Metropolis', 'sans-serif', 'system-ui']
      },
      colors: {
        'primary': '#5C9BFF',
        'secondary': '#9C53FF',
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
