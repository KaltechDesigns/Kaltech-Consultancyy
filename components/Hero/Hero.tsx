import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroBg from "../../assets/images/HeroBg3.png";
import HeroImage from "../../assets/images/HeroImage.png";
import SplitType from "split-type";
import { gsap } from "gsap/dist/gsap";
import { motion, useScroll, useTransform } from "framer-motion";

// import KaltechVideo from '../../assets/images/kaltechVedio.mp4'

export const Hero = () => {
  const consulRef = useRef<HTMLHeadingElement | null>(null);
  const tancyRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const kalTechRef = useRef<HTMLHeadingElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* This `useEffect` hook is responsible for creating a GSAP timeline animation that involves various
  elements on the Hero section of your React component. Here's a breakdown of what it does: */
  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    const sliptConsul =
      consulRef.current &&
      new SplitType(consulRef.current, {
        types: "chars",
      });
    const sliptTancy =
      tancyRef.current && new SplitType(tancyRef.current, { types: "chars" });

    if (sliptConsul?.chars || sliptTancy?.chars) {
      gsapTimeLine
        .fromTo(
          kalTechRef.current,
          {
            opacity: 0,
            y: "-100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            y: "0%",
            ease: "power2.out",
            duration: 0.45,
            delay: 0.3,
            scrub: 2,
          }
        )
        // @ts-ignore
        .from(sliptConsul?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        // @ts-ignore
        .from(sliptTancy?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        .fromTo(
          videoWrapperRef.current,
          {
            opacity: 0,
            x: "100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            x: "0%",
            ease: "power2.out",
            duration: 0.8,
            scrub: 2,
          }
        )
        .fromTo(
          paraRef.current,
          {
            opacity: 0,
            y: "50%",
            ease: "power2.out",
          },
          {
            duration: 0.8,
            opacity: 1,
            y: "0%",
            ease: "power2.out",
          }
        );
    }

    return () => {
      gsapTimeLine?.reverse();
    };
  }, []);

  /* The code snippet you provided is using the `useScroll` and `useTransform` hooks from Framer Motion
library to create a scroll-based animation effect on the Hero component in your React application. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    smooth: 5,
  });

  let scaleUpHeight = useTransform(scrollYProgress, [0, 1], ["35%", "103%"]);
  let scaleUpWidth = useTransform(scrollYProgress, [0, 1], ["56%", "103%"]);

  return (
    <>
      <div
        ref={sectionRef}
        className="h-[300vh] relative md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden hidden"
      >
        <div
          ref={heroSectionRef}
          className="h-screen w-full  sticky top-0 overflow-hidden"
        >
          <Image
            src={HeroBg}
            fill
            className=" w-full h-full object-left -z-10"
            alt="hero-section-bg"
          />
          <div className="h-[65%] z-10 flex justify-end items-center">
            <div className=" w-[80%] ml-auto">
              <div
                ref={kalTechRef}
                className="flex justify-evenly items-center w-[20%] my-0"
              >
                <h2 className="AzonixFont font-[Azonix,Oxanium] text-[#121212] text-2xl">
                  Kaltech{" "}
                </h2>{" "}
                <div className="bg-[#121212] h-1 w-[50px]" />
              </div>

              <div>
                <h1
                  ref={consulRef}
                  className="font-[Oxanium] -mt-12 2xl:text-[220px] text-[180px] uppercase font-[700] text-[#121212] p-0 m-0"
                >
                  Consul
                </h1>
              </div>

              <div className="flex justify-start gap-24 items-center -my-32">
                <div className="w-[20%]">
                  <p
                    ref={paraRef}
                    className="font-[Oxanium] 2xl:text-lg text-base font-[400] text-[#666]"
                  >
                    We are your one stop hub for all your digital needs. Find
                    out how we can bring all your digital designs to life .
                  </p>
                </div>
                <h2
                  ref={tancyRef}
                  className="font-[Oxanium] 2xl:text-[220px] text-[180px] uppercase font-[700] text-[#121212] p-0 m-0"
                >
                  Tancy
                </h2>
              </div>
            </div>
          </div>
          <motion.div
            ref={videoWrapperRef}
            style={{ height: scaleUpHeight, width: scaleUpWidth }}
            className="absolute w-[70%] h-[30%] right-0 bottom-0 rounded-tl-[100px] overflow-hidden"
          >
            <video
              className="object-cover w-full h-full "
              muted
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src="/kaltechVedio.mp4"></source>
            </video>
          </motion.div>
        </div>
      </div>
      <HeroTab />
      <HeroMob />
    </>
  );
};

const HeroTab = () => {
  const consulRef = useRef<HTMLHeadingElement | null>(null);
  const tancyRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const kalTechRef = useRef<HTMLHeadingElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  /* This `useEffect` hook is responsible for creating a GSAP timeline animation that involves various
  elements on the Hero section of your React component. Here's a breakdown of what it does: */
  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    const sliptConsul =
      consulRef.current &&
      new SplitType(consulRef.current, {
        types: "chars",
      });
    const sliptTancy =
      tancyRef.current && new SplitType(tancyRef.current, { types: "chars" });

    if (sliptConsul?.chars || sliptTancy?.chars) {
      gsapTimeLine
        .fromTo(
          kalTechRef.current,
          {
            opacity: 0,
            y: "-100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            y: "0%",
            ease: "power2.out",
            duration: 0.45,
            delay: 0.3,
            scrub: 2,
          }
        )
        // @ts-ignore
        .from(sliptConsul?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        // @ts-ignore
        .from(sliptTancy?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        .fromTo(
          videoWrapperRef.current,
          {
            opacity: 0,
            x: "100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            x: "0%",
            ease: "power2.out",
            duration: 0.8,
            scrub: 2,
          }
        )
        .fromTo(
          paraRef.current,
          {
            opacity: 0,
            y: "50%",
            ease: "power2.out",
          },
          {
            duration: 0.8,
            opacity: 1,
            y: "0%",
            ease: "power2.out",
          }
        );
    }

    return () => {
      gsapTimeLine?.reverse();
    };
  }, []);


    /* The code snippet you provided is using the `useScroll` and `useTransform` hooks from Framer Motion
library to create a scroll-based animation effect on the Hero component in your React application. */
const { scrollYProgress } = useScroll({
  target: sectionRef,
  smooth: 5,
});

let scaleUpHeight = useTransform(scrollYProgress, [0, 1], ["50%", "103%"]);
let scaleUpWidth = useTransform(scrollYProgress, [0, 1], ["85%", "103%"]);

  return (
    <>
      <div ref={sectionRef} className=" h-[300vh] hidden md:flex lg:landscape:hidden lg:portrait:flex">
        <div className="h-screen w-full  sticky top-0 overflow-hidden">
          <Image
            src={HeroBg}
            fill
            className="object-cover w-full h-full object-right -z-10"
            alt="hero-section-bg"
          />

          <div className="h-[45%] z-10 flex justify-center items-center">
            <div className=" w-[90%]">
              <div
                ref={kalTechRef}
                className="flex justify-evenly items-center w-[20%] my-5"
              >
                <h2 className="AzonixFont font-[Azonix,Oxanium] text-[#121212] text-2xl">
                  Kaltech{" "}
                </h2>{" "}
                <div className="bg-[#121212] h-1 w-[50px]" />
              </div>

              <div>
                <h1
                  ref={consulRef}
                  className="font-[Oxanium] -mt-10  text-[140px] uppercase font-[700] text-[#121212] p-0 m-0"
                >
                  Consul
                </h1>
              </div>

              <div className="flex justify-start gap-10 items-center -my-20">
                <div className="w-[30%]">
                  <p
                    ref={paraRef}
                    className="font-[Oxanium] text-md font-[400] text-[#666]"
                  >
                    We are your one stop hub for all your digital needs. Find
                    out how we can bring all your digital designs to life .
                  </p>
                </div>
                <h2
                  ref={tancyRef}
                  className="font-[Oxanium] text-[140px] uppercase font-[700] text-[#121212] p-0 m-0"
                >
                  Tancy
                </h2>
              </div>
            </div>
          </div>

          <motion.div
            ref={videoWrapperRef}
            style={{ height: scaleUpHeight, width: scaleUpWidth }}
            className="absolute w-[85%] h-[50%] right-0 bottom-0 rounded-tl-[100px] overflow-hidden"
          >         
            <video
              className="object-cover w-full h-full "
              muted
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src="/kaltechVedio.mp4"></source>
            </video>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const HeroMob = () => {
  const consulRef = useRef<HTMLHeadingElement | null>(null);
  const tancyRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const kalTechRef = useRef<HTMLHeadingElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  /* This `useEffect` hook is responsible for creating a GSAP timeline animation that involves various
  elements on the Hero section of your React component. Here's a breakdown of what it does: */
  useEffect(() => {
    const gsapTimeLine = gsap.timeline();
    const sliptConsul =
      consulRef.current &&
      new SplitType(consulRef.current, {
        types: "chars",
      });
    const sliptTancy =
      tancyRef.current && new SplitType(tancyRef.current, { types: "chars" });

    if (sliptConsul?.chars || sliptTancy?.chars) {
      gsapTimeLine
        .fromTo(
          kalTechRef.current,
          {
            opacity: 0,
            y: "-100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            y: "0%",
            ease: "power2.out",
            duration: 0.45,
            delay: 0.3,
            scrub: 2,
          }
        )
        // @ts-ignore
        .from(sliptConsul?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        // @ts-ignore
        .from(sliptTancy?.chars, {
          duration: 0.8,
          opacity: 0,
          scale: 3.5,
          stagger: 0.45,
          ease: "power2.out",
          scrub: 2,
        })
        .fromTo(
          videoWrapperRef.current,
          {
            opacity: 0,
            x: "100%",
            ease: "power2.out",
          },
          {
            opacity: 1,
            x: "0%",
            ease: "power2.out",
            duration: 0.8,
            scrub: 2,
          }
        )
        .fromTo(
          paraRef.current,
          {
            opacity: 0,
            y: "50%",
            ease: "power2.out",
          },
          {
            duration: 0.8,
            opacity: 1,
            y: "0%",
            ease: "power2.out",
          }
        );
    }

    return () => {
      gsapTimeLine?.reverse();
    };
  }, []);


      /* The code snippet you provided is using the `useScroll` and `useTransform` hooks from Framer Motion
library to create a scroll-based animation effect on the Hero component in your React application. */
const { scrollYProgress } = useScroll({
  target: sectionRef,
  smooth: 5,
});

let scaleUpHeight = useTransform(scrollYProgress, [0, 1], ["50%", "103%"]);
let scaleUpWidth = useTransform(scrollYProgress, [0, 1], ["90%", "103%"]);

  return (
    <>
      <div ref={sectionRef} className="flex h-[100vh]   lg:hidden xl:hidden 2xl:hidden md:hidden overflow-hidden">
        <div className="w-full relative">
          <div className="w-[90%] mx-auto ">
            <div className="mt-[15%]">
              <div
                ref={kalTechRef}
                className="flex justify-between items-center w-[50%] my-2"
              >
                <h2 className="AzonixFont font-[Azonix,Oxanium] text-[#121212] text-xl ">
                  Kaltech{" "}
                </h2>{" "}
                <div className="bg-[#121212] h-1 w-[40px]" />
              </div>

              <div>
                <h1
                  ref={consulRef}
                  className="font-[Oxanium]  text-6xl uppercase font-[700] text-[#121212] p-0 m-0"
                >
                  Consul
                </h1>
              </div>

              <div className="flex justify-start gap-5 items-start ">
                <div className="w-[30%]">
                  <p
                    ref={paraRef}
                    className="font-[Oxanium] text-sm font-[400] text-[#666]"
                  >
                    We are your one stop hub for all your digital needs. Find
                    out how we can bring all your digital designs to life .
                  </p>
                </div>
                <div>
                  <h2
                    ref={tancyRef}
                    className="font-[Oxanium] text-6xl uppercase font-[700] text-[#121212] p-0 m-0"
                  >
                    Tancy
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            ref={videoWrapperRef}
            style={{ height: scaleUpHeight, width: scaleUpWidth }}
            className="absolute w-[95%] h-[50%] right-0 bottom-0 rounded-tl-[100px] overflow-hidden"
          >
            <video
              className="object-cover w-full h-full "
              muted
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src="/kaltechVedio.mp4"></source>
            </video>
          </motion.div>
        </div>
      </div>
    </>
  );
};
