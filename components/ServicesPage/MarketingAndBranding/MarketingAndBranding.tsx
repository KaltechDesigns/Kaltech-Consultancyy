import React from "react";
import Image from "next/image";

import { motion, useAnimate } from "framer-motion";

import SocialMediaIcon from "../../../assets/images/SocialMediaIcon.png";
import EmailIcon from "../../../assets/images/EmailIcon.png";
import SEOIcon from "../../../assets/images/SEOIcon.png";
import LogoIcon from "../../../assets/images/LogoIcon.png";
import BuniessIcon from "../../../assets/images/BusinessIcon.png";
import BrandIcon from "../../../assets/images/BrandLogo.png";
import { LearnMoreBTN } from "@/components/common/Buttons/LearnMoreBTN";

const marketingServiceData = [
  {
    serviceIcon: SocialMediaIcon,
    sserviceTitle: "Social Media Marketing",
    serviceDes: `Let our social media team engage, inspire and boost your digital presence to increase your brand’s visibility`,
  },
  {
    serviceIcon: EmailIcon,
    sserviceTitle: "Email Marketing",
    serviceDes: `Let’s develop strategic and personalized ad campaigns which
                    effectively communicate your services to your targeted
                    demography`,
  },
  {
    serviceIcon: SEOIcon,
    sserviceTitle: "Search Engine Optimiztion",
    serviceDes: ` We unlock the power of SEO that optimizes and drives traffic
                    today, to boost the rank of your digital presence tomorrow.`,
  },
];
const brandingServiceData = [
  {
    serviceIcon: LogoIcon,
    sserviceTitle: "Logo Design",
    serviceDes: ` We craft innovative and distinctive logos that make your
                    business look and feel conspicuous.`,
  },
  {
    serviceIcon: BuniessIcon,
    sserviceTitle: "Business Branding",
    serviceDes: `We craft successful brands that resonate, shape and define
                    your identity making your business remarkably unique.`,
  },
  {
    serviceIcon: BrandIcon,
    sserviceTitle: "Brand Ambassador",
    serviceDes: `Let’s cheerlead, champion and advocate for your brand as
                    your ambassadors to influence and ignite enthusiasm to
                    anyone who cares to listen.`,
  },
];

