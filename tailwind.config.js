/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      primary: '#DB5895',
      secondary: '#EAA03C',
      black: '#404040',
      white: '#ffffff',
      gray: '#f2f2f2'
    },
    spacing: {
      sm: '10px',
      md: '12px',
      lg: '14px',
      xl: '16px',
      '2xl': '18px',
      '3xl': '20px'
    }
  },
  plugins: []
};
