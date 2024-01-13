const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        Poppins:["Poppins", "sans-serif"],
        Quicksand:["Quicksand", "sans-serif"],
        'Satoshi': ['Satoshi', 'sans-serif'],
      },
      
      screens:{
        'iphone':'350px',
        'android':'400px',
        'ipad-tablet':'750px',
        'desktop':'1336px',
        'bigDevice':'1400px'
      },

   
      animation:{
        animeArrow:'animeArrow 1s cubic-bezier(.12,1.07,.37,1.04) forwards',
        marquee:'marquee 20s linear infinite',
        ripple:'ripple 1.5s ease-out infinite',
        sideBar:'sideBar .8s ease-out forwards'
      },
  
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(0%)'},
          '100%':{transform:'translate(-100%)'}
        },
        ripple:{
          '0%':{transform:'scale(1)', opacity:1},
          '100%':{transform:'scale(1.4)',opacity:0}
        },
        animeArrow:{
          '0%':{transform:'translateY(0px)', opacity:1},
          '50%':{transform:'translateY(70px)', opacity:0},
          '60%':{transform:'translateY(-50px)', opacity:0},
          '100%':{transform:'translateY(0px)', opacity:1}
        },
        sideBar:{
          '0%':{
            borderRadius:'40% 0 0 40%'
          },
          '100%':{
            borderRadius:'0 0 0 0'
          }
        }
        
      }
  
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ],
}
