module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {
      margin: {
        11: '2.75rem',
      },
      colors: {
        'pink-6': '#E64980',
        border: '#E9ECEF',
      },
      height: {
        15: '3.75rem',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
