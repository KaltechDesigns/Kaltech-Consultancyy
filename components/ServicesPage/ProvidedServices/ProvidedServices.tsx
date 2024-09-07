import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useAnimate, useInView } from "framer-motion";
import SplitType from "split-type";

import ServiceLogo from "../../../assets/images/ServiceLogo.png";
import AppDevIcon from "../../../assets/images/AppDevIcon.png";
import WebDevIcon from "../../../assets/images/WebDevIcon.png";
import MarketingIcon from "../../../assets/images/MarketingIcon2.png";
import gsap from "gsap";
import { LearnMoreBTN } from "@/components/common/Buttons/LearnMoreBTN";

const servicesData = [
  {
    serviceIcon: AppDevIcon,
    sserviceTitle: "Mobile Application Development",
    serviceDes: ` Experience the latest UX/UI design principles implemented to
                    your projects by contacting our mobile development team.`,
  },
  {
    serviceIcon: WebDevIcon,
    sserviceTitle: "Web Design and Development",
    serviceDes: `Reimagining and transforming your ideas into reality we
                    bring your visions from concept to code pixel by pixel.`,
  },
  {
    serviceIcon: MarketingIcon,
    sserviceTitle: "Content Management Systems",
    serviceDes: `We design custom CMS to help you efficiently manage and
                    optimize your staff, customers and your business resources.`,
  },
];

