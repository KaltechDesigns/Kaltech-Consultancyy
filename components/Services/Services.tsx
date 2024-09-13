import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import ServiceImg1 from "../../assets/images/serviceImg1.png";
import ServiceImg2 from "../../assets/images/serviceImg2.png";
import ServiceImg3 from "../../assets/images/serviceImg3.png";

import ServiceBg from "../../assets/images/ServicesBg.png";
import CodeIcon from "../../assets/images/codeIcon.png";
import MarketingIcon from "../../assets/images/MarketingIcon.png";
import BrandingIcon from "../../assets/images/BrandingIcon.png";
import { LearnMoreBTN } from "../common/Buttons/LearnMoreBTN";

export const Services = () => {
  const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef);

  const handleMouseEnter = async (
    currentMousePosition: string,
    initialState1: string,
    initialState2: string
  ) => {
    animate(
      `.respectiveImageMainWrapper .${initialState1}`,
      { y: ["0%", "20%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut", delay: 0 }
    );

    animate(
      `.listMainWrapper .${initialState1}-icon`,
      { width: ["48px", "0px"], height: ["48px", "0px"] },
      { duration: 0.8, ease: "circInOut", delay: 0.4 }
    );
    animate(
      `.listMainWrapper .${initialState1}-lists`,
      { height: "72px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    await animate(
      `.listMainWrapper .${initialState1}-expandSubBtn`,
      { width: "0px", height: "0px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper .${initialState1}-expandPluseBtn`,
      { width: "36px", height: "37px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    await animate(
      `.listMainWrapper #${initialState1}-lists`,
      { opacity: 0 },
      { duration: 0.2, ease: "circInOut", delay: 0 }
    );

    animate(
      `.respectiveImageMainWrapper .${initialState2}`,
      { y: ["0%", "20%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut", delay: 0 }
    );

    animate(
      `.listMainWrapper .${initialState2}-icon`,
      { width: ["48px", "0px"], height: ["48px", "0px"] },
      { duration: 0.8, ease: "circInOut", delay: 0.4 }
    );
    animate(
      `.listMainWrapper .${initialState2}-lists`,
      { height: "72px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    await animate(
      `.listMainWrapper .${initialState2}-expandSubBtn`,
      { width: "0px", height: "0px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper .${initialState2}-expandPluseBtn`,
      { width: "36px", height: "37px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    await animate(
      `.listMainWrapper #${initialState2}-lists`,
      { opacity: 0 },
      { duration: 0.2, ease: "circInOut", delay: 0 }
    );

    animate(
      `.respectiveImageMainWrapper .${currentMousePosition}`,
      { y: ["20%", "0%"], opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.4 }
    );
    animate(
      `.listMainWrapper .${currentMousePosition}-icon`,
      { width: ["0px", "48px"], height: ["0px", "48px"] },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper .${currentMousePosition}-lists`,
      { height: "200px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );

    await animate(
      `.listMainWrapper .${currentMousePosition}-expandPluseBtn`,
      { width: "0px", height: "0px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper .${currentMousePosition}-expandSubBtn`,
      { width: "40px", height: "4px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper #${currentMousePosition}-lists`,
      { opacity: 1 },
      { duration: 0.2, ease: "circInOut", delay: 0 }
    );
  };

  const handleMouseLeave = async (currentMousePosition: any) => {
    animate(
      `.respectiveImageMainWrapper .${currentMousePosition}`,
      { y: ["0%", "20%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut", delay: 0 }
    );

    animate(
      `.listMainWrapper .${currentMousePosition}-icon`,
      { width: ["48px", "0px"], height: ["48px", "0px"] },
      { duration: 0.8, ease: "circInOut", delay: 0.4 }
    );
    animate(
      `.listMainWrapper .${currentMousePosition}-lists`,
      { height: "72px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    await animate(
      `.listMainWrapper .${currentMousePosition}-expandSubBtn`,
      { width: "0px", height: "0px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper .${currentMousePosition}-expandPluseBtn`,
      { width: "36px", height: "37px" },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.listMainWrapper #${currentMousePosition}-lists`,
      { opacity: 0 },
      { duration: 0.2, ease: "circInOut", delay: 0 }
    );
  };

  // useEffect(() => {
  //   handleMouseEnter("development", "marketing", "branding");
  // }, [isInView]);

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "backInOut",
          delayChildren: 0.5,
          staggerChildren: 0.8,
        }}
        className="h-screen hidden relative snap-center overflow-hidden md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden xl:flex"
      >
        <div className="absolute top-0 left-0  w-full h-full">
          <Image src={ServiceBg} fill alt="service-page-bg" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <div className="w-[85%] h-[80%]  ml-12 flex flex-col gap-3 justify-between items-start">
            <div className="flex justify-between items-start gap-3 p-2">
              <div className="2xl:w-[40%] w-[50%]">
                <motion.h2
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "circInOut" }}
                  className="AzonixFont font-[Azonix,Oxanium] font-[600] lg:text-3xl xl:text-3xl 2xl:text-4xl"
                >
                  What we offer?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "circInOut" }}
                  className="font-[Oxanium] 2xl:font-[400] xl:font-[200] lg:font-[200] text-[#666] 2xl:text-lg xl:text-base lg:text-sm my-4 2xl:my-8"
                >
                  We believe in pushing the boundaries of what is possible. We
                  are a team of experts committed in delivering outstanding
                  results by providing the following services:
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "circInOut" }}
                >
                  <LearnMoreBTN innerText="Learn More" path="/service" />
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 250, opacity: 0.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "circInOut", delay: 0.4 }}
                className="2xl:w-[60%] w-[50%] flex justify-between items-center"
              >
                <div className="h-[2px] bg-[#D9D9D9] w-[40%]" />
                <h2 className="AzonixFont font-[Azonix,Oxanium] font-[400] flex-shrink-0 lg:text-3xl xl:text-3xl 2xl:text-4xl">
                  Our Services
                </h2>
              </motion.div>
            </div>

            <div
              ref={scope}
              className="flex justify-between items-start w-full h-[70%] gap-3"
            >
              <div className="w-[40%] h-full flex justify-center items-center ">
                <motion.div className="relative w-[90%] 2xl:w-[80%] h-[90%] respectiveImageMainWrapper ">
                  <Image
                    fill
                    src={ServiceImg1}
                    alt="dropdown-image"
                    className="object-cover development opacity-0"
                  />
                  <Image
                    fill
                    src={ServiceImg2}
                    alt="dropdown-image"
                    className="object-cover marketing opacity-0"
                  />
                  <Image
                    fill
                    src={ServiceImg3}
                    alt="dropdown-image"
                    className="object-cover branding opacity-0"
                  />
                </motion.div>
              </div>
              <div className="w-[60%] flex justify-end items-center listMainWrapper">
                <motion.div
                  initial={{ x: 350, opacity: 0.2 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "circInOut", delay: 0.4 }}
                  className="w-[85%] flex flex-col justify-start items-start gap-6"
                >
                  <div
                    onMouseEnter={() =>
                      handleMouseEnter("development", "marketing", "branding")
                    }
                    onMouseLeave={() => handleMouseLeave("development")}
                    className="py-3 px-1 border-b-2 border-[#000000] w-full h-[70px] 2xl:h-[72px] overflow-hidden development-lists"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-3">
                        <span className="h-0 w-0 relative development-icon ">
                          <Image fill src={CodeIcon} alt="code-icon" />
                        </span>
                        <h3 className="font-[Oxanium] font-[800] lg:text-3xl xl:text-3xl 2xl:text-4xl">
                          Development Services
                        </h3>
                      </div>
                      <button>
                        <svg
                          width="36"
                          height="37"
                          viewBox="0 0 36 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="development-expandPluseBtn"
                        >
                          <path
                            d="M16 0.607422H20V36.6074H16V0.607422Z"
                            fill="black"
                          />
                          <path
                            d="M0 20.6074V16.6074H36V20.6074H0Z"
                            fill="black"
                          />
                        </svg>
                        <div className="bg-[#121212] development-expandSubBtn" />
                      </button>
                    </div>
                    <ol
                      id="development-lists"
                      className="flex flex-col justify-start items-start gap-3 my-3 opacity-0"
                    >
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Web design and Development.
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Content Management Systems.
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Mobile Application Development.
                      </li>
                    </ol>
                  </div>

                  <div
                    onMouseEnter={() =>
                      handleMouseEnter("marketing", "development", "branding")
                    }
                    onMouseLeave={() => handleMouseLeave("marketing")}
                    className="py-3 px-1 border-b-2 border-[#000000] w-full h-[70px] 2xl:h-[72px] overflow-hidden marketing-lists"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-3">
                        <span className="h-0 w-0 relative marketing-icon">
                          <Image fill src={MarketingIcon} alt="code-icon" />
                        </span>
                        <h3 className="font-[Oxanium] font-[800] lg:text-3xl xl:text-3xl  2xl:text-4xl">
                          Marketing Services
                        </h3>
                      </div>
                      <button>
                        <svg
                          width="36"
                          height="37"
                          viewBox="0 0 36 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="marketing-expandPluseBtn"
                        >
                          <path
                            d="M16 0.607422H20V36.6074H16V0.607422Z"
                            fill="black"
                          />
                          <path
                            d="M0 20.6074V16.6074H36V20.6074H0Z"
                            fill="black"
                          />
                        </svg>
                        <div className="bg-[#121212] marketing-expandSubBtn" />
                      </button>
                    </div>

                    <ol
                      id="marketing-lists"
                      className="flex flex-col justify-start items-start gap-3 my-3 opacity-0"
                    >
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Social Media Marketing.
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Search Engine Optimization.
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Email Marketing.
                      </li>
                    </ol>
                  </div>

                  <div
                    onMouseEnter={() =>
                      handleMouseEnter("branding", "marketing", "development")
                    }
                    onMouseLeave={() => handleMouseLeave("branding")}
                    className="py-3 px-1 border-b-2 border-[#000000] w-full h-[70px] 2xl:h-[72px] overflow-hidden branding-lists"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex justify-start items-center gap-3">
                        <span className="h-0 w-0 relative branding-icon">
                          <Image fill src={BrandingIcon} alt="code-icon" />
                        </span>
                        <h3 className="font-[Oxanium] font-[800] lg:text-3xl xl:text-3xl  2xl:text-4xl">
                          Branding services
                        </h3>
                      </div>
                      <button>
                        <svg
                          width="36"
                          height="37"
                          viewBox="0 0 36 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="branding-expandPluseBtn"
                        >
                          <path
                            d="M16 0.607422H20V36.6074H16V0.607422Z"
                            fill="black"
                          />
                          <path
                            d="M0 20.6074V16.6074H36V20.6074H0Z"
                            fill="black"
                          />
                        </svg>
                        <div className="bg-[#121212] branding-expandSubBtn" />
                      </button>
                    </div>

                    <ol
                      id="branding-lists"
                      className="flex flex-col justify-start items-start gap-3 my-3 opacity-0"
                    >
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Logo Design
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Business Branding
                      </li>
                      <li className="font-[Oxanium] font-[600] text-lg">
                        + Brand Ambasadors
                      </li>
                    </ol>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <ServiceTab />

      <ServiceMob />
    </>
  );
};

