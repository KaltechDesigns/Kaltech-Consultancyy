import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useAnimate, useInView, stagger } from "framer-motion";

import UpwealthLogo from "../../../assets/images/upwealthLogo2.png";
import TabLogo from "../../../assets/images/TabLogo2.png";
import GentleGuardiansLogo from "../../../assets/images/GentleGuardiansLogo2.png";
import EltaLogo from "../../../assets/images/EltaLogo2.png";
import JoptimanLogo from "../../../assets/images/JoptimanLogo2.png";
import MainLogo from "../../../assets/images/MainLogo.png";
import SaveAVillageLogo from "../../../assets/images/SaveAVillageLogo2.png";
import BLizLogo from "../../../assets/images/BLizLogo2.png";
import RoyalLogo from "../../../assets/images/RoyalLogo2.png";
import KyptronixLogo from "../../../assets/images/kyptronixLogo2.png";
import InsuranceLogo from "../../../assets/images/InsuranceLogo2.png";
import PixelsLogo from "../../../assets/images/PixelsLogo2.png";
import KVLogo from "../../../assets/images/KVLogo.png";
import { useRouter } from "next/router";

const clientList = [
  UpwealthLogo,
  TabLogo,
  GentleGuardiansLogo,
  EltaLogo,
  JoptimanLogo,
  KVLogo,
  SaveAVillageLogo,
  BLizLogo,
  RoyalLogo,
  KyptronixLogo,
  InsuranceLogo,
  PixelsLogo,
];

export const WorkWithUs = () => {
  const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  const router = useRouter();

  const handelAnimation = async () => {
    animate(
      `.logos`,
      { filter: ["grayscale(1)", "grayscale(0)"], scale: [0.9, 1] },
      { duration: .7, ease: "backInOut", delay: stagger(.8) }
    );
    await animate(
      `.logos #logo-img`,
      { width:['50%','70%'] },
      { duration: .3, ease: "backInOut", delay: stagger(.8) }
    );
    await animate(
      `#logos_11`,
      { background: "#121212" },
      { duration: .7, ease: "backInOut", delay: 2.5 }
    );
    animate(
      `#logos_12`,
      { background: "#121212" },
      { duration: .7, ease: "backInOut", delay: 2 }
    );
  };

  useEffect(() => {
    handelAnimation();
  }, [isInView]);

  return (
    <>
      <div className="h-screen  justify-center items-center hidden md:flex lg:flex xl:flex 2xl:flex">
        <div
          ref={sectionRef}
          className="xl:w-[90%] lg:w-[90%] 2xl:w-[80%] md:w-[90%]  2xl:max-h-[90%] xl:max-h-[90%] lg:max-h-[90%] md:max-h-[95%] flex 2xl:flex-row xl:flex-row lg:landscape:flex-row md:flex-col md:gap-7 lg:gap-10 justify-between items-center p-3 "
        >
          <div
            ref={scope}
            className="2xl:w-[47%] lg:w-[90%] xl:w-[47%] md:w-[90%]  grid grid-cols-3 lg:portrait:w-[80%]"
          >
            {clientList.map((cur, id) => (
              <motion.div
                // initial={{ filter: "grayscale(1)" }}
                // whileHover={{ filter: "grayscale(0)" }}
                // transition={{ duration: 0.5, ease: "linear" }}
                key={id}
                id={`logos_${id + 1}`}
                className="border-[1px] border-[#E9E9E9] 2xl:h-[160px] 2xl:w-full xl:h-[120px] lg:h-[110px] md:h-[110px] lg:portrait:h-[150px] lg:portrait:w-full relative flex justify-center items-center grayscale customHoverForLastElement logos"
              >
                <Image
                  src={cur}
                  alt="clients-logo"
                  id="logo-img"
                  className="2xl:w-[70%] xl:w-[85%] lg:w-[55%] lg:portrait:w-[65%] md:w-[55%]"
                />
              </motion.div>
            ))}
          </div>

          <div className=" 2xl:w-[47%] xl:w-[47%] lg:w-full md:w-full">
            <span className="AzonixFont font-[Azonix,Oxanium] 2xl:text-[14px] xl:text-[12px] font-[400] capitalize text-[#555] border border-[#555] px-2 py-1.5 rounded-3xl ">
              Work with us
            </span>
            <h3 className="AzonixFont font-[Azonix,Oxanium] capitalize my-5 text-[#121212] xl:text-3xl lg:text-5xl 2xl:text-6xl md:text-5xl font-[400]">
              Global brands we work with!
            </h3>

            <p className="font-[Oxanium] text-[#2E2E2E] 2xl:font-[400] font-[200] md:text-lg my-4 2xl:text-lg xl:text-base lg:text-lg">
              Our specialized team of researchers coordinate and streamlined
              processes to break through any organizational roadblocks. We
              translate your ideas into solutions to promote your brand
              identity.
            </p>

            <h3 className="text-[#121212] font-[Oxanium] 2xl:text-3xl xl:text-[25px] lg:text-3xl md:text-2xl font-[600]">
              We would love to hear more about your project
            </h3>
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
              className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[3.5%] font-[Oxanium] font-[400] text-lg 2xl:w-40 xl:w-36 2xl:h-40 xl:h-36 lg:w-40 lg:h-40 md:h-36 md:w-36 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 md:text-base"
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
        </div>
      </div>

      <WorkWithUsMob />
    </>
  );
};