export const ProvidedServices = () => {
  const [scope, animate] = useAnimate();
  const nameMainWrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(nameMainWrapperRef);

  const kaltechText = useRef<HTMLHeadingElement | null>(null);

  /**
   * The function `handleHoverAnimation` animates different elements within a specified box ID in a
   * React component when hovered over.
   * @param {any} currentBoxID - The `currentBoxID` parameter is the ID of the box element that
   * triggered the hover animation.
   */
  const handleHoverAnimation = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "#C99C09" },
      { duration: 0.8, ease: "backInOut" }
    );
    await animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "-50%", display: "none", opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["100%", "10%"], opacity: [0, 1] },
      { duration: 0.4, ease: "circInOut" }
    );
  };

  /**
   * The function `handleMouseLeave` in TypeScript React animates elements on mouse leave event.
   * @param {any} currentBoxID - The `currentBoxID` parameter in the `handleMouseLeave` function is
   * used to identify the specific box element that triggered the mouse leave event. This ID is then
   * used to target and animate specific elements within that box, such as the service icon wrapper,
   * learn more button, and service small info
   */
  const handleMouseLeave = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "white" },
      { duration: 0.8, ease: "backInOut" }
    );

    await animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["10%", "100%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "0%", display: "flex", opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut" }
    );
  };

  useEffect(() => {
    // const gsapTimeLine = gsap.timeline();
    const spliteText =
      kaltechText.current &&
      new SplitType(kaltechText.current, { types: "chars" });

    if (spliteText?.chars) {
      spliteText?.chars.forEach((element, idx) => {
        if (spliteText?.chars && (idx + 1) % 2 === 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "-20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 2,
            delay: 2,
          });
        } else if (spliteText?.chars && (idx + 1) % 2 !== 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 1,
            delay: 2,
          });
        }
      });
    }
  }, [isInView]);

  return (
    <>
      <div className="overflow-hidden hidden py-10 overflow-x-hidden md:hidden 2xl:flex xl:flex lg:flex">
        <motion.div
          initial={{ rotate: "-100deg", y: "90%", x: "-20%" }}
          whileInView={{ rotate: "-360deg", y: "0%", x: "0%" }}
          transition={{ duration: 1.2, ease: "circInOut" }}
          className="absolute"
        >
          <svg
            // width="207"
            // height="476"
            width="180"
            height="350"
            viewBox="0 0 207 476"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M-295.837 315.843C-280.078 353.124 -255.88 386.237 -225.148 412.577C-194.417 438.917 -157.99 457.764 -118.737 467.633C-79.4842 477.503 -38.4759 478.126 1.05895 469.453C40.5938 460.781 77.5759 443.05 109.093 417.656C140.611 392.262 165.804 359.898 182.688 323.113C199.572 286.328 207.687 246.126 206.394 205.672C205.101 165.217 194.435 125.616 175.236 89.9841C156.036 54.3526 128.828 23.6641 95.7529 0.334945L44.6418 72.7982C66.5011 88.2164 84.483 108.498 97.1718 132.047C109.861 155.596 116.91 181.769 117.764 208.505C118.619 235.241 113.256 261.811 102.097 286.122C90.9383 310.433 74.2885 331.822 53.4585 348.605C32.6286 365.388 8.18723 377.106 -17.9413 382.838C-44.0698 388.569 -71.1722 388.158 -97.1145 381.635C-123.057 375.112 -147.131 362.656 -167.441 345.248C-187.752 327.841 -203.744 305.956 -214.159 281.317L-295.837 315.843Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div>

        <div className="absolut top-0 left-0 w-full h-fll flex justify-center items-center">
          <div className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] max-h-[85%] mt-6">
            <motion.div
              initial={{ y: "-50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: "backInOut", delay: 0.2 }}
              className="flex justify-between items-center gap-2 w-full border-b-2 border-[#000] py-5"
            >
              {/* <div className="relative h-40 w-40">
              <Image fill src={ServiceLogo} alt="animated-logo" />
            </div> */}
              <div ref={nameMainWrapperRef}>
                <h3
                  ref={kaltechText}
                  className="2xl:text-[75px] xl:text-[50px] lg:portrait:text-[60px] lg:text-[60px] font-[400] AzonixFont font-[Azonix,Oxanium] text-[#000000] uppercase"
                >
                  Kaltech Consultancy
                </h3>
              </div>
            </motion.div>

            <div className="mt-12">
              <motion.h4
                initial={{ opacity: 0, x: "-95%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] 2xl:text-5xl xl:text-[25px] lg:text-2xl font-[400]"
              >
                Development services
              </motion.h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                ref={scope}
                className="grid grid-cols-3 w-full xl:gap-4 2xl:gap-4 lg:gap-2.5 mt-10"
              >
                {servicesData.map((cur, id) => (
                  <>
                    <div
                      key={id}
                      onMouseEnter={() =>
                        handleHoverAnimation(`serviceBox-${id + 1}`)
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(`serviceBox-${id + 1}`)
                      }
                      id={`serviceBox-${id + 1}`}
                      className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2 h-72 overflow-hidden"
                    >
                      <div
                        id="serviceIconWrapper"
                        className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                      >
                        <Image
                          src={cur.serviceIcon}
                          height={35}
                          width={35}
                          alt="app-dev-icon"
                        />
                      </div>
                      <h4 className="font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700] text-[#000] 2xl:my-4 xl:my-4 lg:my-2">
                        {cur.sserviceTitle}
                      </h4>
                      <p
                        id="serviceSmallInfo"
                        className="font-[Oxanium] 2xl:text-base xl:text-sm font-[400] text-[#000]"
                      >
                        {cur.serviceDes}
                      </p>

                      <div id="learnMoreBTN" className="opacity-0">
                        <LearnMoreBTN innerText="Contact Us" path="/contact" />
                      </div>
                    </div>
                  </>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ProvidedServicesTab />
      <ProvidedServicesMob />
    </>
  );
};

const ProvidedServicesTab = () => {
  const [scope, animate] = useAnimate();
  const nameMainWrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(nameMainWrapperRef);

  const kaltechText = useRef<HTMLHeadingElement | null>(null);

  /**
   * The function `handleHoverAnimation` animates different elements within a specified box ID in a
   * React component when hovered over.
   * @param {any} currentBoxID - The `currentBoxID` parameter is the ID of the box element that
   * triggered the hover animation.
   */
  const handleHoverAnimation = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "#C99C09" },
      { duration: 0.8, ease: "backInOut" }
    );
    await animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "-50%", display: "none", opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["100%", "10%"], opacity: [0, 1] },
      { duration: 0.4, ease: "circInOut" }
    );
  };

  /**
   * The function `handleMouseLeave` in TypeScript React animates elements on mouse leave event.
   * @param {any} currentBoxID - The `currentBoxID` parameter in the `handleMouseLeave` function is
   * used to identify the specific box element that triggered the mouse leave event. This ID is then
   * used to target and animate specific elements within that box, such as the service icon wrapper,
   * learn more button, and service small info
   */
  const handleMouseLeave = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "white" },
      { duration: 0.8, ease: "backInOut" }
    );

    await animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["10%", "100%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "0%", display: "flex", opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut" }
    );
  };

  useEffect(() => {
    // const gsapTimeLine = gsap.timeline();
    const spliteText =
      kaltechText.current &&
      new SplitType(kaltechText.current, { types: "chars" });

    if (spliteText?.chars) {
      spliteText?.chars.forEach((element, idx) => {
        if (spliteText?.chars && (idx + 1) % 2 === 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "-20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 2,
            delay: 2,
          });
        } else if (spliteText?.chars && (idx + 1) % 2 !== 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 1,
            delay: 2,
          });
        }
      });
    }
  }, [isInView]);
  return (
    <>
      <div className="h-screen relative overflow-hidden hidden md:flex 2xl:hidden xl:hidden lg:hidden">
        <motion.div
          initial={{ rotate: "-100deg", y: "90%", x: "-20%" }}
          whileInView={{ rotate: "-360deg", y: "0%", x: "0%" }}
          transition={{ duration: 1.2, ease: "circInOut" }}
          className="absolute"
        >
          <svg
            // width="207"
            // height="476"
            width="180"
            height="350"
            viewBox="0 0 207 476"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M-295.837 315.843C-280.078 353.124 -255.88 386.237 -225.148 412.577C-194.417 438.917 -157.99 457.764 -118.737 467.633C-79.4842 477.503 -38.4759 478.126 1.05895 469.453C40.5938 460.781 77.5759 443.05 109.093 417.656C140.611 392.262 165.804 359.898 182.688 323.113C199.572 286.328 207.687 246.126 206.394 205.672C205.101 165.217 194.435 125.616 175.236 89.9841C156.036 54.3526 128.828 23.6641 95.7529 0.334945L44.6418 72.7982C66.5011 88.2164 84.483 108.498 97.1718 132.047C109.861 155.596 116.91 181.769 117.764 208.505C118.619 235.241 113.256 261.811 102.097 286.122C90.9383 310.433 74.2885 331.822 53.4585 348.605C32.6286 365.388 8.18723 377.106 -17.9413 382.838C-44.0698 388.569 -71.1722 388.158 -97.1145 381.635C-123.057 375.112 -147.131 362.656 -167.441 345.248C-187.752 327.841 -203.744 305.956 -214.159 281.317L-295.837 315.843Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-[90%]">
            <motion.div
              initial={{ y: "-50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: "backInOut", delay: 0.2 }}
              className="flex justify-center items-center gap-2 w-full border-b-2 border-[#000] py-5"
            >
              {/* <div className="relative h-40 w-40">
              <Image fill src={ServiceLogo} alt="animated-logo" />
            </div> */}
              <div ref={nameMainWrapperRef}>
                <h3
                  ref={kaltechText}
                  className="text-[50px] font-[400] AzonixFont font-[Azonix,Oxanium] text-[#000000] uppercase"
                >
                  Kaltech Consultancy
                </h3>
              </div>
            </motion.div>

            <div className="mt-12">
              <motion.h4
                initial={{ opacity: 0, x: "-95%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] text-5xl font-[400]"
              >
                Development services
              </motion.h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                ref={scope}
                className="grid grid-cols-2 w-full gap-3 mt-10"
              >
                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-1")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-1")}
                  id="serviceBox-1"
                  className="border border-[#000] p-4 overflow-hidden h-80"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={AppDevIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Mobile Application Development.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Experience the latest UX/UI design principles implemented to
                    your projects by contacting our mobile development team.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>

                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-2")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-2")}
                  id="serviceBox-2"
                  className="border border-[#000] p-4 h-80 overflow-hidden"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={WebDevIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Web design and Development.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Reimagining and transforming your ideas into reality we
                    bring your visions from concept to code pixel by pixel.
                  </p>

                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>

                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-3")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-3")}
                  id="serviceBox-3"
                  className="border border-[#000] p-4 h-80 overflow-hidden"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={MarketingIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Content Management Systems.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    We design custom CMS to help you efficiently manage and
                    optimize your staff, customers and your business resources.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProvidedServicesMob = () => {
  const [scope, animate] = useAnimate();
  const nameMainWrapperRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(nameMainWrapperRef);

  const kaltechText = useRef<HTMLHeadingElement | null>(null);

  /**
   * The function `handleHoverAnimation` animates different elements within a specified box ID in a
   * React component when hovered over.
   * @param {any} currentBoxID - The `currentBoxID` parameter is the ID of the box element that
   * triggered the hover animation.
   */
  const handleHoverAnimation = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "#C99C09" },
      { duration: 0.8, ease: "backInOut" }
    );
    await animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "-50%", display: "none", opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["100%", "10%"], opacity: [0, 1] },
      { duration: 0.4, ease: "circInOut" }
    );
  };

  /**
   * The function `handleMouseLeave` in TypeScript React animates elements on mouse leave event.
   * @param {any} currentBoxID - The `currentBoxID` parameter in the `handleMouseLeave` function is
   * used to identify the specific box element that triggered the mouse leave event. This ID is then
   * used to target and animate specific elements within that box, such as the service icon wrapper,
   * learn more button, and service small info
   */
  const handleMouseLeave = async (currentBoxID: any) => {
    animate(
      `#${currentBoxID} #serviceIconWrapper`,
      { backgroundColor: "white" },
      { duration: 0.8, ease: "backInOut" }
    );

    await animate(
      `#${currentBoxID} #learnMoreBTN`,
      { y: ["10%", "100%"], opacity: [1, 0] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      `#${currentBoxID} #serviceSmallInfo`,
      { y: "0%", display: "flex", opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut" }
    );
  };

  useEffect(() => {
    // const gsapTimeLine = gsap.timeline();
    const spliteText =
      kaltechText.current &&
      new SplitType(kaltechText.current, { types: "chars" });

    if (spliteText?.chars) {
      spliteText?.chars.forEach((element, idx) => {
        if (spliteText?.chars && (idx + 1) % 2 === 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "-20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 2,
            delay: 2,
          });
        } else if (spliteText?.chars && (idx + 1) % 2 !== 0) {
          gsap.from(spliteText?.chars[idx + 1], {
            duration: 0.8,
            opacity: 0,
            y: "20%",
            stagger: 0,
            ease: "power2.inOut",
            scrub: 1,
            delay: 2,
          });
        }
      });
    }
  }, [isInView]);
  return (
    <>
      <div className="relative  md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-full h-full  flex justify-center items-center z-10">
          <div className="w-[90%]">
            <motion.div
              initial={{ y: "-50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.7, ease: "backInOut", delay: 0.2 }}
              className="flex justify-center items-center gap-2 w-full border-b-2 border-[#000] py-5"
            >
              {/* <div className="relative h-40 w-40">
              <Image fill src={ServiceLogo} alt="animated-logo" />
            </div> */}
              <div ref={nameMainWrapperRef}>
                <h3
                  ref={kaltechText}
                  className="text-[26px] font-[400] AzonixFont font-[Azonix,Oxanium] text-[#000000] uppercase"
                >
                  Kaltech Consultancy
                </h3>
              </div>
            </motion.div>
            <div className="my-5">
              <motion.h4
                initial={{ opacity: 0, x: "-95%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] text-2xl font-[400]"
              >
                Development services
              </motion.h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                ref={scope}
                className="grid grid-cols-1 w-full gap-3 mt-10"
              >
                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-1")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-1")}
                  id="serviceBox-1"
                  className="border border-[#000] p-4 overflow-hidden h-80"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={AppDevIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Mobile Application Development.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Experience the latest UX/UI design principles implemented to
                    your projects by contacting our mobile development team.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>

                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-2")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-2")}
                  id="serviceBox-2"
                  className="border border-[#000] p-4 h-80 overflow-hidden"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={WebDevIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Web design and Development.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Reimagining and transforming your ideas into reality we
                    bring your visions from concept to code pixel by pixel.
                  </p>

                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>

                <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-3")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-3")}
                  id="serviceBox-3"
                  className="border border-[#000] p-4 h-80 overflow-hidden"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={MarketingIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Content Management Systems.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    We design custom CMS to help you efficiently manage and
                    optimize your staff, customers and your business resources.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact Us{" "}
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
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