export const MarketingAndBranding = () => {
  const [scope, animate] = useAnimate();

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

  return (
    <>
      <div className="overflow-hidden hidden relative py-10 overflow-x-hidden md:hidden 2xl:flex xl:flex lg:flex">
        <motion.div
          initial={{ opacity: 0.3, x: "-650%", y: "-95%", rotate: "-180deg" }}
          whileInView={{ opacity: 1, x: "0%", y: "0%", rotate: "0deg" }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute right-0 bottom-0"
        >
          <svg
            //   width="262"
            //   height="524"
            width="200"
            height="400"
            viewBox="0 0 262 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M315.144 6.03951C275.51 -2.16995 234.512 -1.06726 195.377 9.26075C156.242 19.5888 120.039 38.8601 89.6172 65.5576C59.1958 92.2551 35.3869 125.65 20.0651 163.113C4.74319 200.575 -1.67336 241.083 1.32059 281.447C4.31453 321.811 16.6373 360.929 37.3185 395.722C57.9998 430.514 86.4751 460.031 120.502 481.948C154.53 503.865 193.18 517.584 233.411 522.025C273.641 526.466 314.353 521.508 352.342 507.541L321.742 424.313C296.636 433.544 269.729 436.821 243.141 433.885C216.552 430.95 191.008 421.883 168.52 407.398C146.031 392.913 127.212 373.406 113.544 350.412C99.8755 327.418 91.7314 301.564 89.7527 274.888C87.774 248.211 92.0147 221.44 102.141 196.681C112.267 171.922 128.002 149.851 148.108 132.207C168.213 114.562 192.14 101.826 218.004 95.0003C243.869 88.1745 270.964 87.4458 297.158 92.8714L315.144 6.03951Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div>
        <div className="overflow-hidden top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            ref={scope}
            className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] max-h-[90%]"
          >
            <motion.div
              initial={{ opacity: 0, x: "95%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
            >
              <h4 className="AzonixFont font-[Azonix,Oxanium] 2xl:text-5xl xl:text-[25px] lg:text-2xl font-[400] text-right">
                Marketing Services
              </h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                className="grid grid-cols-3 w-full gap-4 mt-6"
              >
                {marketingServiceData.map((cur, id) => (
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
                      className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2 overflow-hidden h-72"
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
            </motion.div>

            <div className="mt-10">
              <motion.h4
                initial={{ opacity: 0, x: "-95%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] 2xl:text-5xl xl:text-[25px] lg:text-2xl font-[400] text-left"
              >
                Branding Services
              </motion.h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                className="grid grid-cols-3 w-full gap-4 mt-6"
              >
                {/* <div
                  onMouseEnter={() => handleHoverAnimation("serviceBox-4")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-4")}
                  id="serviceBox-4"
                  className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={LogoIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700] text-[#000] 2xl:my-4 xl:my-4 lg:my-2">
                    Logo Design
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] 2xl:text-base xl:text-sm font-[400] text-[#000]"
                  >
                    We craft innovative and distinctive logos that make your
                    business look and feel conspicuous.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[50%] xl:w-[50%] lg:w-[60%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
                  >
                    Contact us{" "}
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
                  onMouseEnter={() => handleHoverAnimation("serviceBox-5")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-5")}
                  id="serviceBox-5"
                  className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2  overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={BuniessIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700] text-[#000] 2xl:my-4 xl:my-4 lg:my-2">
                    Business Branding
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] 2xl:text-base xl:text-sm font-[400] text-[#000]"
                  >
                    We craft successful brands that resonate, shape and define
                    your identity making your business remarkably unique.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[50%] xl:w-[50%] lg:w-[60%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  onMouseEnter={() => handleHoverAnimation("serviceBox-6")}
                  onMouseLeave={() => handleMouseLeave("serviceBox-6")}
                  id="serviceBox-6"
                  className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2  overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={BrandIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700] text-[#000] 2xl:my-4 xl:my-4 lg:my-2">
                    Brand Ambassador
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] 2xl:text-base xl:text-sm font-[400] text-[#000]"
                  >
                    Let’s cheerlead, champion and advocate for your brand as
                    your ambassadors to influence and ignite enthusiasm to
                    anyone who cares to listen.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[50%] xl:w-[50%] lg:w-[60%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                </div> */}

                {brandingServiceData.map((cur, id) => (
                  <>
                    <div
                      key={id}
                      onMouseEnter={() => handleHoverAnimation(`serviceBrandBox-${id+1}`)}
                      onMouseLeave={() => handleMouseLeave(`serviceBrandBox-${id+1}`)}
                      id={`serviceBrandBox-${id+1}`}
                      className="border border-[#000] 2xl:p-4 xl:p-4 lg:p-2  overflow-hidden h-72"
                    >
                      <div
                        id="serviceIconWrapper"
                        className="relative h-14 w-14 flex justify-center items-center rounded-full"
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
                      {/* <button
                       
                        className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full 2xl:w-[50%] xl:w-[50%] lg:w-[60%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                      </button> */}
                      <div id="learnMoreBTN">
                        <LearnMoreBTN innerText='Contact Us' path='/contact' />
                      </div>
                    </div>
                  </>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <MarketingAndBrandingTab />
      <MarketingAndBrandingMob />
    </>
  );
};

const MarketingAndBrandingTab = () => {
  return (
    <>
      <div className="h-[135vh] hidden md:flex relative 2xl:hidden xl:hidden lg:hidden overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0.3, x: "10%", y: "10%", rotate: "-180deg" }}
          whileInView={{ opacity: 1, x: "0%", y: "0%", rotate: "0deg" }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute right-0 bottom-0"
        >
          <svg
            //   width="262"
            //   height="524"
            width="200"
            height="400"
            viewBox="0 0 262 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M315.144 6.03951C275.51 -2.16995 234.512 -1.06726 195.377 9.26075C156.242 19.5888 120.039 38.8601 89.6172 65.5576C59.1958 92.2551 35.3869 125.65 20.0651 163.113C4.74319 200.575 -1.67336 241.083 1.32059 281.447C4.31453 321.811 16.6373 360.929 37.3185 395.722C57.9998 430.514 86.4751 460.031 120.502 481.948C154.53 503.865 193.18 517.584 233.411 522.025C273.641 526.466 314.353 521.508 352.342 507.541L321.742 424.313C296.636 433.544 269.729 436.821 243.141 433.885C216.552 430.95 191.008 421.883 168.52 407.398C146.031 392.913 127.212 373.406 113.544 350.412C99.8755 327.418 91.7314 301.564 89.7527 274.888C87.774 248.211 92.0147 221.44 102.141 196.681C112.267 171.922 128.002 149.851 148.108 132.207C168.213 114.562 192.14 101.826 218.004 95.0003C243.869 88.1745 270.964 87.4458 297.158 92.8714L315.144 6.03951Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div>
        <div className="absolute top-0 bottom-0 flex justify-center items-center w-full h-full">
          <div className=" w-[90%]">
            <motion.div
              initial={{ opacity: 0, x: "95%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
            >
              <h4 className="AzonixFont font-[Azonix,Oxanium] text-5xl font-[400] text-right">
                Marketing Services
              </h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                className="grid grid-cols-2 w-full gap-3 mt-6"
              >
                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-1")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-1")}
                  id="serviceBox-1"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={SocialMediaIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Social Media Marketing.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  </button>
                </div>

                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-2")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-2")}
                  id="serviceBox-2"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={EmailIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Email Marketing.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  </button>
                </div>

                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-3")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-3")}
                  id="serviceBox-3"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={SEOIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Search Engine Optimiztion.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  </button>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-5">
              <motion.h4
                initial={{ opacity: 0, x: "-95%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] text-5xl font-[400] text-left"
              >
                Branding Services
              </motion.h4>
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.7 }}
                className="grid grid-cols-2 w-full gap-3 mt-3"
              >
                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-4")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-4")}
                  id="serviceBox-4"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={LogoIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Logo Design.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  </button>
                </div>
                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-5")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-5")}
                  id="serviceBox-5"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={BuniessIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Business Branding.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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
                  </button>
                </div>

                <div
                  // onMouseEnter={() => handleHoverAnimation("serviceBox-6")}
                  // onMouseLeave={() => handleMouseLeave("serviceBox-6")}
                  id="serviceBox-6"
                  className="border border-[#000] p-4 overflow-hidden h-72"
                >
                  <div
                    id="serviceIconWrapper"
                    className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
                  >
                    <Image
                      src={BrandIcon}
                      height={35}
                      width={35}
                      alt="app-dev-icon"
                    />
                  </div>
                  <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                    Brand Ambassador.
                  </h4>
                  <p
                    id="serviceSmallInfo"
                    className="font-[Oxanium] text-base font-[400] text-[#000]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sagittis urna at tempor rhoncus. Aliquam nulla est,
                    bibendum sit amet faucibus vel.
                  </p>
                  <button
                    id="learnMoreBTN"
                    className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-[50%] text-[#FFF] py-3 font-[Oxanium] font-[600] opacity-0 "
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

const MarketingAndBrandingMob = () => {
  const [scope, animate] = useAnimate();

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
  return (
    <>
      <div className="flex justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden overflow-hidden">
        <div ref={scope} className="w-[90%]">
          <motion.h4
            initial={{ opacity: 0, x: "95%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
            className="AzonixFont font-[Azonix,Oxanium] text-2xl font-[400] text-right"
          >
            Marketing Services
          </motion.h4>

          <div className="grid grid-cols-1 w-full gap-3 my-7">
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
                  src={SocialMediaIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Social Media Marketing.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                Let our social media team engage, inspire and boost your digital
                presence to increase your brand’s visibility
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
              className="border border-[#000] p-4 overflow-hidden h-80"
            >
              <div
                id="serviceIconWrapper"
                className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
              >
                <Image
                  src={EmailIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Email Marketing.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                Let’s develop strategic and personalized ad campaigns which
                effectively communicate your services to your targeted
                demography.
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
              className="border border-[#000] p-4 overflow-hidden h-80"
            >
              <div
                id="serviceIconWrapper"
                className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
              >
                <Image
                  src={SEOIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Search Engine Optimiztion.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                We unlock the power of SEO that optimizes and drives traffic
                today, to boost the rank of your digital presence tomorrow.
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
          </div>

          <motion.h4
            initial={{ opacity: 0, x: "-95%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
            className="AzonixFont font-[Azonix,Oxanium] text-2xl font-[400] text-left"
          >
            Branding Services
          </motion.h4>
          <div className="grid grid-cols-1 w-full gap-3 my-7">
            <div
              onMouseEnter={() => handleHoverAnimation("serviceBox-4")}
              onMouseLeave={() => handleMouseLeave("serviceBox-4")}
              id="serviceBox-4"
              className="border border-[#000] p-4 overflow-hidden h-80"
            >
              <div
                id="serviceIconWrapper"
                className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
              >
                <Image
                  src={LogoIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Logo Design.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                We craft innovative and distinctive logos that make your
                business look and feel conspicuous.
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
              onMouseEnter={() => handleHoverAnimation("serviceBox-5")}
              onMouseLeave={() => handleMouseLeave("serviceBox-5")}
              id="serviceBox-5"
              className="border border-[#000] p-4 overflow-hidden h-80"
            >
              <div
                id="serviceIconWrapper"
                className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
              >
                <Image
                  src={BuniessIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Business Branding.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                We craft successful brands that resonate, shape and define your
                identity making your business remarkably unique.
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
              onMouseEnter={() => handleHoverAnimation("serviceBox-6")}
              onMouseLeave={() => handleMouseLeave("serviceBox-6")}
              id="serviceBox-6"
              className="border border-[#000] p-4 overflow-hidden h-80"
            >
              <div
                id="serviceIconWrapper"
                className="relative h-14 w-14 bg-white flex justify-center items-center rounded-full"
              >
                <Image
                  src={BrandIcon}
                  height={35}
                  width={35}
                  alt="app-dev-icon"
                />
              </div>
              <h4 className="font-[Oxanium] text-2xl font-[700] text-[#000] my-4">
                Brand Ambassador.
              </h4>
              <p
                id="serviceSmallInfo"
                className="font-[Oxanium] text-base font-[400] text-[#000]"
              >
                Let’s cheerlead, champion and advocate for your brand as your
                ambassadors to influence and ignite enthusiasm to anyone who
                cares to listen.
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
          </div>
        </div>
      </div>
    </>
  );
};
