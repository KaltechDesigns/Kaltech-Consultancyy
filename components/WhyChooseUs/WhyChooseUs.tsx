import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { motion, useScroll, useTransform } from "framer-motion";
import { SVGCricel } from "../common/SVGCircel/SVGCricel";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ChooseUsBg3 from "../../assets/images/whyChooseUsBg2.png";
import XIcon from "@mui/icons-material/X";
import ChooseUsBg from "../../assets/images/ChooseUsBg.png";
import ChooseUsBg2 from "../../assets/images/ChooseUsBg2.png";
import ChooseUsBg4 from "../../assets/images/ChooseUsBg3.png";
import ChooseLeftLogo from "../../assets/images/chooseLeftLogo2.png";
import { useRouter } from "next/router";
import { LearnMoreBTN } from "../common/Buttons/LearnMoreBTN";
import Link from "next/link";

// gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsThirdPart = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-full w-full bg-[#E1EAED] relative overflow-hidden">
        <div className="h-[70%] relative top-[25%]">
          <Image
            src={ChooseUsBg3}
            alt="why-choose-us-third-bg"
            fill
            loading="lazy"
            className="object-fill "
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="h-[80%] w-[85%] ml-14">
            <div className="flex justify-center items-center h-[16%]">
              <motion.h3
                initial={{ y: "-190%", opacity: 0.2 }}
                whileInView={{ opacity: [0.2, 0.4, 0.6, 0.8, 1], y: "0%" }}
                transition={{
                  duration: 0.3,
                  ease: "circInOut",
                  delay: 0.4,
                  times: [0.2, 0.4, 0.6, 0.8, 1],
                }}
                className="AzonixFont font-[Azonix,Oxanium] text-[#121212] font-[500] text-2xl"
              >
                Do you have a project in mind?
              </motion.h3>
            </div>
            <div className="h-[85%] flex flex-col justify-center items-center gap-3">
              <div className="2xl:w-[75%] w-[60%]">
                <motion.h3
                  initial={{ y: "90%", opacity: 0.2 }}
                  whileInView={{ opacity: [0.2, 0.4, 0.6, 0.8, 1], y: "0%" }}
                  transition={{
                    duration: 0.3,
                    ease: "circInOut",
                    delay: 0.4,
                    times: [0.2, 0.4, 0.6, 0.8, 1],
                  }}
                  className="font-[Oxanium] text-[#000] font-[600] text-5xl 2xl:text-7xl text-center"
                >
                  Let’s build something great together!
                </motion.h3>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.2, 0.6, 1] }}
                transition={{
                  duration: 0.6,
                  ease: "backInOut",
                  delay: 0.4,
                  times: [0.2, 0.6, 1],
                }}
                onClick={() => router.push("/contact")}
                className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[2.5%] font-[Oxanium] font-[400] text-base 2xl:text-lg w-36 h-36 2xl:w-40 2xl:h-40 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
              >
                Contact Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 14 13"
                    fill="none"
                    className="transition-colors duration-200 ease-in-out delay-100"
                  >
                    <path
                      d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                      // fill="#2C2C2C"
                    />
                  </svg>
                </span>
              </motion.button>

              <div className="flex justify-between items-end  w-[90%] mt-[2%] p-1">
                <motion.div
                  initial={{ opacity: 0, x: "-90%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.3,
                    staggerChildren: 0.5,
                    delayChildren: 0.4,
                  }}
                  className=" flex justify-start items-center gap-4 w-[40%]"
                >
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100089610044002"
                  >
                    <motion.button
                      initial={{ y: "20%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: 0.3,
                      }}
                      className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full px-8 py-2 flex justify-center items-center hoverAnimationBTN relative"
                    >
                      FaceBook
                    </motion.button>
                  </Link>
                  <Link target="_blank" href="https://x.com/KaltechServices">
                    <motion.button
                      initial={{ y: "20%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: 0.4,
                      }}
                      className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full px-8 py-2 hoverAnimationBTN relative"
                    >
                      <XIcon className="text-[17px] font-[800]" />
                    </motion.button>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/kaltechconsultancy/"
                  >
                    <motion.button
                      initial={{ y: "20%", opacity: 0 }}
                      whileInView={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut",
                        delay: 0.5,
                      }}
                      className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full px-8 py-2 flex justify-center items-center hoverAnimationBTN relative"
                    >
                      Instagram
                    </motion.button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "90%", rotate: "80deg" }}
                  whileInView={{ opacity: 1, x: "0%", rotate: "0deg" }}
                  transition={{
                    duration: 0.4,
                    ease: "circInOut",
                    delay: 0.2,
                    times: [0.2, 0.4, 0.6, 0.8, 1],
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="125"
                    viewBox="0 0 120 125"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M45.2402 1.93831C45.4817 11.6783 47.541 21.2522 51.2857 30.005C55.2784 39.3377 61.0803 47.4867 68.2424 53.8215C75.4046 60.1563 83.735 64.5071 92.5894 66.5373C100.893 68.4412 109.45 68.2562 117.674 66.004L110.944 37.0513C106.574 38.1283 102.054 38.1683 97.6592 37.1607C92.7144 36.027 88.062 33.5972 84.0621 30.0593C80.0622 26.5215 76.8219 21.9704 74.5919 16.758C72.6103 12.1262 71.4737 7.0825 71.2451 1.93831H45.2402ZM119.74 67.4015C119.198 67.5688 118.655 67.7273 118.11 67.877C109.636 70.2056 100.819 70.4003 92.2615 68.4383C83.1544 66.3502 74.5861 61.8752 67.2194 55.3595C59.8526 48.8438 53.885 40.462 49.7781 30.8625C45.9194 21.8431 43.8005 11.9758 43.5585 1.93831C43.543 1.29285 43.5352 0.646687 43.5352 0H72.883C72.883 5.51435 73.9836 10.9548 76.0994 15.9005C78.2153 20.8461 81.2899 25.1645 85.0852 28.5214C88.8806 31.8783 93.295 34.1838 97.987 35.2596C102.679 36.3354 107.523 36.1527 112.144 34.7254L119.74 67.4015ZM60.9546 65.0376C70.07 65.6241 78.9462 68.6207 86.8966 73.7956L72.7122 102.77C68.6162 100.104 64.0432 98.5602 59.3469 98.258C54.6506 97.9558 49.957 98.9034 45.6291 101.027C41.3012 103.152 37.4551 106.395 34.3883 110.507C31.3214 114.619 29.1161 119.49 27.9429 124.742L0 116.443C2.27723 106.249 6.55775 96.7949 12.5104 88.8132C18.4631 80.8315 25.9283 74.5357 34.3287 70.413C42.729 66.2903 51.8392 64.451 60.9546 65.0376Z"
                      fill="#A59D84"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WhyChooseUsSecondPart = ({
  analyticCounter,
  strategicCounter,
  inovativeCounter,
}: any) => {
  return (
    <div className="bg-[#F3EFE8] w-full h-full flex justify-center items-center overflow-hidden">
      <div className=" w-[90%] h-[90%] ml-14 flex justify-between items-center gap-4">
        <div className="w-[48%] h-full px-2 py-3 ">
          <motion.h4
            initial={{ x: "-90%", opacity: 0 }}
            whileInView={{ x: 0, opacity: [0, 0, 0.5, 1] }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
            className="text-[#999] AzonixFont font-[Azonix,Oxanium] uppercase font-[400] text-3xl 2xl:text-4xl"
          >
            why choose us
          </motion.h4>
          <motion.h3
            initial={{ x: "-90%", opacity: 0 }}
            whileInView={{ x: 0, opacity: [0, 0, 0.5, 1] }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.3 }}
            className="font-[Oxanium] text-[#121212] uppercase font-[600] text-5xl 2xl:text-6xl my-[3%]"
          >
            analytic, Strategic, Inovative
          </motion.h3>
          <motion.p
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.35 }}
            className="font-[Oxanium] text-[#121212] font-[400] text-base 2xl:text-lg my-[3%] 2xl:my-[6%]"
          >
            Attention to details, excellent communication skills, critical
            analysis, modern research methodologies are just a few values we
            implement on every project to make us different from other
            development companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "circInOut", delay: 0.3 }}
          >
            <LearnMoreBTN innerText="Learn More" path="/" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
              duration: 0.8,
              ease: "circInOut",
              delay: 0.3,
              staggerChildren: 0.5,
            }}
            className="mt-[5%] flex justify-start items-center gap-4"
          >
            <Link
              href="https://www.facebook.com/profile.php?id=100089610044002"
              target="_blank"
            >
              <motion.button
                initial={{ y: "60%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.5 }}
                className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full px-8 py-2 flex justify-center items-center hoverAnimationBTN relative"
              >
                FaceBook
              </motion.button>
            </Link>
            <Link target="_blank" href="https://x.com/KaltechServices">
              <motion.button
                initial={{ y: "60%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.6 }}
                className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full px-8 py-2 hoverAnimationBTN relative"
              >
                <XIcon className="text-[17px] font-[800]" />
              </motion.button>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/kaltechconsultancy/"
            >
              <motion.button
                initial={{ y: "60%" }}
                whileInView={{ y: "0%" }}
                transition={{ duration: 0.8, ease: "circInOut", delay: 0.7 }}
                className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full px-8 py-2 flex justify-center items-center hoverAnimationBTN relative"
              >
                Instagram
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: "130%", rotate: "180deg", opacity: 0.1 }}
            whileInView={{
              y: "0%",
              rotate: "0deg",
              opacity: [0.2, 0.4, 0.6, 0.8, 1],
            }}
            transition={{
              ease: "circInOut",
              duration: 0.8,
              delay: 0.65,
              times: [0.2, 0.4, 0.6, 0.8, 1],
            }}
            className="max-w-max mt-[20%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="125"
              viewBox="0 0 139 125"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.5172 1.94231C52.7975 11.7024 55.1881 21.2961 59.5351 30.067C64.1701 39.419 70.9052 47.5849 79.2194 53.9327C87.5336 60.2806 97.204 64.6404 107.483 66.6747C117.122 68.5827 127.055 68.3972 136.603 66.1404L128.79 37.1278C123.717 38.2071 118.469 38.2471 113.368 37.2375C107.628 36.1014 102.227 33.6666 97.5837 30.1214C92.9404 26.5763 89.1789 22.0158 86.5902 16.7926C84.2898 12.1512 82.9704 7.09713 82.7051 1.94231H52.5172ZM139 67.5407C138.371 67.7084 137.74 67.8672 137.108 68.0172C127.271 70.3507 117.036 70.5458 107.102 68.5797C96.53 66.4873 86.5834 62.0031 78.0318 55.4739C69.4801 48.9447 62.5526 40.5456 57.7851 30.9263C53.3056 21.8882 50.8459 12.0005 50.565 1.94231C50.547 1.29552 50.5379 0.648023 50.5379 0H84.6065C84.6065 5.52574 85.884 10.9774 88.3402 15.9333C90.7965 20.8892 94.3655 25.2164 98.7714 28.5803C103.177 31.9442 108.302 34.2545 113.748 35.3325C119.195 36.4105 124.818 36.2273 130.182 34.7972L139 67.5407ZM70.7593 65.1719C81.341 65.7597 91.6449 68.7625 100.874 73.9481L84.4082 102.983C79.6533 100.311 74.3447 98.7638 68.893 98.461C63.4413 98.1582 57.9927 99.1077 52.9687 101.236C47.9446 103.365 43.4799 106.615 39.9197 110.736C36.3596 114.856 33.7995 119.737 32.4376 125L0 116.684C2.64353 106.468 7.61258 96.9949 14.5227 88.9967C21.4329 80.9985 30.099 74.6898 39.8505 70.5585C49.6021 66.4272 60.1777 64.5842 70.7593 65.1719Z"
                fill="#C99C09"
              />
            </svg>
          </motion.div>
        </div>
        <div className="w-[48%] flex flex-col justify-end items-end ">
          {/* Analytic section start */}
          <div className="flex justify-center items-center w-[80%] gap-5">
            <motion.div
              initial={{ x: "90%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.2 }}
              className="2xl:w-[50%] w-[30%] flex justify-center items-center"
            >
              <SVGCricel
                percentageCount={analyticCounter}
                width="180"
                height="180"
              />
            </motion.div>
            <motion.div
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.5 }}
              className="2xl:w-[60%] w-[70%] flex flex-col justify-start items-start gap-2"
            >
              <h4 className="font-[Oxanium] text-[#121212] font-[700] text-3xl capitalize">
                Analytic
              </h4>
              <p className="font-[Oxanium] text-[#121212] text-lg font-[400]">
                Performance analysis, security, and efficiency are the core
                reasons for each successful project.{" "}
              </p>
            </motion.div>
          </div>
          {/* Analytic section end */}

          {/* strategic section start */}
          <div className="flex justify-center items-center w-[80%] gap-5 mr-auto">
            <motion.div
              initial={{ x: "90%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.35 }}
              className="2xl:w-[50%] w-[30%] flex justify-center items-center"
            >
              <SVGCricel
                percentageCount={strategicCounter}
                width="180"
                height="180"
              />
            </motion.div>
            <motion.div
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.5 }}
              className="2xl:w-[60%] w-[70%] flex flex-col justify-start items-start gap-2"
            >
              <h4 className="font-[Oxanium] text-[#121212] font-[700] text-3xl capitalize">
                strategic
              </h4>
              <p className="font-[Oxanium] text-[#121212] text-lg font-[400]">
                Implementing the best design principles and strategies are key
                factors to minimize project failures .
              </p>
            </motion.div>
          </div>
          {/* strategic section end */}

          {/* Inovative section start */}
          <div className="flex justify-center items-center w-[80%] gap-5">
            <motion.div
              initial={{ x: "90%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.45 }}
              className="2xl:w-[50%] w-[30%] flex justify-center items-center"
            >
              <SVGCricel
                percentageCount={inovativeCounter}
                width="180"
                height="180"
              />
            </motion.div>
            <motion.div
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: [0, 0, 0.5, 1] }}
              transition={{ duration: 0.8, ease: "circInOut", delay: 0.5 }}
              className="2xl:w-[60%] w-[70%] flex flex-col justify-start items-start gap-2"
            >
              <h4 className="font-[Oxanium] text-[#121212] font-[700] text-3xl capitalize">
                Inovative
              </h4>
              <p className="font-[Oxanium] text-[#121212] text-lg font-[400]">
                Unrelenting drive to break the status quo and develop anew where
                few have dared to go.
              </p>
            </motion.div>
          </div>
          {/* Inovative section end */}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsFirstPart = () => {
  return (
    <>
      <div className="h-full w-full relative  snap-center flex-shrink-0">
        <Image src={ChooseUsBg} alt="choose-us-bg" fill loading="lazy" />
        <div className="flex absolute top-0 left-0 justify-end items-center w-full h-full">
          <div className="w-[85%] h-[80%] mr-16 flex justify-center">
            <motion.div
              initial={{ x: "-100%", opacity: 0.3 }}
              whileInView={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 0.6 }}
              className="w-[40%] flex flex-col justify-center items-start gap-8"
            >
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-6xl 2xl:text-7xl">
                  Why
                </h3>
                <h3 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-6xl 2xl:text-7xl">
                  Choose
                </h3>
                <h3 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-6xl 2xl:text-7xl">
                  Us
                </h3>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl 2xl:text-6xl uppercase">
                  analyticAL
                </h3>
                <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl 2xl:text-6xl uppercase">
                  Strategic
                </h3>
                <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl 2xl:text-6xl uppercase">
                  Inovative
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0.3 }}
              whileInView={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 0.6 }}
              className="w-[60%] flex justify-center items-center"
            >
              <div className="2xl:w-[70%] w-[80%] h-[90%] relative">
                <Image
                  fill
                  src={ChooseLeftLogo}
                  alt="left-choose-logo"
                  loading="lazy"
                  className="opacity-80"
                />
                <div className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
                  <div className="w-[85%] relative h-[80%] z-10 ">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "circInOut",
                        delay: 1.1,
                      }}
                      className="absolute top-[17%] w-[15%]"
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-lg font-[Kanit]">
                        Team Work
                      </h4>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: "circInOut",
                        delay: 1.6,
                      }}
                      className="absolute top-[2%] right-[1%] w-[15%]"
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-lg font-[Kanit]">
                        Diverse Skills
                      </h4>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "circInOut",
                        delay: 2.1,
                      }}
                      className="absolute top-[38%] right-[30%] w-[40%]"
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-lg font-[Kanit]">
                        Attentions To Details
                      </h4>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "circInOut",
                        delay: 2.6,
                      }}
                      className="absolute top-[55%] right-[0%] "
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-lg font-[Kanit]">
                        Happy Coustomers
                      </h4>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "circInOut",
                        delay: 3.1,
                      }}
                      className="absolute top-[70%] right-[1%] w-[15%]"
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-base font-[Kanit]">
                        Prompt Delivery
                      </h4>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "circInOut",
                        delay: 3.6,
                      }}
                      className="absolute bottom-[3%] right-[30%] w-[40%]"
                    >
                      <h4 className="text-[#121212] uppercase text-center font-[500] text-lg font-[Kanit]">
                        Excellent Services
                      </h4>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export const WhyChooseUs = () => {
  const [analyticCounter, setAnalyticCounter] = useState(0);
  const [strategicCounter, setStrategicCounter] = useState(0);
  const [inovativeCounter, setInovativeCounter] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRef2 = useRef<HTMLDivElement | null>(null);
  const elementRef3 = useRef<HTMLDivElement | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionRefTab = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    smooth: 3,
  });

  const router = useRouter();

  let scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-201.5%"]);

  let scrollXTab = useTransform(scrollYProgress, [0, 1], ["0%", "-201%"]);

  /**
   * The function uses setInterval to increment state counters for analytic, strategic, and innovative
   * values based on certain conditions.
   */
  const callBack = () => {
    const autoCounter = setInterval(() => {
      // Update timeLine state directly instead of using a separate variable
      setAnalyticCounter((prevTimeLine) => {
        // Check if timeLine is less than 100 before incrementing
        if (prevTimeLine < 95) {
          return prevTimeLine + 1;
        } else {
          // Clear interval if timeLine exceeds 100
          // clearInterval(autoCounter);
          return prevTimeLine;
        }
      });

      setStrategicCounter((previousCount) => {
        if (previousCount < 100) {
          return previousCount + 1;
        } else {
          return previousCount;
        }
      });

      setInovativeCounter((previousCount) => {
        if (previousCount < 89) {
          return previousCount + 1;
        } else {
          return previousCount;
        }
      });
    }, 50);
  };
  useInView(elementRef, callBack);
  useInView(elementRef2, callBack);
  useInView(elementRef3, callBack);

  // overflow-hidden snap-center flex-shrink-0

  return (
    <>
      <div ref={sectionRef} className="h-[400vh] relative">
        {/* desktop start */}
        <motion.div className="h-screen w-full  sticky top-0 hidden  items-center overflow-hidden md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden xl:flex">
          <motion.div
            transition={{ duration: 0.6, ease: "circInOut" }}
            style={{ x: scrollX }}
            className="w-full flex items-center snap-x snap-mandatory"
          >
            <div className="flex-shrink-0 relative w-screen h-screen overflow-hidden snap-center">
              <WhyChooseUsFirstPart />
            </div>

            <div
              ref={elementRef}
              className="h-screen w-screen flex-shrink-0 overflow-hidden snap-center"
            >
              <WhyChooseUsSecondPart
                analyticCounter={analyticCounter}
                strategicCounter={strategicCounter}
                inovativeCounter={inovativeCounter}
              />
            </div>

            <div className="h-screen w-screen flex-shrink-0 overflow-hidden snap-center">
              <WhyChooseUsThirdPart />
            </div>
          </motion.div>
        </motion.div>
        {/* desktop end */}

        {/* Tablet start */}

        <div className="h-screen w-screen sticky top-0 hidden md:flex items-center overflow-hidden lg:landscape:hidden lg:portrait:flex">
          <motion.div
            transition={{ duration: 0.6, ease: "circInOut" }}
            style={{ x: scrollXTab }}
            className="w-screen h-full flex items-center snap-x snap-mandatory "
          >
            {/* first section start */}

            <div className="w-screen flex-shrink-0 h-full relative">
              <Image src={ChooseUsBg2} alt="choose-us-bg" fill loading="lazy" />
              <div className="h-full w-[90%] mx-auto z-10 opacity-100">
                <div className="h-[40%] flex flex-col justify-center items-center gap-10">
                  <h2 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-5xl">
                    Why choose us
                  </h2>
                  <div className="flex flex-col justify-center items-center gap-3">
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-6xl uppercase">
                      analyticAL
                    </h3>
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-6xl uppercase">
                      Strategic
                    </h3>
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-6xl uppercase">
                      Inovative
                    </h3>
                  </div>
                </div>
                <div className="h-[60%] bg-green-40 flex justify-center items-center">
                  <div className="w-[80%] h-[90%] relative">
                    <Image src={ChooseLeftLogo} fill alt="logo" />
                    <div className="w-full h-full flex justify-center items-center bg-red-40 absolute top-0 left-0">
                      <div className="w-[97%] h-[97%] relative bg-yellow-40">
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "circInOut",
                            delay: 1.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] left-[5%] top-[25%]"
                        >
                          Team Work
                        </motion.h4>
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "circInOut",
                            delay: 1.6,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] right-[5%] top-[10%]"
                        >
                          Diverse Skills
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: "circInOut",
                            delay: 2.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] right-[40%] top-[55%]"
                        >
                          Attentions To Details
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 3.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] right-[6%] top-[70%]"
                        >
                          Happy Coustomers
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 4.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] right-[6%] top-[85%]"
                        >
                          Prompt Delivery
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 5.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-base font-[Kanit] right-[40%] top-[85%]"
                        >
                          Excellent Services
                        </motion.h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* first section end */}

            {/* Second section start */}

            <div
              ref={elementRef2}
              className="w-screen bg-[#F3EFE8] flex-shrink-0 h-full"
            >
              <div className="w-[90%] mx-auto h-[40%] flex flex-col justify-center items-start gap-10">
                <h3 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-5xl self-center">
                  Why choose us
                </h3>
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h4 className="text-5xl font-[Oxanium] font-[500] uppercase">
                    analytic, Strategic, Inovative
                  </h4>
                  <p className="text-lg font-[400] font-[Oxanium]">
                    Attention to details, excellent communication skills,
                    critical analysis, modern research methodologies are just a
                    few values we implement on every project to make us
                    different from other development companies.
                  </p>
                </div>
              </div>
              <div className="w-[90%] mx-auto h-[60%] flex flex-col justify-start items-center gap-8">
                <div className="w-full grid grid-cols-3 gap-3">
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="180"
                        height="180"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <h4 className="text-xl font-[Oxanium] font-[700] uppercase">
                        analytic
                      </h4>
                      <p className="text-base text-center font-[Oxanium] font-[400]">
                        Performance analysis, security, and efficiency are the
                        core reasons for each successful project.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="180"
                        height="180"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <h4 className="text-xl font-[Oxanium] font-[700] uppercase">
                        strategic
                      </h4>
                      <p className="text-base text-center font-[Oxanium] font-[400]">
                        Implementing the best design principles and strategies
                        are key factors to minimize project failures.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-3">
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="180"
                        height="180"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <h4 className="text-xl font-[Oxanium] font-[700] uppercase">
                        Inovative
                      </h4>
                      <p className="text-base text-center font-[Oxanium] font-[400]">
                        Unrelenting drive to break the status quo and develop
                        anew where few have dared to go.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 w-full">
                  <motion.div
                    initial={{ y: "130%", rotate: "180deg", opacity: 0.1 }}
                    whileInView={{
                      y: "0%",
                      rotate: "0deg",
                      opacity: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                    transition={{
                      ease: "circInOut",
                      duration: 0.8,
                      delay: 0.65,
                      times: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                    className="max-w-max "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="119"
                      height="105"
                      viewBox="0 0 119 105"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M52.5172 1.94231C52.7975 11.7024 55.1881 21.2961 59.5351 30.067C64.1701 39.419 70.9052 47.5849 79.2194 53.9327C87.5336 60.2806 97.204 64.6404 107.483 66.6747C117.122 68.5827 127.055 68.3972 136.603 66.1404L128.79 37.1278C123.717 38.2071 118.469 38.2471 113.368 37.2375C107.628 36.1014 102.227 33.6666 97.5837 30.1214C92.9404 26.5763 89.1789 22.0158 86.5902 16.7926C84.2898 12.1512 82.9704 7.09713 82.7051 1.94231H52.5172ZM139 67.5407C138.371 67.7084 137.74 67.8672 137.108 68.0172C127.271 70.3507 117.036 70.5458 107.102 68.5797C96.53 66.4873 86.5834 62.0031 78.0318 55.4739C69.4801 48.9447 62.5526 40.5456 57.7851 30.9263C53.3056 21.8882 50.8459 12.0005 50.565 1.94231C50.547 1.29552 50.5379 0.648023 50.5379 0H84.6065C84.6065 5.52574 85.884 10.9774 88.3402 15.9333C90.7965 20.8892 94.3655 25.2164 98.7714 28.5803C103.177 31.9442 108.302 34.2545 113.748 35.3325C119.195 36.4105 124.818 36.2273 130.182 34.7972L139 67.5407ZM70.7593 65.1719C81.341 65.7597 91.6449 68.7625 100.874 73.9481L84.4082 102.983C79.6533 100.311 74.3447 98.7638 68.893 98.461C63.4413 98.1582 57.9927 99.1077 52.9687 101.236C47.9446 103.365 43.4799 106.615 39.9197 110.736C36.3596 114.856 33.7995 119.737 32.4376 125L0 116.684C2.64353 106.468 7.61258 96.9949 14.5227 88.9967C21.4329 80.9985 30.099 74.6898 39.8505 70.5585C49.6021 66.4272 60.1777 64.5842 70.7593 65.1719Z"
                        fill="#C99C09"
                      />
                    </svg>
                  </motion.div>
                  <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-5 font-[Oxanium] font-[600] my-4 2xl:my-3 learMoreBTNcustomHoverEffect capitalize">
                    Learn more{" "}
                    {/* <span>
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
                </span> */}
                  </button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: "circInOut",
                      delay: 0.3,
                      staggerChildren: 0.5,
                    }}
                    className=" w-[90%] flex justify-center items-center gap-4"
                  >
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002
"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.5,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full py-1 w-[20%] 2xl:w-[15%] flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        FaceBook
                      </motion.button>
                    </Link>

                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.6,
                        }}
                        className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full py-1.5 w-[20%] 2xl:w-[15%] hoverAnimationContactBTN relative"
                      >
                        <XIcon className="text-[17px] font-[800]" />
                      </motion.button>
                    </Link>

                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.7,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full py-1 w-[20%] 2xl:w-[15%] flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        Instagram
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Second section end */}

            {/* Third section start */}

            <div className="w-screen relative bg-[#E1EAED] flex-shrink-0 h-full">
              <Image src={ChooseUsBg4} fill alt="choose-us-bg" />
              <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center">
                <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-10">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h4 className="font-[Oxanium] font-[600] text-5xl uppercase">
                      Let&apos;s Build
                    </h4>
                    <h4 className="font-[Oxanium] font-[600] text-5xl uppercase">
                      Something
                    </h4>
                    <h4 className="font-[Oxanium] font-[600] text-5xl uppercase">
                      great together!
                    </h4>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0.2, 0.6, 1] }}
                    transition={{
                      duration: 0.6,
                      ease: "backInOut",
                      delay: 0.4,
                      times: [0.2, 0.6, 1],
                    }}
                    onClick={() => router.push("/contact")}
                    className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[2.5%] font-[Oxanium] font-[400] text-base 2xl:text-lg w-36 h-36 2xl:w-40 2xl:h-40 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
                  >
                    Contact Us
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 14 13"
                        fill="none"
                        className="transition-colors duration-200 ease-in-out delay-100"
                      >
                        <path
                          d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                          // fill="#2C2C2C"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>

                <div className="flex justify-between items-center w-[90%] mx-auto mt-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: "circInOut",
                      delay: 0.3,
                      staggerChildren: 0.5,
                    }}
                    className="w-[60%] flex justify-start items-center gap-4"
                  >
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.5,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full py-1 w-[30%]  flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        FaceBook
                      </motion.button>
                    </Link>
                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.6,
                        }}
                        className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full py-1.5 w-[30%] hoverAnimationContactBTN relative"
                      >
                        <XIcon className="text-[17px] font-[800]" />
                      </motion.button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.7,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[14px] border-[1.2px] border-[#121212] rounded-full py-1 w-[30%] flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        Instagram
                      </motion.button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: "90%", rotate: "80deg" }}
                    whileInView={{ opacity: 1, x: "0%", rotate: "0deg" }}
                    transition={{
                      duration: 0.4,
                      ease: "circInOut",
                      delay: 0.2,
                      times: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="125"
                      viewBox="0 0 120 125"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.2402 1.93831C45.4817 11.6783 47.541 21.2522 51.2857 30.005C55.2784 39.3377 61.0803 47.4867 68.2424 53.8215C75.4046 60.1563 83.735 64.5071 92.5894 66.5373C100.893 68.4412 109.45 68.2562 117.674 66.004L110.944 37.0513C106.574 38.1283 102.054 38.1683 97.6592 37.1607C92.7144 36.027 88.062 33.5972 84.0621 30.0593C80.0622 26.5215 76.8219 21.9704 74.5919 16.758C72.6103 12.1262 71.4737 7.0825 71.2451 1.93831H45.2402ZM119.74 67.4015C119.198 67.5688 118.655 67.7273 118.11 67.877C109.636 70.2056 100.819 70.4003 92.2615 68.4383C83.1544 66.3502 74.5861 61.8752 67.2194 55.3595C59.8526 48.8438 53.885 40.462 49.7781 30.8625C45.9194 21.8431 43.8005 11.9758 43.5585 1.93831C43.543 1.29285 43.5352 0.646687 43.5352 0H72.883C72.883 5.51435 73.9836 10.9548 76.0994 15.9005C78.2153 20.8461 81.2899 25.1645 85.0852 28.5214C88.8806 31.8783 93.295 34.1838 97.987 35.2596C102.679 36.3354 107.523 36.1527 112.144 34.7254L119.74 67.4015ZM60.9546 65.0376C70.07 65.6241 78.9462 68.6207 86.8966 73.7956L72.7122 102.77C68.6162 100.104 64.0432 98.5602 59.3469 98.258C54.6506 97.9558 49.957 98.9034 45.6291 101.027C41.3012 103.152 37.4551 106.395 34.3883 110.507C31.3214 114.619 29.1161 119.49 27.9429 124.742L0 116.443C2.27723 106.249 6.55775 96.7949 12.5104 88.8132C18.4631 80.8315 25.9283 74.5357 34.3287 70.413C42.729 66.2903 51.8392 64.451 60.9546 65.0376Z"
                        fill="#A59D84"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Third section end */}
          </motion.div>
        </div>

        {/* Tablet end */}

        {/* Mobile Start */}

        <div className="h-screen w-screen sticky top-0 flex items-center overflow-hidden 2xl:hidden xl:hidden lg:hidden md:hidden">
          <motion.div
            transition={{ duration: 0.6, ease: "circInOut" }}
            style={{ x: scrollXTab }}
            className="w-screen h-full flex items-center snap-x snap-mandatory "
          >
            <div className="w-screen flex-shrink-0 h-full relative">
              <Image src={ChooseUsBg2} alt="choose-us-bg" fill loading="lazy" />
              <div className="h-full w-[90%] mx-auto z-10 opacity-100">
                <div className="h-[50%]  flex flex-col justify-center items-center gap-4">
                  <h2 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-2xl">
                    Why choose us
                  </h2>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl uppercase">
                      analyticAL
                    </h3>
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl uppercase">
                      Strategic
                    </h3>
                    <h3 className="text-[#B59732] font-[Oxanium] font-[500] text-5xl uppercase">
                      Inovative
                    </h3>
                  </div>
                </div>
                <div className="h-[50%]  flex justify-center items-center">
                  <div className="w-full h-[90%] relative">
                    <Image src={ChooseLeftLogo} fill alt="logo" />
                    <div className="w-full h-full flex justify-center items-center bg-red-40 absolute top-0 left-0">
                      <div className="w-[97%] h-[97%] relative bg-yellow-40">
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "circInOut",
                            delay: 1.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] left-[5%] top-[25%]"
                        >
                          Team Work
                        </motion.h4>
                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "circInOut",
                            delay: 1.6,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] right-[5%] top-[10%]"
                        >
                          Diverse Skills
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: "circInOut",
                            delay: 2.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] right-[40%] top-[55%]"
                        >
                          Attentions To Details
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 3.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] right-[6%] top-[70%]"
                        >
                          Happy Coustomers
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 4.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] right-[6%] top-[85%]"
                        >
                          Prompt Delivery
                        </motion.h4>

                        <motion.h4
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.7,
                            ease: "circInOut",
                            delay: 5.1,
                          }}
                          className="text-[#121212] absolute uppercase text-center font-[500] text-sm font-[Kanit] right-[50%] top-[85%]"
                        >
                          Excellent Services
                        </motion.h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={elementRef3}
              className="w-screen bg-[#F3EFE8] flex-shrink-0 h-full "
            >
              <div className="w-[90%]  mx-auto h-[40%]  flex flex-col justify-end items-end gap-4">
                <h3 className="text-[#121212] font-[Oxanium] uppercase font-[600] text-xl self-center">
                  Why choose us
                </h3>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h4 className="text-3xl font-[Oxanium] font-[500] uppercase">
                    analytic, Strategic, Inovative
                  </h4>
                  <p className="text-[14px] font-[400] font-[Oxanium]">
                    Attention to details, excellent communication skills,
                    critical analysis, modern research methodologies are just a
                    few values we implement on every project to make us
                    different from other development companies.
                  </p>
                </div>
              </div>
              <div className="w-[90%] relative mx-auto h-[60%] flex flex-col justify-around items-center gap-2 ">
                <div className="w-full flex flex-col justify-center items-center gap-1">
                  <div className="flex  justify-center items-center gap-2">
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <h4 className="text-lg font-[Oxanium] font-[700] uppercase">
                        analytic
                      </h4>
                      <p className="text-sm text-left font-[Oxanium] font-[400]">
                        Performance analysis, security, and efficiency are the
                        core reasons for each successful project.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex  justify-center items-center gap-2">
                    <div className="flex flex-col justify-start items-start ">
                      <h4 className="text-lg font-[Oxanium] font-[700] uppercase">
                        strategic
                      </h4>
                      <p className="text-sm text-left font-[Oxanium] font-[400]">
                        Implementing the best design principles and strategies
                        are key factors to minimize project failures.
                      </p>
                    </div>
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="100"
                        height="100"
                      />
                    </div>
                  </div>
                  <div className="flex  justify-center items-center gap-2">
                    <div className="">
                      <SVGCricel
                        percentageCount={analyticCounter}
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <h4 className="text-lg font-[Oxanium] font-[700] uppercase">
                        Inovative
                      </h4>
                      <p className="text-sm text-left font-[Oxanium] font-[400]">
                        Unrelenting drive to break the status quo and develop
                        anew where few have dared to go.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 w-full">
                  <motion.div
                    initial={{ y: "130%", rotate: "180deg", opacity: 0.1 }}
                    whileInView={{
                      y: "0%",
                      rotate: "0deg",
                      opacity: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                    transition={{
                      ease: "circInOut",
                      duration: 0.8,
                      delay: 0.65,
                      times: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                    className=" absolute bottom-28 right-0 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="119"
                      // height="105"
                      width="80"
                      height="60"
                      viewBox="0 0 100 100"
                      // viewBox="0 0 119 105"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M52.5172 1.94231C52.7975 11.7024 55.1881 21.2961 59.5351 30.067C64.1701 39.419 70.9052 47.5849 79.2194 53.9327C87.5336 60.2806 97.204 64.6404 107.483 66.6747C117.122 68.5827 127.055 68.3972 136.603 66.1404L128.79 37.1278C123.717 38.2071 118.469 38.2471 113.368 37.2375C107.628 36.1014 102.227 33.6666 97.5837 30.1214C92.9404 26.5763 89.1789 22.0158 86.5902 16.7926C84.2898 12.1512 82.9704 7.09713 82.7051 1.94231H52.5172ZM139 67.5407C138.371 67.7084 137.74 67.8672 137.108 68.0172C127.271 70.3507 117.036 70.5458 107.102 68.5797C96.53 66.4873 86.5834 62.0031 78.0318 55.4739C69.4801 48.9447 62.5526 40.5456 57.7851 30.9263C53.3056 21.8882 50.8459 12.0005 50.565 1.94231C50.547 1.29552 50.5379 0.648023 50.5379 0H84.6065C84.6065 5.52574 85.884 10.9774 88.3402 15.9333C90.7965 20.8892 94.3655 25.2164 98.7714 28.5803C103.177 31.9442 108.302 34.2545 113.748 35.3325C119.195 36.4105 124.818 36.2273 130.182 34.7972L139 67.5407ZM70.7593 65.1719C81.341 65.7597 91.6449 68.7625 100.874 73.9481L84.4082 102.983C79.6533 100.311 74.3447 98.7638 68.893 98.461C63.4413 98.1582 57.9927 99.1077 52.9687 101.236C47.9446 103.365 43.4799 106.615 39.9197 110.736C36.3596 114.856 33.7995 119.737 32.4376 125L0 116.684C2.64353 106.468 7.61258 96.9949 14.5227 88.9967C21.4329 80.9985 30.099 74.6898 39.8505 70.5585C49.6021 66.4272 60.1777 64.5842 70.7593 65.1719Z"
                        fill="#C99C09"
                      />
                    </svg>
                  </motion.div>
                  <button className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-2 font-[Oxanium] font-[600]   learMoreBTNcustomHoverEffect capitalize">
                    Learn more{" "}
                    {/* <span>
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
                </span> */}
                  </button>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: "circInOut",
                      delay: 0.3,
                      staggerChildren: 0.5,
                    }}
                    className=" w-full flex justify-center items-center gap-2"
                  >
                    <motion.button
                      initial={{ y: "60%" }}
                      whileInView={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        ease: "circInOut",
                        delay: 0.5,
                      }}
                      className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[12px] border-[1.2px] border-[#121212] rounded-full py-1 w-[25%]  flex justify-center items-center hoverAnimationContactBTN relative"
                    >
                      FaceBook
                    </motion.button>
                    <motion.button
                      initial={{ y: "60%" }}
                      whileInView={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        ease: "circInOut",
                        delay: 0.6,
                      }}
                      className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full py-1.5 w-[25%]  hoverAnimationContactBTN relative"
                    >
                      <XIcon className="text-[15px] font-[800]" />
                    </motion.button>
                    <motion.button
                      initial={{ y: "60%" }}
                      whileInView={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        ease: "circInOut",
                        delay: 0.7,
                      }}
                      className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[12px] border-[1.2px] border-[#121212] rounded-full py-1 w-[25%]  flex justify-center items-center hoverAnimationContactBTN relative"
                    >
                      Instagram
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="w-screen relative bg-[#E1EAED] flex-shrink-0 h-full">
              <Image src={ChooseUsBg4} fill alt="choose-us-bg" />
              <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center">
                <div className="w-[90%] mx-auto flex flex-col justify-center items-center gap-6">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h4 className="font-[Oxanium] font-[600] text-4xl uppercase">
                      Let&apos;s Build
                    </h4>
                    <h4 className="font-[Oxanium] font-[600] text-4xl uppercase">
                      Something
                    </h4>
                    <h4 className="font-[Oxanium] font-[600] text-4xl uppercase">
                      great together!
                    </h4>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0.2, 0.6, 1] }}
                    transition={{
                      duration: 0.6,
                      ease: "backInOut",
                      delay: 0.4,
                      times: [0.2, 0.6, 1],
                    }}
                    onClick={() => router.push("/contact")}
                    className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[2.5%] font-[Oxanium] font-[400] text-base  w-36 h-36  border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
                  >
                    Contact Us
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 14 13"
                        fill="none"
                        className="transition-colors duration-200 ease-in-out delay-100"
                      >
                        <path
                          d="M3.20485 0V1.25596H11.1597L0.67749 11.6742L1.56838 12.5596L12.0506 2.14142V10.0477H13.3143V0H3.20485Z"
                          // fill="#2C2C2C"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>

                <div className="flex flex-col justify-between items-center gap-6 w-[90%] mx-auto mt-5">
                  <motion.div
                    initial={{ opacity: 0, x: "90%", rotate: "80deg" }}
                    whileInView={{ opacity: 1, x: "0%", rotate: "0deg" }}
                    transition={{
                      duration: 0.4,
                      ease: "circInOut",
                      delay: 0.2,
                      times: [0.2, 0.4, 0.6, 0.8, 1],
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="105"
                      viewBox="0 0 120 125"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.2402 1.93831C45.4817 11.6783 47.541 21.2522 51.2857 30.005C55.2784 39.3377 61.0803 47.4867 68.2424 53.8215C75.4046 60.1563 83.735 64.5071 92.5894 66.5373C100.893 68.4412 109.45 68.2562 117.674 66.004L110.944 37.0513C106.574 38.1283 102.054 38.1683 97.6592 37.1607C92.7144 36.027 88.062 33.5972 84.0621 30.0593C80.0622 26.5215 76.8219 21.9704 74.5919 16.758C72.6103 12.1262 71.4737 7.0825 71.2451 1.93831H45.2402ZM119.74 67.4015C119.198 67.5688 118.655 67.7273 118.11 67.877C109.636 70.2056 100.819 70.4003 92.2615 68.4383C83.1544 66.3502 74.5861 61.8752 67.2194 55.3595C59.8526 48.8438 53.885 40.462 49.7781 30.8625C45.9194 21.8431 43.8005 11.9758 43.5585 1.93831C43.543 1.29285 43.5352 0.646687 43.5352 0H72.883C72.883 5.51435 73.9836 10.9548 76.0994 15.9005C78.2153 20.8461 81.2899 25.1645 85.0852 28.5214C88.8806 31.8783 93.295 34.1838 97.987 35.2596C102.679 36.3354 107.523 36.1527 112.144 34.7254L119.74 67.4015ZM60.9546 65.0376C70.07 65.6241 78.9462 68.6207 86.8966 73.7956L72.7122 102.77C68.6162 100.104 64.0432 98.5602 59.3469 98.258C54.6506 97.9558 49.957 98.9034 45.6291 101.027C41.3012 103.152 37.4551 106.395 34.3883 110.507C31.3214 114.619 29.1161 119.49 27.9429 124.742L0 116.443C2.27723 106.249 6.55775 96.7949 12.5104 88.8132C18.4631 80.8315 25.9283 74.5357 34.3287 70.413C42.729 66.2903 51.8392 64.451 60.9546 65.0376Z"
                        fill="#A59D84"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: "circInOut",
                      delay: 0.3,
                      staggerChildren: 0.5,
                    }}
                    className="w-full flex justify-start items-center gap-2"
                  >
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100089610044002"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.5,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[12px] border-[1.2px] border-[#121212] rounded-full py-1 w-[30%]  flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        FaceBook
                      </motion.button>
                    </Link>
                    <Link target="_blank" href="https://x.com/KaltechServices">
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.6,
                        }}
                        className="font-[Kanit]  text-[#121212] text-center uppercase flex justify-center items-center  border-[1.2px] border-[#121212] rounded-full py-1.5 w-[30%] hoverAnimationContactBTN relative"
                      >
                        <XIcon className="text-[15px] font-[800]" />
                      </motion.button>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/kaltechconsultancy/"
                    >
                      <motion.button
                        initial={{ y: "60%" }}
                        whileInView={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: "circInOut",
                          delay: 0.7,
                        }}
                        className="font-[Kanit] font-[500] text-[#121212] text-center uppercase text-[12px] border-[1.2px] border-[#121212] rounded-full py-1 w-[30%] flex justify-center items-center hoverAnimationContactBTN relative"
                      >
                        Instagram
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile end */}
      </div>
    </>
  );
};
