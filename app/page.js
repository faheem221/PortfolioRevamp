'use client'
import React, {useState, useRef, useEffect, useImperativeHandle} from "react";
import Header from "@/components/header.js"
import Hero from "@/components/hero.js"
import Marquee from "@/components/marqueeImg.js"
import Responsive from "@/components/Responsive.js"
import Footer from "@/components/footer.js"
import DEs from "@/components/DE.js"
import WorkProcess from "@/components/Work-Process.js"
import Project from "@/components/Projects.js"
import "./locomotiveScroll.css"
import AnimatedCursor from "react-animated-cursor";
import Strip from "@/components/Strips";
import LocomotiveScroll from "locomotive-scroll";
const Myfunction = ()=>{
  
  uuseEffect(() => {
    if (typeof window !== 'undefined') {
      // Import and use LocomotiveScroll only on the client side
      const scroll = new LocomotiveScroll({
        el: scrollContainerRef.current, // Use a ref to specify the scroll container element
        // Other LocomotiveScroll options here
      });

      // Cleanup function to destroy LocomotiveScroll on component unmount
      return () => {
        if (scroll) {
          scroll.destroy();
        }
      };
    }
  }, []); 

  
  const header = useRef(null)
  const hero = useRef(null)
  const marquee = useRef(null)
  const responsive = useRef(null)
  const footer = useRef(null)
  const des = useRef(null)
  const workProcess = useRef(null)
  const project = useRef(null)
  const strip = useRef(null)



  const refStore = {
    headerRef:{
      ref:header
    },
    heroRef:{
      ref:hero
    },
    marqueeRef:{
      ref:marquee
    },
    responsiveRef:{
      ref:responsive
    },
    footerRef:{
      ref:footer
    },
    desRef:{
      ref:des
    },
    workProcessRef:{
      ref:workProcess
    },
    stripRef:{
      ref:strip
    },
    projectRef:{
      ref:project
    }
  }


  return(

  <React.Fragment>
                         
                  <AnimatedCursor 
                  innerStyle= {{backgroundColor:'#ffc847'}}
                  outerStyle={{backgroundColor:'#f2f2f0', mixBlendMode:"difference", colorScheme:'light'}}
                  innerSize={0}
                  outerSize={10}
                  innerScale={0}
                  outerScale={1.5}
                  outerAlpha={0.5}
                  trailingSpeed={8}
                  showSystemCursor={true}
                />
                <Header  ref={refStore.headerRef.ref} refStore ={refStore}  />
                <Hero ref={refStore.heroRef.ref} refStore ={refStore} />
                <div className="w-full overflow-hidden mt-[200px]">
                  <Marquee ref={refStore.marqueeRef.ref} refStore ={refStore} />
                </div>
                <Responsive ref={refStore.responsiveRef.ref} refStore ={refStore}/>
                <DEs     ref={refStore.desRef.ref} refStore ={refStore} />
                
                <Strip ref={refStore.stripRef.ref} refStore ={refStore} />
           
                        <Project ref={refStore.projectRef.ref} refStore ={refStore} />
                 
                          <Footer ref={refStore.footerRef.ref} refStore ={refStore} />
                      
               
 
  </React.Fragment>
  )
}

export default Myfunction