const WorkWithUsMob = () => {
  const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  const router = useRouter();

  const handelAnimation = async () => {
    await animate(
      `.logos`,
      { filter: ["grayscale(1)", "grayscale(0)"] },
      { duration: 1.5, ease: "backInOut", delay: stagger(0.3) }
    );
    animate(
      `#logos_11`,
      { background: "#121212" },
      { duration: 1.5, ease: "backInOut", delay: 3 }
    );
    animate(
      `#logos_12`,
      { background: "#121212" },
      { duration: 1.5, ease: "backInOut", delay: 3.2 }
    );
  };

  useEffect(() => {
    handelAnimation();
  }, [isInView]);
  return (
    <>
      <div className="h-[130vh] flex justify-center items-center md:hidden lg:hidden xl:hidden 2xl:hidden overflow-hidden">
        <div
          ref={sectionRef}
          className="w-[90%] h-[95%] flex flex-col justify-center items-center gap-7"
        >
          <div ref={scope} className="grid grid-cols-2 w-full h-[60%] ">
            {clientList.map((cur, id) => (
              <div
                className=" w-full h-full flex justify-center items-center border-[1px] border-[#E9E9E9]"
                key={id}
              >
                <div
                  className={`relative   ${
                    id == 9 ? "h-[80%] w-[50%]" : "h-[45%] w-[75%]"
                  } logos`}
                  id={`logos_${id + 1}`}
                >
                  <Image src={cur} alt="clients-logo" fill />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[40%]">
            <span className="AzonixFont font-[Azonix,Oxanium] text-base font-[400] capitalize text-[#555] border border-[#555] px-4 py-2 rounded-3xl ">
              Work with us
            </span>
            <h3 className="AzonixFont font-[Azonix,Oxanium] capitalize my-5 text-[#121212] text-4xl font-[700]">
              Global brands we work with!
            </h3>

            <p className="font-[Oxanium] text-[#2E2E2E] font-[400] text-base">
              Our specialized team of researchers coordinate and streamlined
              processes to break through any organizational roadblocks. We
              translate your ideas into solutions to promote your brand
              identity.
            </p>
            <div className="flex justify-between items-center w-full my-2">
              <h3 className="text-[#121212] font-[Oxanium] text-lg font-[800]">
                We would love to hear more about your project
              </h3>
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
                className="text-[#2C2C2C] flex justify-center items-center gap-2.5 mt-[3.5%] font-[Oxanium] font-[400] text-sm h-28 w-28 flex-shrink-0 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100 "
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
          </div>
        </div>
      </div>
    </>
  );
};
