/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./layout/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        greengradient:"linear-gradient(84.81deg, rgba(72, 106, 111, 0.2) 0%, rgba(67, 151, 164, 0.2) 100%), #486A6F",
        lightgreengradient:"linear-gradient(104.26deg, rgba(67, 151, 164, 0.2) 0.88%, rgba(91, 204, 222, 0.2) 99.89%), #4397A4"
      },
      colors:{
        brandGreen:{
          dark:'#486A6F',
          light:'#5BCCDE',
          DEFAULT:'#678C92',
          blurred:"#4397A4",
          gradient:'linear-gradient(104.26deg, rgba(67, 151, 164, 0.2) 0.88%, rgba(91, 204, 222, 0.2) 99.89%), #4397A4'
        }
      },
      container:{
        center:true
      },
    },
  },
  plugins: [],
  // safelist:[ { pattern: /.*/, }]
}
