"use client"
 
import { forwardRef, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { TfiInfinite } from "react-icons/tfi";
import "./styles.css";
const head = forwardRef((props, ref)=>{
    const [ham, setHam] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 0){
                setHam(false)
            }
        })
    }, [])
    
    
    const contactClick = () =>{
        if(props.refStore.footerRef.ref.current){
            window.scrollTo({
                top:props.refStore.footerRef.ref.current.offsetTop,
                behavior:'smooth',
              })
        }
    }

    const projectClick = () =>{
        if(props.refStore.projectRef.ref.current){
            window.scrollTo({
                top:props.refStore.projectRef.ref.current.offsetTop,
                behavior:'smooth',
              })
        }
    }

    const processClick = ()=>{
        if(props.refStore.workProcessRef.ref.current){
            window.scrollTo({
                top:props.refStore.workProcessRef.ref.current.offsetTop,
                behavior:'smooth',
              })
        }
    }

    const navLinks = [
        {
            id:0,
            name:'Home',
            button:contactClick
        },
        {
            id:1,
            name:'Work process',
            button:processClick
        },
        {
            id:2,
            name:'Contact',
            button:contactClick
        }
    ]

    const textAnime = {
        initial:{
            opacity:0,
         
        },
        animate:{
            opacity:1,
            scale:[.85, 1],
            rotateX:[-13, 0],
            rotateY:[17, 0],
            rotate:[4,  0],
            y:[60, 0],
            x:[-80, 0],
            transition:{
                staggerChildren:.3,
                ease:[0, 0.55, 0.45, 1],
                duration:.8
            }
        }
      
    }





     
 
  
   

    
 

    return (
    <>
      
        <div className="flex w-full justify-center h-16 " ref={ref}>
            <motion.div   className="specialContainer flex justify-between w-[95%]  items-center iphone:relative z-[12] ipad-tablet:bg-transparent ipad-tablet:static  ">

                    <div className="text-[3.5em] px-5 text-slate-900 heroBox">
                        <motion.i animate={{rotateX:[-100, 0], y:[-50, 0], x:[-30, 0]}} transition={{duration: 1.3, ease: [0.76, 0, 0.24, 1], delay:.7}}><TfiInfinite  /></motion.i>
                    </div>
                
                    
                <div className='flex items-center gap-5 heroBox'>
                    <motion.a onClick={projectClick} animate={{rotateX:[-100, 0], y:[-50, 0], x:[30, 0]}} transition={{duration: 1.3, ease: [0.76, 0, 0.24, 1], delay:.7}}  className='text-slate-900 text-[1.25em] relative after:content-[""] after:w-0 after:h-[1px] cursor-pointer after:bg-slate-900 after:absolute after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:duration-300'>Projects</motion.a>
                    <motion.div  animate={{rotateX:[-100, 0], y:[-50, 0], x:[-30, 0]}} transition={{duration: 1.3, ease: [0.76, 0, 0.24, 1], delay:.7}}    className={`w-20 h-10  transition-all duration-300 rounded-full  flex justify-center items-center  ${ham?'bg-slate-900 hover:bg-gray-950':'bg-[#F0616F] hover:bg-red-500'}`} onClick={()=>{setHam(!ham)}}  >
                        {ham?
                 
                                 <p className=' font-Rubik  text-[1.2em] text-slate-200 cursor-pointer'>close</p>
                     
                            :
                               <p className='  font-Rubik  text-[1.2em]  cursor-pointer '>menu</p>
                  
                            }
                    </motion.div>

                 <AnimatePresence mode='wait'>
                 {
                    ham?
                    <motion.div initial={{scale:0}} animate={{scale:1, transformOrigin:"top right"}} exit={{scale:0, opacity:0}} transition={{type:'spring', duration:.8}}  className='absolute flex flex-col w-[500px] h-[80vh] max-h-[750px]   bg-red-500 top-[-.5em] right-[-.5em] rounded-3xl z-[-2] overflow-hidden'>
                        <motion.div variants={textAnime} initial="initial" animate="animate"  className='flex flex-col w-full justify-center overflow-hidden h-full gap-2 px-5 heroBox'>
                               {
                                navLinks.map((items)=>{
                                    return(
                                        <motion.a key={items.id} onClick={items.button} variants={textAnime} className='text-[4em] font-Satoshi font-medium relative cursor-pointer w-fit after:content-[""] after:w-0 after:h-1 after:bg-slate-900 after:absolute after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:duration-300'>{items.name}</motion.a>
                                    )
                                })
                               }
                        </motion.div>
                        <div className='flex justify-between items-center overflow-hidden p-5'>
                                    <motion.a animate={{y:[50, 0], opacity:[0, 1]}} transition={{duration:1, type:'spring', delay:.9}} className='text-[3.1em]'><GrLinkedin/></motion.a>
                                    <motion.a animate={{y:[50, 0], opacity:[0, 1]}} transition={{duration:1, type:'spring',  delay:.9}} className='text-[3.1em]'><FaGithubSquare/></motion.a>
                        </div>
                    </motion.div>:
                    null
                   }
                 </AnimatePresence>


                </div>

               

          
                        
                       



            </motion.div>
        </div>
    
    
    </>)
})

export default head