const ServiceTab = () => {
  const [scope, animate] = useAnimate();
  const mainContainer = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(scope, { once: true });

  const handleTouch = async (
    currenTouchPosition: any,
    otherList: any,
    otherList2: any
  ) => {
    console.log("the func is running");
    await animate(
      `.${otherList}-lists .imageMainWrapper`,
      {
        opacity: 0,
      },
      { duration: 0.4, ease: "circInOut", delay: 0 }
    );

    animate(
      `.${otherList}-lists`,
      {
        height: "15%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );

    await animate(
      `.${otherList2}-lists .imageMainWrapper`,
      {
        opacity: 0,
        y: ["0%", "40%"],
      },
      { duration: 0.4, ease: "circInOut", delay: 0 }
    );

    animate(
      `.${otherList2}-lists`,
      {
        height: "15%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );

    await animate(
      `.${currenTouchPosition}-lists`,
      {
        height: "60%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.${currenTouchPosition}-lists .imageMainWrapper`,
      {
        opacity: 1,
        y: ["40%", "0%"],
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
  };

  // useEffect(() => {
  //   handleTouch("branding", "development", "marketing");
  // }, [isInView]);

  return (
    <>
      <div className=" 2xl:hidden lg:landscape:hidden lg:portrait:flex hidden md:flex h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0  w-full h-full">
          <Image src={ServiceBg} fill alt="service-page-bg" />
        </div>
        <div className="absolute z-10 w-full h-full">
          <div
            ref={mainContainer}
            className="w-[90%] mx-auto flex flex-col justify-center items-center h-full gap-5"
          >
            <div className="flex flex-col justify-center items-center gap-10 py-3">
              <div className="w-full">
                <motion.div
                  initial={{ x: 250, opacity: 0.2 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "circInOut", delay: 0.4 }}
                  className=" w-full flex justify-between items-center"
                >
                  <div className="h-[2px] bg-[#D9D9D9] w-[40%]" />
                  <h2 className="AzonixFont font-[Azonix,Oxanium] font-[400] text-5xl 2xl:text-6xl">
                    OUR Services
                  </h2>
                </motion.div>
              </div>
              <div className="w-full">
                <motion.h2
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "circInOut" }}
                  className="font-[Oxanium] font-[600] text-6xl"
                >
                  What we offer?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "circInOut" }}
                  className="font-[Oxanium] font-[400] text-[#666] text-xl my-5"
                >
                  We believe in pushing the boundaries of what is possible. We
                  are a team of experts committed in delivering outstanding
                  results by providing the following services:
                </motion.p>
              </div>
            </div>

            <div ref={scope} className="w-full h-[60%]">
              <div
                onClick={() =>
                  handleTouch("development", "marketing", "branding")
                }
                // onMouseLeave={() => handleMouseLeave("development")}
                className="py-4 px-1 border-b-2 border-[#000000] w-full h-[15%] overflow-hidden development-lists"
              >
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <span className="h-10 w-10 relative development-icon ">
                      <Image fill src={CodeIcon} alt="code-icon" />
                    </span>
                    <h3 className="font-[Oxanium] font-[800] text-4xl">
                      Development Services
                    </h3>
                  </div>
                  <button>
                    <svg
                      width="36"
                      height="37"
                      viewBox="0 0 36 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="development-expandPluseBtn"
                    >
                      <path
                        d="M16 0.607422H20V36.6074H16V0.607422Z"
                        fill="black"
                      />
                      <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                    </svg>
                    <div className="bg-[#121212] development-expandSubBtn" />
                  </button>
                </div>

                <div className="w-full h-full flex justify-center items-center py-2">
                  <div className="w-[50%] h-[80%] relative opacity-0 imageMainWrapper">
                    <Image
                      fill
                      src={ServiceImg1}
                      alt="dropdown-image"
                      className="object-cover development"
                    />
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  handleTouch("marketing", "development", "branding")
                }
                // onMouseLeave={() => handleMouseLeave("development")}
                className="py-4 px-1 border-b-2 border-[#000000] w-full h-[15%]  overflow-hidden marketing-lists my-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <span className="h-10 w-10 relative development-icon ">
                      <Image fill src={MarketingIcon} alt="code-icon" />
                    </span>
                    <h3 className="font-[Oxanium] font-[800] text-4xl">
                      Marketing Services
                    </h3>
                  </div>
                  <button>
                    <svg
                      width="36"
                      height="37"
                      viewBox="0 0 36 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="development-expandPluseBtn"
                    >
                      <path
                        d="M16 0.607422H20V36.6074H16V0.607422Z"
                        fill="black"
                      />
                      <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                    </svg>
                    <div className="bg-[#121212] development-expandSubBtn" />
                  </button>
                </div>

                <div className="w-full h-full flex justify-center items-center py-2">
                  <div className="w-[50%] h-[80%] relative opacity-0 imageMainWrapper">
                    <Image
                      fill
                      src={ServiceImg2}
                      alt="dropdown-image"
                      className="object-cover development"
                    />
                  </div>
                </div>
              </div>

              <div
                onClick={() =>
                  handleTouch("branding", "development", "marketing")
                }
                // onMouseLeave={() => handleMouseLeave("development")}
                className="py-4 px-1 border-b-2 border-[#000000] w-full h-[15%] overflow-hidden branding-lists my-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <span className="h-10 w-10 relative development-icon ">
                      <Image fill src={BrandingIcon} alt="code-icon" />
                    </span>
                    <h3 className="font-[Oxanium] font-[800] text-4xl">
                      Branding Services
                    </h3>
                  </div>
                  <button>
                    <svg
                      width="36"
                      height="37"
                      viewBox="0 0 36 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="development-expandPluseBtn"
                    >
                      <path
                        d="M16 0.607422H20V36.6074H16V0.607422Z"
                        fill="black"
                      />
                      <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                    </svg>
                    <div className="bg-[#121212] development-expandSubBtn" />
                  </button>
                </div>

                <div className="w-full h-full flex justify-center items-center py-2">
                  <div className="w-[50%] h-[80%] relative opacity-0 imageMainWrapper">
                    <Image
                      fill
                      src={ServiceImg3}
                      alt="dropdown-image"
                      className="object-cover development"
                    />
                  </div>
                </div>
              </div>
            </div>
            <LearnMoreBTN innerText="Learn More" path="/service" />

            {/* <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[90%] mx-auto text-[#FFF] py-5 font-[Oxanium] font-[600] my-4 2xl:my-3 learMoreBTNcustomHoverEffect capitalize text-xl">
              Learn more{" "}
              
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceMob = () => {
  const [scope, animate] = useAnimate();
  const mainContainer = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(scope, { once: true });

  const handleTouch = async (
    currenTouchPosition: any,
    otherList: any,
    otherList2: any
  ) => {
    await animate(
      `.${otherList}-lists .imageMainWrapper`,
      {
        opacity: 0,
      },
      { duration: 0.4, ease: "circInOut", delay: 0 }
    );

    animate(
      `.${otherList}-lists`,
      {
        height: "13%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );

    await animate(
      `.${otherList2}-lists .imageMainWrapper`,
      {
        opacity: 0,
        y: ["0%", "40%"],
      },
      { duration: 0.4, ease: "circInOut", delay: 0 }
    );

    animate(
      `.${otherList2}-lists`,
      {
        height: "13%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );

    await animate(
      `.${currenTouchPosition}-lists`,
      {
        height: "60%",
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
    animate(
      `.${currenTouchPosition}-lists .imageMainWrapper`,
      {
        opacity: 1,
        y: ["40%", "0%"],
      },
      { duration: 0.8, ease: "circInOut", delay: 0.1 }
    );
  };

  useEffect(() => {
    handleTouch("branding", "development", "marketing");
  }, [isInView]);
  return (
    <>
      <div className="h-screen 2xl:hidden xl:hidden lg:hidden md:hidden overflow-hidden">
        <div className="w-[90%] h-[95%] mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 py-3">
            <div className="w-full">
              <motion.div
                initial={{ x: 250, opacity: 0.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "circInOut", delay: 0.4 }}
                className=" w-full flex justify-between items-center"
              >
                <div className="h-[2px] bg-[#D9D9D9] w-[40%]" />
                <h2 className="AzonixFont font-[Azonix,Oxanium] font-[400] text-2xl ">
                  OUR Services
                </h2>
              </motion.div>
            </div>
            <div className="w-full">
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "circInOut" }}
                className="font-[Oxanium] font-[600] text-3xl"
              >
                What we offer?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "circInOut" }}
                className="font-[Oxanium] font-[400] text-[#666] text-base my-5"
              >
                We believe in pushing the boundaries of what is possible. We are
                a team of experts committed in delivering outstanding results by
                providing the following services:
              </motion.p>
            </div>
          </div>

          <div ref={scope} className="w-full h-[60%]">
            <div
              onClick={() =>
                handleTouch("development", "marketing", "branding")
              }
              // onMouseLeave={() => handleMouseLeave("development")}
              className="py-2 px-1 border-b-2 border-[#000000] w-full h-[13%] overflow-hidden development-lists"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <span className="h-7 w-7 relative development-icon ">
                    <Image fill src={CodeIcon} alt="code-icon" />
                  </span>
                  <h3 className="font-[Oxanium] font-[800] text-xl">
                    Development Services
                  </h3>
                </div>
                <button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="development-expandPluseBtn"
                  >
                    <path
                      d="M16 0.607422H20V36.6074H16V0.607422Z"
                      fill="black"
                    />
                    <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                  </svg>
                  <div className="bg-[#121212] development-expandSubBtn" />
                </button>
              </div>

              <div className="w-full h-full flex justify-center items-center py-2">
                <div className="w-[70%] h-[80%] relative opacity-0 imageMainWrapper">
                  <Image
                    fill
                    src={ServiceImg1}
                    alt="dropdown-image"
                    className="object-cover development"
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                handleTouch("marketing", "development", "branding")
              }
              // onMouseLeave={() => handleMouseLeave("development")}
              className="py-2 px-1 border-b-2 border-[#000000] w-full h-[13%]  overflow-hidden marketing-lists my-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <span className="h-7 w-7 relative development-icon ">
                    <Image fill src={MarketingIcon} alt="code-icon" />
                  </span>
                  <h3 className="font-[Oxanium] font-[800] text-xl">
                    Marketing Services
                  </h3>
                </div>
                <button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="development-expandPluseBtn"
                  >
                    <path
                      d="M16 0.607422H20V36.6074H16V0.607422Z"
                      fill="black"
                    />
                    <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                  </svg>
                  <div className="bg-[#121212] development-expandSubBtn" />
                </button>
              </div>

              <div className="w-full h-full flex justify-center items-center py-2">
                <div className="w-[70%] h-[80%] relative opacity-0 imageMainWrapper">
                  <Image
                    fill
                    src={ServiceImg2}
                    alt="dropdown-image"
                    className="object-cover development"
                  />
                </div>
              </div>
            </div>

            <div
              onClick={() =>
                handleTouch("branding", "development", "marketing")
              }
              // onMouseLeave={() => handleMouseLeave("development")}
              className="py-2 px-1 border-b-2 border-[#000000] w-full h-[13%] overflow-hidden branding-lists my-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-3">
                  <span className="h-7 w-7 relative development-icon ">
                    <Image fill src={BrandingIcon} alt="code-icon" />
                  </span>
                  <h3 className="font-[Oxanium] font-[800] text-xl">
                    Branding Services
                  </h3>
                </div>
                <button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="development-expandPluseBtn"
                  >
                    <path
                      d="M16 0.607422H20V36.6074H16V0.607422Z"
                      fill="black"
                    />
                    <path d="M0 20.6074V16.6074H36V20.6074H0Z" fill="black" />
                  </svg>
                  <div className="bg-[#121212] development-expandSubBtn" />
                </button>
              </div>

              <div className="w-full h-full flex justify-center items-center py-2">
                <div className="w-[70%] h-[80%] relative opacity-0 imageMainWrapper">
                  <Image
                    fill
                    src={ServiceImg3}
                    alt="dropdown-image"
                    className="object-cover development"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[90%] mx-auto text-[#FFF] py-2 font-[Oxanium] font-[600] my-0  learMoreBTNcustomHoverEffect capitalize text-base">
            Learn more{" "}
            
          </button> */}
          <LearnMoreBTN innerText="Learn More" path="/service" />
        </div>
      </div>
    </>
  );
};
