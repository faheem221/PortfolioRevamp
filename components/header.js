"use client";

import { forwardRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { TfiInfinite } from "react-icons/tfi";
import "./styles.css";
const head = forwardRef((props, ref) => {
  const [ham, setHam] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setHam(false);
      }
    });
  }, []);

  const contactClick = () => {
    if (props.refStore.footerRef.ref.current) {
      window.scrollTo({
        top: props.refStore.footerRef.ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const projectClick = () => {
    if (props.refStore.projectRef.ref.current) {
      window.scrollTo({
        top: props.refStore.projectRef.ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const processClick = () => {
    if (props.refStore.workProcessRef.ref.current) {
      window.scrollTo({
        top: props.refStore.workProcessRef.ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const openPdfInNewTab = () => {
    const pdfUrl = "./resume.jpg";
    window.open(pdfUrl, "_blank");
  };

  const navLinks = [
    {
      id: 0,
      name: "Home",
      button: contactClick,
    },
    {
      id: 1,
      name: "Contact",
      button: contactClick,
    },
    {
      id: 2,
      name: "Work process",
      button: processClick,
    },
    {
      id: 3,
      name: "Resume",
      button: openPdfInNewTab,
    },
  ];

  const textAnime = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      scale: [0.85, 1],
      rotateX: [-20, 0],
      rotateY: [-13, 0],
      rotate: [2, 0],
      y: [120, 0],
      x: [-80, 0],
      transition: {
        staggerChildren: 0.2,
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <div className="flex w-full justify-center h-16 " ref={ref}>
        <motion.div className=" flex justify-between w-[95%]  items-center specialContainer relative z-[12]  ipad-tablet:bg-transparent ipad-tablet:static  ">
          <div className="iphone:text-[2.5em] android:text-[2.8em] ipad-tablet:text-[3.5em]   text-slate-900 heroBox ">
            <motion.i
              animate={{ rotateX: [-100, 0], y: [-50, 0], x: [-30, 0] }}
              transition={{
                duration: 1.3,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.7,
              }}
            >
              <TfiInfinite />
            </motion.i>
          </div>

          <div className="flex items-center gap-5 heroBox">
            <motion.a
              onClick={projectClick}
              className='text-slate-900 iphone:text-[1em] ipad-tablet:text-[1.25em] relative  after:content-[""] after:w-0 after:h-[1px] cursor-pointer after:bg-slate-900 after:absolute after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:duration-300'
            >
              Projects
            </motion.a>
            <motion.div
              className={`ipad-tablet:w-20 ipad-tablet:h-10 iphone:w-16 iphone:h-8 transition-all duration-300 rounded-full  flex justify-center items-center  ${
                ham
                  ? "bg-slate-950 hover:bg-gray-950"
                  : "bg-slate-800 hover:bg-yellow-300"
              }`}
              onClick={() => {
                setHam(!ham);
              }}
            >
              {ham ? (
                <p className=" font-Rubik  iphone:text-[1em] ipad-tablet:text-[1.2em] text-slate-200 cursor-pointer">
                  close
                </p>
              ) : (
                <p className="  font-Rubik  text-slate-100 hover:text-slate-900 cursor-pointer iphone:text-[1em] ipad-tablet:text-[1.2em]">
                  menu
                </p>
              )}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {ham ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, transformOrigin: "top right" }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="absolute flex flex-col iphone:w-[104.5%] android:w-[103.5%] iphone:h-[97vh] ipad-tablet:w-[450px] ipad-tablet:h-[80vh]  max-h-[750px]   bg-yellow-300 top-[.5em] iphone:right-[-.5em] ipad-tablet:right-[-.55%] desktop:right-[-.4%] rounded-3xl z-[-2] overflow-hidden"
              >
                <motion.div
                  variants={textAnime}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col w-full justify-center  iphone:items-center ipad-tablet:items-end overflow-hidden h-full gap-2 px-5 heroBox"
                >
                  {navLinks.map((items) => {
                    return (
                      <motion.a
                        key={items.id}
                        onClick={items.button}
                        variants={textAnime}
                        className='text-[2.5em] font-Satoshi font-medium relative  cursor-pointer w-fit after:content-[""] after:w-0 after:h-1 after:bg-slate-900 after:absolute after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:duration-300'
                      >
                        {items.name}
                      </motion.a>
                    );
                  })}
                </motion.div>
                <div className="flex justify-end gap-3 items-center overflow-hidden p-5">
                  <motion.a
                    href="https://github.com/faheem221"
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, type: "spring", delay: 0.9 }}
                    className="text-[2em]"
                  >
                    <GrLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/md-faheem-ahmad-webdev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, type: "spring", delay: 0.9 }}
                    className="text-[2.2em]"
                  >
                    <FaGithubSquare />
                  </motion.a>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
});

export default head;
