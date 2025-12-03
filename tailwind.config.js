/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Акценти
        primary: "#FFB088",   
        secondary: "#9C6644", 

        // Основи
        dark: "#3e1f08ff",      
        paper: "#F7F4F2",     
        
        // Текстове (Сложихме кавички тук, за да оправим грешката)
        "txt-main": "#E8E0D9",  
        "txt-muted": "#A89F91", 
        "txt-dark": "#2B1810",  
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}