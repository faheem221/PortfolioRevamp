'use client'
import React, { forwardRef, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import {motion} from 'framer-motion'
import gsap from "gsap";
import ScrollTrigger from "gsap/all"; 
const DesEng=forwardRef((props, ref)=>{
    const boxOne = useRef(null)
    const boxTwo = useRef(null)
    

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        if(props.refStore.responsiveRef.ref.current){
            gsap.fromTo(boxOne.current, {x:'65%'}, 
            {
                x:'0%',
                scrollTrigger:{
                    trigger:props.refStore.responsiveRef.ref.current,
                    start:'+=150px',
                    end:'+=350',
                    scrub:2,
                }
            })

            gsap.fromTo(boxTwo.current, {x:'-50%'}, 
            {
                x:'0%',
                scrollTrigger:{
                    trigger:props.refStore.responsiveRef.ref.current,
                    start:'+=150px',
                    end:'+=350',
                    scrub:2,
                }
            })
        
           
        }
        
    }, []) 


   return(
    
    <React.Fragment>
    
    <div className=" flex justify-center items-center w-full mt-14 iphone:px-1 ipad-tablet:px-5" ref={ref} >
       <div className="flex flex-col iphone:gap-3 items-center iphone:w-[98%] ipad-tablet:w-[95%] desktop:flex-row desktop:justify-between ">

        <motion.div ref={boxOne}  className="iphone:w-[300px] ipad-tablet:w-[650px] rounded-2xl iphone:py-6 ipad-tablet:py-7 px-6 iphone:h-[380px] ipad-tablet:h-[400px]   bg-black  ">
            <div className="font font-Poppins font-semibold iphone:text-[2.4em] ipad-tablet:text-[4.5em] text-slate-100 bg-[linear-gradient(45deg,_rgb(205,_254,_209),_rgb(251,_239,_208))] bg-clip-text text-transparent">Design</div>
            <div className="font font-rubik iphone:text-[1.1em] ipad-tablet:text-[1.6em] text-slate-200">I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</div>
        </motion.div>
        
        <motion.div ref={boxTwo}  className="iphone:w-[300px] ipad-tablet:w-[650px]  rounded-2xl py-7 px-6 iphone:h-[350px] ipad-tablet:h-[400px]  bg-black ">
            <div className="font font-Poppins font-semibold iphone:text-[2.4em] ipad-tablet:text-[4.5em] text-slate-100 bg-[linear-gradient(45deg,_rgb(168,_255,_225),_rgb(228,_199,_255))] bg-clip-text text-transparent">Engineering</div>
            <div className="font font-rubik iphone:text-[1.1em] ipad-tablet:text-[1.6em] text-slate-200">
            In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
            </div>
        </motion.div>
       
       
       </div>
    </div>
</React.Fragment>
   )
})

export default DesEng