'use client'
import { AnimatePresence, isMotionComponent, motion } from 'framer-motion'
import React, {useEffect, useState, useRef, useCallback, useLayoutEffect, forwardRef} from 'react'
import gsap from 'gsap'
import Footer from './footer'
import './styles.css'
const myProjects =[
  {
    id:0,
    name:'iPhone 14',
    img:'iphone-14-bg.png',
    year:2023
  },

  {
    id:1,
    name:'News App',
    img:'newsApp.png',
    year:2023
  },

  {
    id:2,
    name:'acap',
    img:'acap.png',
    year:2023
  },

  {
    id:3,
    name:'Usability hub',
    img:'usabilityLogo-bg.png',
    year:2023
  },
  {
    id:4,
    name:'Cythia ugwu',
    img:'cy-bg.png',
    year:2023
  }
]
 


const Projects = forwardRef((props, ref) => {
  const imgRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [ismouseIn, setIsMouseIn] = useState(false)

  const mouseenter = (index) =>{
    gsap.to(imgRef.current, {autoAlpha:1})
    setActiveIndex(index)
    setIsMouseIn(true)
  }

  const mouseleave = () =>{
    gsap.to(imgRef.current, {autoAlpha:0})
    setActiveIndex(null)
    setIsMouseIn(false)
  }



  return (
    <div className='w-full flex flex-col   justify-center items-center mt-10' ref={ref}>
        <div className='w-[95%]'>
                <div>
                    <svg width="767" height="115" viewBox="0 0 767 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.5396 112L80.1646 44.885L77.6846 34.81L75.2046 44.885L55.9846 112H32.2696L0.18457 6.60003H22.5046L42.4996 80.845L44.9796 91.54L47.4596 80.845L68.6946 6.60003H88.0696L108.995 80.845L111.63 91.85L113.955 80.845L133.95 6.60003H155.03L123.1 112H99.5396Z" fill="black"/>
                        <path d="M198.072 114.325C173.427 114.325 158.237 97.74 158.237 70.615C158.237 42.405 173.892 26.595 198.072 26.595C222.562 26.595 237.752 43.335 237.752 70.615C237.752 98.515 222.097 114.325 198.072 114.325ZM198.072 97.895C210.627 97.895 217.292 88.285 217.292 70.615C217.292 52.945 210.472 43.025 198.072 43.025C185.362 43.025 178.697 52.79 178.697 70.615C178.697 88.13 185.517 97.895 198.072 97.895Z" fill="black"/>
                        <path d="M252.176 112V28.92H272.016V41.01C277.441 31.09 285.811 26.595 294.801 26.595C298.211 26.595 301.311 27.525 302.861 28.92V46.125C300.226 45.35 297.281 45.04 293.716 45.04C278.681 45.04 272.016 54.03 272.016 67.825V112H252.176Z" fill="black"/>
                        <path d="M313.328 112V0.400024H333.168V63.64L363.238 28.92H386.488L353.008 65.81L388.813 112H364.478L333.168 71.855V112H313.328Z" fill="black"/>
                        <path d="M468.742 84.875C464.247 104.095 449.367 114.325 429.527 114.325C404.417 114.325 389.072 97.74 389.072 70.615C389.072 42.405 404.572 26.595 428.752 26.595C453.087 26.595 468.122 43.025 468.122 69.84V74.49H409.532C410.462 89.68 417.437 98.05 429.527 98.05C438.827 98.05 445.182 93.71 447.817 84.875H468.742ZM428.752 42.87C418.212 42.87 411.857 49.535 409.997 62.09H447.352C445.492 49.69 439.137 42.87 428.752 42.87Z" fill="black"/>
                        <path d="M514.166 114.325C492.466 114.325 479.136 97.74 479.136 70.615C479.136 42.405 492.776 26.595 514.166 26.595C523.311 26.595 530.906 30.47 536.021 37.91V0.400024H555.861V112H536.021V102.545C530.751 110.14 523.311 114.325 514.166 114.325ZM517.731 97.895C529.666 97.895 536.021 88.285 536.021 70.615C536.021 52.945 529.356 43.025 517.731 43.025C505.951 43.025 499.596 52.79 499.596 70.615C499.596 88.13 506.106 97.895 517.731 97.895Z" fill="black"/>
                        <path d="M639.762 114.325C615.117 114.325 599.927 97.74 599.927 70.615C599.927 42.405 615.582 26.595 639.762 26.595C664.252 26.595 679.442 43.335 679.442 70.615C679.442 98.515 663.787 114.325 639.762 114.325ZM639.762 97.895C652.317 97.895 658.982 88.285 658.982 70.615C658.982 52.945 652.162 43.025 639.762 43.025C627.052 43.025 620.387 52.79 620.387 70.615C620.387 88.13 627.207 97.895 639.762 97.895Z" fill="black"/>
                        <path d="M693.865 112V28.92H713.705V40.08C719.13 31.09 727.81 26.595 738.35 26.595C754.935 26.595 766.25 36.515 766.25 56.665V112H746.41V60.695C746.41 49.38 741.605 43.025 731.53 43.025C720.525 43.025 713.705 52.635 713.705 63.795V112H693.865Z" fill="black"/>
                    </svg>
                

                </div>

                
                <motion.div   className='flex flex-col gap-2 mt-10'>
                 
                 {
                  myProjects.map((project)=>{
                      
         
                    return(
                      <div className='w-full flex justify-between px-5 py-10  items-center border-t border-red-500 relative' onMouseEnter={()=>{mouseenter((project.id))}} onMouseLeave={mouseleave}  >
                          <p className='text-[4.5em] font-Satoshi text-red-400 font-bold'>{project.name}</p>
                          <p className='text-[2.4em] font-Satoshi text-red-400 '>{project.year}</p>
                          {
                            ismouseIn 
                            &&
                             activeIndex === project.id  && <img  ref={imgRef} src={project.img} className='w-[400px] pointer-events-none border border-slate-900 absolute'  /> 
                          }
                  </div> 
                    )
                  })
                 }
                

                </motion.div>
        </div>
        
    </div>
  )
})

export default Projects