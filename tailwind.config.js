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
    width: {
      full: '100%',
      screen: '100vw',
      half: '50%',
      base: '768px'
    },
    colors: {
      primary: '#DB5895',
      secondary: '#EAA03C',
      black: '#404040',
      white: '#ffffff',
      gray: '#f2f2f2',
      transparent: 'transparent'
    },
    spacing: {
      // 1px ~ 9px
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
      '5px': '5px',
      '6px': '6px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',

      // 10px ~ 자주 사용되는 단위로
      sm: '10px',
      md: '12px',
      lg: '14px',
      xl: '16px',
      '2xl': '18px',
      '3xl': '20px',
      '4xl': '30px'
    }
  },
  plugins: []
};
