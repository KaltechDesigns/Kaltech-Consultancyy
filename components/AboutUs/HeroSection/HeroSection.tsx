import React from "react";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <>
      <div className="h-screen relative overflow-hidden  hidden md:flex 2xl:flex lg:flex xl:flex">
        {/* The code you provided is using the `motion` component from Framer Motion library in a React
     component.For animate the semicircle svg in the background */}

        <motion.div
          initial={{ y: "130%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "backInOut", delay: 0.8 }}
          className="absolute top-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="400"
            //   width="200"
            //   height="400"
            viewBox="0 0 254 435"
            fill="none"
          >
            <path
              d="M0 0.525269C67.365 0.525269 131.971 23.4783 179.605 64.335C227.239 105.192 254 160.605 254 218.385C254 276.165 227.239 331.579 179.605 372.435C131.971 413.292 67.365 436.245 -1.52588e-05 436.245L-1.52588e-05 322.451C32.1783 322.451 63.0387 311.487 85.7922 291.971C108.546 272.454 121.328 245.985 121.328 218.385C121.328 190.785 108.546 164.316 85.7922 144.8C63.0387 125.284 32.1783 114.32 -1.52588e-05 114.32L0 0.525269Z"
              fill="#F9F9F9"
            />
          </svg>
        </motion.div>

        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          {/* hero section heading. */}
          <div className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] h-[45%] flex justify-start items-center ">
            <div className="w-[90%]">
              <motion.h1
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
                className="AzonixFont font-[Azonix,Oxanium] 2xl:landscape:text-7xl xl:text-[40px] lg:landscape:text-5xl lg:text-5xl font-[400]"
              >
                We’re a team of passionate digital creatives.
              </motion.h1>
            </div>
          </div>

          {/* hero section vedio element. */}
          <div className="w-full h-[54%] lg:landscape:h-[50%] flex justify-end items-center">
            <motion.div
              initial={{ y: "95%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.7 }}
              className="w-[85%] h-full relative"
            >
              {/* <Image fill src={AboutVideo} loading="lazy" alt="video-about" /> */}
              <video
                className="object-cover w-full h-full "
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/About.mp4"></source>
              </video>
            </motion.div>
          </div>
        </div>
      </div>

      <HeroSectionMob />
    </>
  );
};

const HeroSectionMob = () => {
  return (
    <>
      <div className=" h-screen relative  md:hidden lg:hidden xl:hidden 2xl:hidden">
        <motion.div
          initial={{ y: "130%" }}
          whileInView={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "backInOut", delay: 0.8 }}
          className="absolute top-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="250"
            viewBox="0 0 254 435"
            fill="none"
          >
            <path
              d="M0 0.525269C67.365 0.525269 131.971 23.4783 179.605 64.335C227.239 105.192 254 160.605 254 218.385C254 276.165 227.239 331.579 179.605 372.435C131.971 413.292 67.365 436.245 -1.52588e-05 436.245L-1.52588e-05 322.451C32.1783 322.451 63.0387 311.487 85.7922 291.971C108.546 272.454 121.328 245.985 121.328 218.385C121.328 190.785 108.546 164.316 85.7922 144.8C63.0387 125.284 32.1783 114.32 -1.52588e-05 114.32L0 0.525269Z"
              fill="#F9F9F9"
            />
          </svg>
        </motion.div>
        <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-evenly items-center z-10">
          <div className="w-[90%]">
            <motion.h1
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "circInOut", delay: 0.1 }}
              className="AzonixFont font-[Azonix,Oxanium] text-4xl  font-[400]"
            >
              We’re a team of passionate digital creatives.
            </motion.h1>
          </div>

          <div className="w-full h-[45%]  flex justify-end items-center">
            <motion.div
              initial={{ y: "30%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.7 }}
              className="w-[95%] h-full relative"
            >
              <video
                className="object-cover w-full h-full "
                muted
                loop
                controls={false}
                autoPlay
                playsInline
              >
                <source src="/About.mp4"></source>
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
