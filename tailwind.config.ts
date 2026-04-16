import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F1117',
        'dark-2': '#161B22',
        'dark-3': '#21262D',
        'dark-4': '#30363D',
        'dark-5': '#484F58',
        'dark-6': '#6E7681',
        'dark-7': '#8B949E',
        'dark-8': '#C9D1D9',
        'dark-9': '#E6EDF3',
        purple: '#8646DC',
        cyan: '#00D9FF',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11': '2.75rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '13.5': '3.375rem',
        '14.5': '3.625rem',
        '15': '3.75rem',
        '17.5': '4.375rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '22.5': '5.625rem',
        '25': '6.25rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        '32.5': '8.125rem',
        '35': '8.75rem',
      },
      zIndex: {
        '999': '999',
        '1000': '1000',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'linear-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'linear-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
