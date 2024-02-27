'use client'
import React,{forwardRef, useEffect, useRef, useLayoutEffect} from "react";
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

    useEffect(()=>{
        if(props.refStore.desRef.ref.current){
       
            let mm = gsap.matchMedia();

            mm.add("(min-width:350px)", ()=>{
                gsap.to(stripOneRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "center",
                    end: "bottom",
                    scrub:1
                    
                  },
                  x: "60vw",
                  y: "8em",
         
                  
                });

                gsap.to(stripTwoRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "center",
                    end: "+=450px",
                    scrub: 1,
                  },
                  x: "-100%",
                  y: "4em",
               
                });

                 gsap.to(stripThreeRef.current, {
                   scrollTrigger: {
                     trigger: props.refStore.desRef.ref.current,
                     start: "center",
                     end: "+=300px",
                
                     scrub: 1,
                   },
                   x: "60%",
                   y: "-5em",
             
                 });

                 gsap.to(stripFourRef.current, {
                   scrollTrigger: {
                     trigger: props.refStore.desRef.ref.current,
                     start: "end",
                     end: "+=350px",
                     scrub: 1,
                   },
                   x: "-70vw",
                   y: "-4em",
            
                  
                 });

                 gsap.to(stripFiveRef.current, {
                   scrollTrigger: {
                     trigger: props.refStore.desRef.ref.current,
                     start: "end",
                     end: "+=400px",
                     scrub: 1,
                   },
                   x: "100%",
                   y: "-5em",
     
     
                 });
                 gsap.to(stripSixRef.current, {
                   scrollTrigger: {
                     trigger: props.refStore.desRef.ref.current,
                     start: "end",
                     end: "+=670px",
                     scrub: 1,
                   },
                   x: "-100%",
                   y: "-5em",
                 });

            })




            let ipad = gsap.matchMedia()

            ipad.add("(min-width:750px)", ()=>{
                gsap.to(stripOneRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "top",
                    end: "bottom",
                    scrub: 2,
                   
              
                  },
                  x: "60vw",
                  y: "8em",
                });

                gsap.to(stripTwoRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "top",
                    end: "+=450px",
                    scrub: 3,
                  },
                  x: "-100%",
                  y: "10rem",
                });

                gsap.to(stripThreeRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "+=150px",
                    end: "+=450px",
                    scrub: 2,
                    
                  },
                  x: "55vw",
                  y: "-7rem",
                });

                gsap.to(stripFourRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "+=150px",
                    end: "+=450px",
                    scrub: 2,
                    
                  },
                  x: "-70vw",
                  y: "-40%",
                });
                gsap.to(stripFiveRef.current, {
                  scrollTrigger: {
                    trigger: props.refStore.desRef.ref.current,
                    start: "end",
                    end: "+=650px",
                    scrub: 2,
                    
                     
                  },
                  x: "60vw",
                  y: -150,
                });

                 gsap.to(stripSixRef.current, {
                   scrollTrigger: {
                     trigger: props.refStore.desRef.ref.current,
                     start: "end",
                     end: "+=670px",
                     scrub: 2,

                   },
                   x: "-65vw",
                   y: -150,
                 });
            })

        }



    }, [])


    return (
      <React.Fragment>
        <div
          className="w-full   iphone:h-[55vh] ipad-tablet:h-[75vh] desktop:h-[1000px] overflow-hidden relative flex justify-center items-center iphone:mt-16"
          ref={ref}
        >
          <img
            src="./strip_1.png"
            className="absolute  iphone:top-[-10%] iphone:left-[-55%] ipad-tablet:top-[10%] rotate-[15deg]"
            ref={stripOneRef}
          />

          <img
            src="./strip_4.png"
            className="absolute top-[0%] right-[-60%] rotate-[-12deg]"
            ref={stripTwoRef}
          />

          <img
            src="./strip_2.png"
            className="strip_two iphone:w-[70%] ipad-tablet:w-auto absolute iphone:top-[55%] iphone:left-[-40%] ipad-tablet:top-[60%]  rotate-[-10deg]"
            ref={stripThreeRef}
          />

          <img
            src="./strip_3.png"
            className="strip_three iphone:w-[65%] ipad-tablet:w-auto absolute iphone:top-[45%] iphone:left-[100%] ipad-tablet:top-[55%]  ipad-tablet:left-[100%]  rotate-[5deg] "
            ref={stripFourRef}
          />

          <img
            src="./strip_5.png"
            className="strip_five absolute bottom-[0%] iphone:top-[75%] iphone:left-[-100%] ipad-tablet:top-[85%] ipad-tablet:left-[-60%] rotate-[-10deg]"
            ref={stripFiveRef}
          />
          <img
            src="./strip_6.png"
            className="strip_six iphone:w-[75%] ipad-tablet:w-auto absolute iphone:top-[70%] iphone:left-[100%] ipad-tablet:top-[90%] ipad-tablet:left-[100%] rotate-[10deg]"
            ref={stripSixRef}
          />
        </div>
      </React.Fragment>
    );
})

export default strip