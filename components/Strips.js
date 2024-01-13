'use client'
import React,{forwardRef, useEffect, useRef, useState, useLayoutEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import DE from '@/components/DE.js';
const strip = forwardRef(( props, ref)=>{
    const stripOneRef = useRef(null)
    const stripTwoRef = useRef(null)
    const stripThreeRef = useRef(null)
    const stripFourRef = useRef(null)
    const stripFiveRef = useRef(null)
    const stripSixRef = useRef(null)

    useLayoutEffect(()=>{
        console.log(props.refStore.desRef.ref.current)

        if(props.refStore.desRef.ref.current){
            gsap.to(stripOneRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'top',
                    end:'bottom',
                    scrub:2,
                    
                },
                x:'55%',
                y:150
            })

            gsap.to(stripTwoRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'top',
                    end:'+=450px',
                    scrub:3,
                    
                },
                x:'-100%',
                y:300,

            })

            gsap.to(stripThreeRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'+=150px',
                    end:'+=450px',
                    scrub:2,
                    
                    
                },
                x:'10%',
                y:-30
            })

            gsap.to(stripFourRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'+=150px',
                    end:'+=450px',
                    scrub:2,
                    
                },
                x:'-20%',
                y:-50
            })


            gsap.to(stripFiveRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'+=250px',
                    end:'+=600px',
                    scrub:2,
                    
                },
                x:'55%',
                y:-150
            })
            gsap.to(stripSixRef.current, {
                scrollTrigger:{
                    trigger:props.refStore.desRef.ref.current,
                    start:'+=250px',
                    end:'+=600px',
                    scrub:2,
                    
                },
                x:'-55%',
                y:-150
            })

        }



    }, [])


    return(
        <React.Fragment>
            <div className="w-full iphone:h-[70vh] ipad-tablet:h-[75vh] desktop:h-[1000px] overflow-hidden relative flex justify-center items-center iphone:mt-16" ref={ref}>

                <img src="./strip_1.png" className="absolute top-[50px] left-[-700px] rotate-[15deg]"  ref={stripOneRef}/>

                <img src="./strip_4.png" className="absolute top-[20px] right-[-800px] rotate-[-12deg]" ref={stripTwoRef}/>
                

                <img src="./strip_2.png" className="strip_two absolute top-[560px] right-[45%] rotate-[-10deg]" ref={stripThreeRef}/>
 
                <img src="./strip_3.png" className="strip_three absolute top-[580px] left-[50%] rotate-[5deg] " ref={stripFourRef}/>

                <img src="./strip_5.png" className="strip_five absolute top-[900px] left-[-600px] rotate-[-10deg]" ref={stripFiveRef}/>
                
                <img src="./strip_6.png" className="strip_six absolute top-[900px] left-[70%] rotate-[10deg]" ref={stripSixRef}/>

               </div>
 

        </React.Fragment>
    )
})

export default strip