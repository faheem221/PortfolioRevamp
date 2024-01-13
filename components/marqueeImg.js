'use client'
import styles from './InfiniteMarquee.css'
import { useRef, useEffect, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const marqueeImg =forwardRef((props, ref) => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    // Check if the code is running in the browser environment
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            // Assuming you have a 'direction' variable defined outside this scope
            direction = e.direction * -1;
          },
        },
        x: "-000px", // Check this value, looks like there might be a typo
      });

      // Assuming you have a 'direction' variable defined outside this scope
      requestAnimationFrame(animate);
    }
  }, [slider]);

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.sliderContainer}>
          <div className='px-10 mb-10'>
              <svg width="601" height="111" viewBox="0 0 601 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.9001 108V22.65H0.0500488V6H86.0001V22.65H53.1501V108H32.9001Z" fill="black"/>
                <path d="M89.893 108V0H109.093V38.4C114.343 29.7 122.743 25.35 132.943 25.35C148.993 25.35 159.943 34.95 159.943 54.45V108H140.743V58.35C140.743 47.4 136.093 41.25 126.343 41.25C115.693 41.25 109.093 50.55 109.093 61.35V108H89.893Z" fill="black"/>
                <path d="M187.237 54H167.887C170.437 36.15 183.487 25.35 203.737 25.35C226.087 25.35 237.487 38.55 237.487 57.15V88.35C237.487 98.25 238.387 103.8 239.887 108H219.937C218.887 105.3 218.437 101.4 218.287 97.05C211.687 106.35 201.787 110.25 192.187 110.25C176.437 110.25 165.187 102.45 165.187 87C165.187 76.05 171.337 67.8 183.637 63.75C194.287 60.15 204.637 59.25 218.137 59.1V57.15C218.137 46.8 213.187 41.25 202.537 41.25C193.387 41.25 188.437 46.35 187.237 54ZM184.537 85.95C184.537 92.1 189.337 96 197.137 96C208.987 96 218.137 86.4 218.137 74.4V70.95C190.837 71.4 184.537 77.85 184.537 85.95Z" fill="black"/>
                <path d="M246.795 108V27.6H265.995V38.4C271.245 29.7 279.645 25.35 289.845 25.35C305.895 25.35 316.845 34.95 316.845 54.45V108H297.645V58.35C297.645 47.4 292.995 41.25 283.245 41.25C272.595 41.25 265.995 50.55 265.995 61.35V108H246.795Z" fill="black"/>
                <path d="M325.539 108V0H344.74V61.2L373.84 27.6H396.34L363.94 63.3L398.59 108H375.04L344.74 69.15V108H325.539Z" fill="black"/>
                <path d="M411.252 49.2C411.252 67.65 461.952 52.05 461.952 84.3C461.952 99.75 447.702 110.25 427.602 110.25C407.802 110.25 393.552 101.1 390.702 81.75H409.902C411.252 90.45 418.152 95.4 428.202 95.4C437.652 95.4 442.602 91.35 442.602 85.5C442.602 67.5 392.952 82.95 392.952 50.4C392.952 37.35 403.152 25.35 424.152 25.35C442.602 25.35 456.552 34.05 458.952 54H439.752C438.252 44.25 432.552 40.35 423.402 40.35C415.752 40.35 411.252 44.1 411.252 49.2Z" fill="black"/>
                <path d="M488.443 82.95V42.45H478.093V27.6H488.443V9.15H507.643V27.6H524.593V42.45H507.643V81.3C507.643 89.7 510.043 94.2 520.693 94.2H524.293V108.3C522.193 109.35 517.843 110.25 512.593 110.25C496.243 110.25 488.443 100.95 488.443 82.95Z" fill="black"/>
                <path d="M561.644 110.25C537.794 110.25 523.094 94.2 523.094 67.95C523.094 40.65 538.244 25.35 561.644 25.35C585.344 25.35 600.044 41.55 600.044 67.95C600.044 94.95 584.894 110.25 561.644 110.25ZM561.644 94.35C573.794 94.35 580.244 85.05 580.244 67.95C580.244 50.85 573.644 41.25 561.644 41.25C549.344 41.25 542.894 50.7 542.894 67.95C542.894 84.9 549.494 94.35 561.644 94.35Z" fill="black"/>
              </svg>
          </div>

        <div ref={slider} className={styles.slider}>
         <img ref={firstText} src='./marq.png' alt="image"/>
         <img ref={secondText} src='./marq.png' alt="image"/>
        </div>
      </div>
    </main>
  )
})

export default  marqueeImg