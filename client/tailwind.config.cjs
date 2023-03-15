/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#fff',
      'black':'#000',
      'green':'#b8ff56',
      'red':'#ff6963',
      'blue':'#54c0ff',
      'primary': '#13fa94',
      'light-text': '#8493bc',
      'lighter-text': '#515b71',
      'card-background': '#151821',
      'page-background': '#0a0c11',
      'main-background': '#07090c',
      'hr-top-color': '#141720',
      'hr-bottom-color': '#1c202a',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}