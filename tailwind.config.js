/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  safelist: [
    'bg-red-700',
    'text-red-700',
    'font-bold',
    'bg-gigas-700',
    'text-gigas-700',
  ],
  theme: {
    extend: {
      colors: {
        uivory: {
          50: '#f8f7f4',
          100: '#efede6',
          200: '#ddd9cb',
          300: '#c8bfa9',
          400: '#b0a187',
          500: '#a08d6f',
          600: '#937d63',
          700: '#7b6753',
          800: '#655547',
          900: '#53463b',
          950: '#2c241e',
        },
        gigas: {
          '50': '#f0f1fd',
          '100': '#e4e6fb',
          '200': '#ced1f7',
          '300': '#b1b4f0',
          '400': '#9491e8',
          '500': '#8176de',
          '600': '#705bd0',
          '700': '#604bb7',
          '800': '#5645a1',
          '900': '#433976',
          '950': '#282145',
        },          
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

