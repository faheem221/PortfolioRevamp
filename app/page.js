"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import Header from "@/components/header.js";
import Hero from "@/components/hero.js";
import Marquee from "@/components/marqueeImg.js";
import Responsive from "@/components/Responsive.js";
import Footer from "@/components/footer.js";
import DEs from "@/components/DE.js";
import Project from "@/components/Projects.js";
import "./locomotiveScroll.css";
import AnimatedCursor from "react-animated-cursor";
import Strip from "@/components/Strips";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import UiProject from "@/components/UiProject";
import { HiArrowUp } from "react-icons/hi";
import WorkProcess from "@/components/Work-Process";
import Preloader from "@/components/preloader";
const Myfunction = () => {
  const header = useRef(null);
  const hero = useRef(null);
  const marquee = useRef(null);
  const responsive = useRef(null);
  const footer = useRef(null);
  const des = useRef(null);
  const workProcess = useRef(null);
  const project = useRef(null);
  const strip = useRef(null);

  const refStore = {
    headerRef: {
      ref: header,
    },
    heroRef: {
      ref: hero,
    },
    marqueeRef: {
      ref: marquee,
    },
    responsiveRef: {
      ref: responsive,
    },
    footerRef: {
      ref: footer,
    },
    desRef: {
      ref: des,
    },
    workProcessRef: {
      ref: workProcess,
    },
    stripRef: {
      ref: strip,
    },
    projectRef: {
      ref: project,
    },
  };
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    const loader = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };

    loader();
  }, []);

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition > 200) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {loading ? (
        <div className="fixed top-0 left-0">
          <Preloader />
        </div>
      ) : (
        <div>
          <AnimatedCursor
            innerStyle={{ backgroundColor: "#ffc847" }}
            outerStyle={{
              backgroundColor: "#f2f2f0",
              mixBlendMode: "difference",
              colorScheme: "light",
            }}
            innerSize={0}
            outerSize={10}
            innerScale={0}
            outerScale={5}
            outerAlpha={0.5}
            trailingSpeed={8}
            showSystemCursor={true}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />

          {showTopBtn && (
            <div
              onClick={scrollTop}
              className="w-[50px] fixed bottom-10 z-[9999] right-10 cursor-pointer h-[50px] flex justify-center items-center bg-slate-900 hover:bg-black rounded-full "
            >
              <HiArrowUp className="text-slate-100 text-[1.3em]" />
            </div>
          )}

          <Header ref={refStore.headerRef.ref} refStore={refStore} />
          <Hero ref={refStore.heroRef.ref} refStore={refStore} />
          <div className="w-full overflow-hidden iphone:mt-10 ipad-tabletmt-[150px] desktop:mt-[200px]">
            <Marquee ref={refStore.marqueeRef.ref} refStore={refStore} />
          </div>

          <Responsive ref={refStore.responsiveRef.ref} refStore={refStore} />
          <DEs ref={refStore.desRef.ref} refStore={refStore} />
          <Strip ref={refStore.stripRef.ref} refStore={refStore} />
          <UiProject />
          <WorkProcess ref={refStore.workProcessRef.ref} refStore={refStore} />
          <Project ref={refStore.projectRef.ref} refStore={refStore} />
          <Footer ref={refStore.footerRef.ref} refStore={refStore} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Myfunction;
