'use client'
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './styles.css'
const workProcess = forwardRef((props, ref) =>{

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
  
    useLayoutEffect(() => {
      
      
     
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: "100vw",
        },
        {
          translateX: '0vw',
          ease: [.07,.58,.47,.99],
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2500 top",
            scrub: true,
            pin: true,
            
            
          },
        }
      );
      return () => {
    
        pin.kill();
      };
    }, []);
    return (
      <React.Fragment>
        <div
          className="ipad-tablet:mt-[100px]  w-full flex justify-center items-center "
          ref={ref}
        >
          <div className="w-full relative z-[9]  flex items-end flex-col  ">

            <div className="texts max-w-[95%]  w-full  heroBox ">
                
                  <svg
                    width="560"
                    height="115"
                    viewBox="0 0 560 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="iphone:w-[70vw] iphone:h-full ipad-tablet:h-auto ipad-tablet:w-auto "
                  >
                    <path
                      d="M0.38501 112V6.60003H41.615C65.33 6.60003 80.055 18.535 80.055 37.755C80.055 49.535 74.94 57.75 65.95 62.555C71.375 65.965 74.63 71.545 76.8 80.225L84.705 112H63.005L56.805 84.1C54.325 73.25 50.295 71.08 39.91 71.08H21.31V112H0.38501ZM41.15 23.185H21.31V54.65H40.685C52.465 54.65 58.665 48.45 58.665 38.84C58.665 29.385 52.31 23.185 41.15 23.185Z"
                      fill="black"
                    />
                    <path
                      d="M106.358 56.2H86.3628C88.9978 37.755 102.483 26.595 123.408 26.595C146.503 26.595 158.283 40.235 158.283 59.455V91.695C158.283 101.925 159.213 107.66 160.763 112H140.148C139.063 109.21 138.598 105.18 138.443 100.685C131.623 110.295 121.393 114.325 111.473 114.325C95.1978 114.325 83.5728 106.265 83.5728 90.3C83.5728 78.985 89.9278 70.46 102.638 66.275C113.643 62.555 124.338 61.625 138.288 61.47V59.455C138.288 48.76 133.173 43.025 122.168 43.025C112.713 43.025 107.598 48.295 106.358 56.2ZM103.568 89.215C103.568 95.57 108.528 99.6 116.588 99.6C128.833 99.6 138.288 89.68 138.288 77.28V73.715C110.078 74.18 103.568 80.845 103.568 89.215Z"
                      fill="black"
                    />
                    <path
                      d="M166.351 19.62V0.400024H186.191V19.62H166.351ZM166.351 112V28.92H186.191V112H166.351Z"
                      fill="black"
                    />
                    <path
                      d="M210.079 51.24C210.079 70.305 262.469 54.185 262.469 87.51C262.469 103.475 247.744 114.325 226.974 114.325C206.514 114.325 191.789 104.87 188.844 84.875H208.684C210.079 93.865 217.209 98.98 227.594 98.98C237.359 98.98 242.474 94.795 242.474 88.75C242.474 70.15 191.169 86.115 191.169 52.48C191.169 38.995 201.709 26.595 223.409 26.595C242.474 26.595 256.889 35.585 259.369 56.2H239.529C237.979 46.125 232.089 42.095 222.634 42.095C214.729 42.095 210.079 45.97 210.079 51.24Z"
                      fill="black"
                    />
                    <path
                      d="M340.935 84.875C336.44 104.095 321.56 114.325 301.72 114.325C276.61 114.325 261.265 97.74 261.265 70.615C261.265 42.405 276.765 26.595 300.945 26.595C325.28 26.595 340.315 43.025 340.315 69.84V74.49H281.725C282.655 89.68 289.63 98.05 301.72 98.05C311.02 98.05 317.375 93.71 320.01 84.875H340.935ZM300.945 42.87C290.405 42.87 284.05 49.535 282.19 62.09H319.545C317.685 49.69 311.33 42.87 300.945 42.87Z"
                      fill="black"
                    />
                    <path
                      d="M365.957 86.115V44.265H355.262V28.92H365.957V9.85502H385.797V28.92H403.312V44.265H385.797V84.41C385.797 93.09 388.277 97.74 399.282 97.74H403.002V112.31C400.832 113.395 396.337 114.325 390.912 114.325C374.017 114.325 365.957 104.715 365.957 86.115Z"
                      fill="black"
                    />
                    <path
                      d="M404.089 112V0.400024H423.929V40.08C429.354 31.09 438.034 26.595 448.574 26.595C465.159 26.595 476.474 36.515 476.474 56.665V112H456.634V60.695C456.634 49.38 451.829 43.025 441.754 43.025C430.749 43.025 423.929 52.635 423.929 63.795V112H404.089Z"
                      fill="black"
                    />
                    <path
                      d="M559.703 84.875C555.208 104.095 540.328 114.325 520.488 114.325C495.378 114.325 480.033 97.74 480.033 70.615C480.033 42.405 495.533 26.595 519.713 26.595C544.048 26.595 559.083 43.025 559.083 69.84V74.49H500.493C501.423 89.68 508.398 98.05 520.488 98.05C529.788 98.05 536.143 93.71 538.778 84.875H559.703ZM519.713 42.87C509.173 42.87 502.818 49.535 500.958 62.09H538.312C536.453 49.69 530.098 42.87 519.713 42.87Z"
                      fill="black"
                    />
                  </svg>

                  <svg
                    width="491"
                    height="115"
                    viewBox="0 0 491 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="iphone:w-[70vw] iphone:h-full ipad-tablet:h-auto ipad-tablet:w-auto  "
                  >
                    <path
                      d="M19.985 112H0.14502V0.400024H19.985V38.22C25.255 30.78 32.695 26.595 41.84 26.595C63.385 26.595 76.715 43.18 76.715 70.305C76.715 98.515 63.075 114.325 41.84 114.325C32.695 114.325 25.1 110.45 19.985 103.165V112ZM38.275 43.025C26.34 43.025 19.985 52.635 19.985 70.305C19.985 87.975 26.495 97.895 38.275 97.895C50.055 97.895 56.41 88.13 56.41 70.305C56.41 52.79 49.9 43.025 38.275 43.025Z"
                      fill="black"
                    />
                    <path
                      d="M99.4867 56.2H79.4917C82.1267 37.755 95.6117 26.595 116.537 26.595C139.632 26.595 151.412 40.235 151.412 59.455V91.695C151.412 101.925 152.342 107.66 153.892 112H133.277C132.192 109.21 131.727 105.18 131.572 100.685C124.752 110.295 114.522 114.325 104.602 114.325C88.3267 114.325 76.7017 106.265 76.7017 90.3C76.7017 78.985 83.0567 70.46 95.7667 66.275C106.772 62.555 117.467 61.625 131.417 61.47V59.455C131.417 48.76 126.302 43.025 115.297 43.025C105.842 43.025 100.727 48.295 99.4867 56.2ZM96.6967 89.215C96.6967 95.57 101.657 99.6 109.717 99.6C121.962 99.6 131.417 89.68 131.417 77.28V73.715C103.207 74.18 96.6967 80.845 96.6967 89.215Z"
                      fill="black"
                    />
                    <path
                      d="M159.48 112V28.92H179.32V41.01C184.745 31.09 193.115 26.595 202.105 26.595C205.515 26.595 208.615 27.525 210.165 28.92V46.125C207.53 45.35 204.585 45.04 201.02 45.04C185.985 45.04 179.32 54.03 179.32 67.825V112H159.48Z"
                      fill="black"
                    />
                    <path
                      d="M302.222 112L287.187 56.355L285.637 46.59L283.777 56.355L268.897 112H244.252L221.157 28.92H242.392L255.722 87.51L257.737 97.585L260.062 87.51L276.027 28.92H296.642L312.607 87.51L314.622 97.275L316.482 87.51L329.967 28.92H350.272L327.022 112H302.222Z"
                      fill="black"
                    />
                    <path
                      d="M350.045 19.62V0.400024H369.885V19.62H350.045ZM350.045 112V28.92H369.885V112H350.045Z"
                      fill="black"
                    />
                    <path
                      d="M379.824 86.115V44.265H369.129V28.92H379.824V9.85502H399.664V28.92H417.179V44.265H399.664V84.41C399.664 93.09 402.144 97.74 413.149 97.74H416.869V112.31C414.699 113.395 410.204 114.325 404.779 114.325C387.884 114.325 379.824 104.715 379.824 86.115Z"
                      fill="black"
                    />
                    <path
                      d="M417.955 112V0.400024H437.795V40.08C443.22 31.09 451.9 26.595 462.44 26.595C479.025 26.595 490.34 36.515 490.34 56.665V112H470.5V60.695C470.5 49.38 465.695 43.025 455.62 43.025C444.615 43.025 437.795 52.635 437.795 63.795V112H417.955Z"
                      fill="black"
                    />
                  </svg>
                
              
            </div>

            <div>
              <section className="scroll-section-outer mt-5  overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
                <div ref={triggerRef}>
                  <div
                    ref={sectionRef}
                    className="scroll-section-inner h-[100vh] w-[200vw] flex flex-row relative"
                  >
                    <div className="bg-transparent scroll-section h-[100vh]    w-[100vw] flex justify-center items-center">
                      <div className="flex iphone:flex-col ipad-tablet:flex-row  scroll-section h-[100vh] w-[100vw] justify-around items-center ">
                        <div>
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 2 }}
                            className=" font-satoshi iphone:text-[3.2em] ipad-tablet:text-[7rem] tracking-tighter font-semibold text-slate-100 "
                          >
                            Low Fidelity
                          </motion.div>

                          <p className="iphone:hidden ipad-tablet:block ipad-tablet:w-[500px] font-Outfit ipad-tablet:text-[1.4rem] text-slate-200 leading-8">
                            Low-fidelity prototyping is a rapid and
                            cost-effective approach in the early stages of
                            product design. Using simple sketches or digital
                            wireframes, designers can swiftly iterate on ideas,
                            foster effective communication among team members,
                            and gather valuable user feedback. This method
                            accelerates the design process, reduces the risk of
                            costly revisions, and facilitates collaborative
                            decision-making, ultimately laying the groundwork
                            for more polished and detailed iterations.
                          </p>
                        </div>

                        <div className="iphone:w-[85%]   ipad-tablet:w-[26vw] iphone:mt-[0px] ipad-tablet:mt-[0px] ">
                          <motion.img
                            className="w-full "
                            whileInView={{ y: [300, 0], scale: [1, 1] }}
                            transition={{
                              duration: 0.6,
                              type: "spring",
                              delay: 0.2,
                            }}
                            src="processOne.png"
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex iphone:flex-col ipad-tablet:flex-row  scroll-section h-[100vh] w-[100vw] justify-around items-center">
                      <div>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 2 }}
                          className=" font-satoshi iphone:text-[3.2em] ipad-tablet:text-[7rem] tracking-tighter font-semibold text-slate-100"
                        >
                          High Fidelity
                        </motion.div>

                        <p className="iphone:hidden ipad-tablet:block ipad-tablet:w-[500px] font-Outfit ipad-tablet:text-[1.6rem] text-slate-200 leading-8">
                          High-fidelity prototyping represents the advanced
                          stage of design, involving detailed and visually
                          polished representations of a product or interface.
                          Leveraging sophisticated graphics, realistic
                          interactions, and refined aesthetics, high-fidelity
                          prototypes offer a close approximation to the final
                          product. This level of detail enables designers to
                          showcase the user experience comprehensively, conduct
                          thorough usability testing, and align stakeholders on
                          the finer aspects of the design before moving into the
                          development phase.
                        </p>
                      </div>

                      <div className="iphone:w-[85%] ipad-tablet:w-[26vw] iphone:mt-[0px] ipad-tablet:mt-[0px] ">
                        <motion.img
                          viewport={{ once: true }}
                          className="w-full "
                          whileInView={{ y: [300, 0], scale: [1, 1] }}
                          transition={{
                            duration: 0.6,
                            type: "spring",
                            delay: 0.2,
                          }}
                          src="processTwo.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
})


export default workProcess