/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4453bc',
          800: '#764ba2',
        },
        accent: {
          purple: '#764ba2',
          green: '#11998e',
          orange: '#ee0979',
          red: '#eb3349',
          darkred: '#c31432',
          blue: '#1e3c72',
          pink: '#f857a6',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-green': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        'gradient-red': 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
        'gradient-darkred': 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'gradient-pink': 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
        'gradient-teal': 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      },
    },
  },
  plugins: [],
}
