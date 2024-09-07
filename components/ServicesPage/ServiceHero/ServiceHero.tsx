import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import ServicHeroBg from "../../../assets/images/ServiceHeroImg.png";



export const ServiceHero = () => {
  return (
    <>
      <div className="h-screen hidden relative overflow-hidden md:hidden 2xl:flex xl:flex lg:flex">
        <div className="absolute w-full h-full top-0 left-0 flex  overflow-hidden flex-wrap p-0 gap-0">
          {Array(300)
            .join()
            .split(",")
            .map((_, id) => (
              <motion.div
                key={id}
                className="h-24 w-24 border-[.5px] border-[#9E9E9E]/20 serviceCustomHoverEffect"
              />
            ))}
        </div>

        <motion.h1
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          // lg:landscape:text-6xl
          className="AzonixFont font-[Azonix,Oxanium] 2xl:text-7xl  xl:text-3xl lg:text-3xl text-[#000000] absolute 2xl:left-[12%] xl:left-[7.5%] lg:left-[7.5%] top-[15%] uppercase"
        >
          OUR Services
        </motion.h1>
        <motion.div
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="absolute 2xl:left-[12%] xl:left-[7.5%] lg:left-[7.5% 2xl:top-[29%] xl:top-[29%] lg:top-[25%] w-[80%]"
        >
          <p className="font-[Oxanium] 2xl:font-[400] font-[200] 2xl:landscape:text-xl xl:landscape:text-lg  lg:landscape:text-base">
          At Kaltech Consultancy, we know that in today’s digital age, a strong online presence is crucial for any business.We are your one stop hub for all your digital needs, with our services ranging from development, marketing, and branding. We develop custom user centric applications to meet every business need. We use the latest tech stack to ensure that each individual project doesn’t only look good, function as intended but also meet modern design and coding standards
          </p>
        </motion.div>

        {/* <motion.button
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[20%] xl:w-[20%] lg:w-[80%] text-[#FFF] 2xl:py-3 xl:py-3 lg:py-5 font-[Oxanium] font-[600] my-8 absolute left-[10%] 2xl:top-[40%] xl:top-[40%] lg:top-[37%]"
        >
          Learn more{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_65_66)" />
              <defs>
                <linearGradient
                  id="paint0_linear_65_66"
                  x1="6"
                  y1="0"
                  x2="6"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BB9406" />
                  <stop offset="1" stop-color="#433500" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.button> */}

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="absolute bottom-0 left-0 w-[90%] h-[45%]"
        >
          <Image
            src={ServicHeroBg}
            fill
            className="lg:object-cover"
            alt="service-mockup"
          />
        </motion.div>
      </div>
      <ServicHeroTab />
      <ServicHeroMob />
    </>
  );
};

const ServicHeroTab = () => {
  return (
    <>
      <div className=" relative hidden md:flex overflow-hidden h-screen xl:hidden 2xl:hidden lg:hidden">
        <div className="absolute w-full h-full top-0 left-0 flex  overflow-hidden flex-wrap p-0 gap-0">
          {Array(300)
            .join()
            .split(",")
            .map((_, id) => (
              <motion.div
                key={id}
                className="h-24 w-24 border-[.5px] border-[#9E9E9E]/20 serviceCustomHoverEffect"
              />
            ))}
        </div>

        <motion.h1
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="AzonixFont font-[Azonix,Oxanium] text-6xl  text-[#000000] absolute left-[10%] top-[5%] uppercase"
        >
          OUR Services
        </motion.h1>
        <motion.div
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="absolute left-[10%] top-[15%] w-[80%]"
        >
          <p className="font-[Oxanium] font-[400] text-base">
          At Kaltech Consultancy, we know that in today’s digital age, a strong online presence is crucial for any business.We are your one stop hub for all your digital needs, with our services ranging from development, marketing, and branding. We develop custom user centric applications to meet every business need. We use the latest tech stack to ensure that each individual project doesn’t only look good, function as intended but also meet modern design and coding standards
          </p>
        </motion.div>

        {/* <motion.button
          initial={{ y: "60%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[80%] text-[#FFF] py-3 font-[Oxanium] font-[600] my-8 absolute left-[10%] top-[30%]"
        >
          Learn more{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_65_66)" />
              <defs>
                <linearGradient
                  id="paint0_linear_65_66"
                  x1="6"
                  y1="0"
                  x2="6"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BB9406" />
                  <stop offset="1" stop-color="#433500" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.button> */}

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="absolute bottom-0 left-0 w-[90%] h-[50%]"
        >
          <Image
            src={ServicHeroBg}
            className="object-cover object-center"
            fill
            alt="service-mockup"
          />
        </motion.div>
      </div>
    </>
  );
};

const ServicHeroMob = () => {
  return (
    <>
      <div className="h-screen relative md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="absolute w-full h-full top-0 left-0 flex  overflow-hidden flex-wrap p-0 gap-0">
          {Array(300)
            .join()
            .split(",")
            .map((_, id) => (
              <motion.div
                key={id}
                className="h-24 w-24 border-[1px] border-[#9E9E9E]/20 serviceCustomHoverEffect"
              />
            ))}
        </div>
        <div className="top-[7%] w-full absolute flex justify-center items-center py-3">
          <div className="w-[90%] flex flex-col justify-start items-start gap-5">
            <motion.h1
              initial={{ y: "60%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="AzonixFont font-[Azonix,Oxanium] text-4xl text-[#000000] uppercase"
            >
              OUR Services
            </motion.h1>
            <motion.p
              initial={{ y: "60%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="font-[Oxanium] font-[400] text-sm"
            >
              At Kaltech Consultancy, we know that in today’s digital age, a strong online presence is crucial for any business.We are your one stop hub for all your digital needs, with our services ranging from development, marketing, and branding. We develop custom user centric applications to meet every business need. We use the latest tech stack to ensure that each individual project doesn’t only look good, function as intended but also meet modern design and coding standards
            </motion.p>

            {/* <motion.button
              initial={{ y: "60%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: "circInOut" }}
              className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-3 font-[Oxanium] font-[600] my-2 "
            >
              Learn more{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="url(#paint0_linear_65_66)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_65_66"
                      x1="6"
                      y1="0"
                      x2="6"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BB9406" />
                      <stop offset="1" stop-color="#433500" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.button> */}
          </div>
        </div>

        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
          className="absolute bottom-0 left-0 w-[90%] h-[40%]"
        >
          <Image
            src={ServicHeroBg}
            className="object-cover object-center"
            fill
            alt="service-mockup"
          />
        </motion.div>
      </div>
    </>
  );
};
