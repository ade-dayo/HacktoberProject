/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
    extend: {
      animation: ['motion-safe'],
      darkMode: 'class',
      colors: {
        primary1: "#FFFFFF",
        primary2: "#000000",
        sec1: "#3D3E3E",
        sec2: "#D7D7D7"
        
        
      },
      
      fontSize: {
        pS: "16px",
        pL: "20px",
        pXL: "24px",
        pXXL: "4rem",
        pXXXL:"5rem"
      },

      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
        
        
      },
    },
  },
  plugins: [],
}

