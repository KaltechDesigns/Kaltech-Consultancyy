import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import DigitalSecImg1 from "../../../assets/images/DigitalSecImg1.png";

export const DigitalDreams = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen hidden relative overflow-x-hidden md:hidden 2xl:flex xl:flex lg:landscape:flex lg:portrait:hidden">
        <motion.div
          initial={{ opacity: 0.3, x: "-50%", y: "-50%", rotate: "-180deg" }}
          whileInView={{ opacity: 1, x: "0%", y: "0%", rotate: "0deg" }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute right-0 top-0"
        >
          <svg
            width="300"
            height="400"
            viewBox="0 0 525 578"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M94.3274 0.141181C57.9084 38.5435 30.9008 84.8756 15.4309 135.489C-0.0388986 186.103 -3.54865 239.617 5.17803 291.818C13.9047 344.019 34.6296 393.482 65.7209 436.312C96.8123 479.142 137.421 514.17 184.351 538.639C231.28 563.107 283.249 576.348 336.165 577.319C389.082 578.29 441.501 566.964 489.297 544.233C537.092 521.502 578.958 487.987 611.6 446.326C644.241 404.665 666.766 355.996 677.402 304.15L547.984 277.602C541.457 309.416 527.635 339.282 507.605 364.846C487.575 390.411 461.884 410.977 432.555 424.926C403.227 438.874 371.06 445.824 338.589 445.228C306.117 444.633 274.227 436.508 245.43 421.493C216.632 406.478 191.713 384.983 172.634 358.701C153.555 332.419 140.838 302.067 135.483 270.035C130.127 238.002 132.281 205.164 141.774 174.106C151.267 143.047 167.84 114.616 190.188 91.0508L94.3274 0.141181Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center ">
          <div className="flex flex-col justify-center items-center gap-5 mt-6 w-[95%] ">
            <motion.div
              initial={{ x: "-95%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
              // lg:landscape:w-[90%]
              className="w-[80%] xl:w-[85%]  max-h-[90%] "
            >
              <div className="max-w-[75%] flex flex-col justify-start items-start gap-2">
                {/* lg:landscape:text-5xl */}
                <h3 className="2xl:text-6xl  xl:text-[35px] font-[Oxanium] font-[700] uppercase">
                  Want to turn your Digital dreams into reality?{" "}
                </h3>
                <h3 className="text-[#000000]/50 2xl:text-6xl  xl:text-[35px] font-[Oxanium] font-[700] uppercase">
                  Contact us noW!
                </h3>
              </div>
            </motion.div>
            <div className="w-full h-full">
              <div className="w-[90%] lg:landscape:w-[92%] ml-auto flex justify-center items-start xl:gap-[60px]">
                <div className="w-[40%] flex flex-col justify-between items-start gap-5">
                  <motion.p
                    initial={{ y: "50%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "backInOut",
                      delay: 1.2,
                    }}
                    className="2xl:landscape:text-xl lg:landscape:text-lg font-[Oxanium] 2xl:font-[400] xl:font-[200]"
                  >
                    We listen, we care, we deliver. We don&apos;t sell products, we
                    provide solutions that consistently exceeds your
                    expectation.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0.2, 0.6, 1] }}
                    transition={{
                      duration: 0.6,
                      ease: "backInOut",
                      delay: 1.4,
                      times: [0.2, 0.6, 1],
                    }}
                    onClick={() => router.push("/contact")}
                    className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[2.5%] font-[Oxanium] font-[400] text-lg w-36 h-36 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
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
                <motion.div
                  initial={{ x: "95%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
                  className="relative w-[60%] h-96 -top-5 lg:landscape:top-0"
                >
                  <Image
                    fill
                    loading="lazy"
                    src={DigitalSecImg1}
                    alt="digital-mock-up"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalDreamsTab />
      <DigitalDreamsMob />
    </>
  );
};

const DigitalDreamsTab = () => {
  const router = useRouter();
  return (
    <>
      <div className=" h-scren hidden md:flex 2xl:hidden xl:hidden lg:landscape:hidden overflow-x-hidden relative">
        {/* <motion.div
          initial={{ opacity: 0.3, x: "-50%", y: "-50%", rotate: "-180deg" }}
          whileInView={{ opacity: 1, x: "0%", y: "0%", rotate: "0deg" }}
          transition={{ duration: 1.5, ease: "circInOut" }}
          className="absolute right-0 top-0"
        >
          <svg
            width="300"
            height="400"
            viewBox="0 0 525 578"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M94.3274 0.141181C57.9084 38.5435 30.9008 84.8756 15.4309 135.489C-0.0388986 186.103 -3.54865 239.617 5.17803 291.818C13.9047 344.019 34.6296 393.482 65.7209 436.312C96.8123 479.142 137.421 514.17 184.351 538.639C231.28 563.107 283.249 576.348 336.165 577.319C389.082 578.29 441.501 566.964 489.297 544.233C537.092 521.502 578.958 487.987 611.6 446.326C644.241 404.665 666.766 355.996 677.402 304.15L547.984 277.602C541.457 309.416 527.635 339.282 507.605 364.846C487.575 390.411 461.884 410.977 432.555 424.926C403.227 438.874 371.06 445.824 338.589 445.228C306.117 444.633 274.227 436.508 245.43 421.493C216.632 406.478 191.713 384.983 172.634 358.701C153.555 332.419 140.838 302.067 135.483 270.035C130.127 238.002 132.281 205.164 141.774 174.106C151.267 143.047 167.84 114.616 190.188 91.0508L94.3274 0.141181Z"
              fill="#BF9920"
            />
          </svg>
        </motion.div> */}
        <div className=" flex flex-col gap-7 justify-center items-center top-0 bottom-0 w-full h-full">
          <div className="w-[90%]">
            <motion.div
              initial={{ x: "-95%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
              className="w-full"
            >
              <div className="w-full">
                <h3 className="text-5xl font-[Oxanium] font-[700] uppercase">
                  Want to turn your Digital dreams into reality?{" "}
                </h3>
                <h3 className="text-[#000000]/50 text-5xl font-[Oxanium] font-[700] uppercase">
                  Contact us noW!
                </h3>
              </div>
            </motion.div>
            <motion.p
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "backInOut",
                delay: 1.2,
              }}
              className="text-xl font-[Oxanium] font-[400] my-3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sit amet finibus nunc. Phasellus ante dolor, luctus in lorem sit
              amet, pulvinar ultricies risus. Proin sodales rutrum nisi, eget
              ultricies urna vulputate ut. Aenean.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0.2, 0.6, 1] }}
              transition={{
                duration: 0.6,
                ease: "backInOut",
                delay: 1.4,
                times: [0.2, 0.6, 1],
              }}
              onClick={() => router.push("/contact")}
              className="text-[#2C2C2C] flex justify-center items-center gap-5 mt-[2.5%] font-[Oxanium] font-[400] text-lg w-36 h-36 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
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
          {/* <div className="w-full h-[40%]">
            <motion.div
              initial={{ x: "95%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
              className="relative w-[95%] ml-auto h-full "
            >
              <Image
                fill
                loading="lazy"
                src={DigitalSecImg1}
                alt="digital-mock-up"
              />
            </motion.div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const DigitalDreamsMob = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center my-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-[90%] flex flex-col justify-center items-start">
          <motion.div
            initial={{ x: "-95%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
            className="w-full"
          >
            <div className="w-full">
              <h3 className="text-2xl font-[Oxanium] font-[700] uppercase">
                Want to turn your Digital dreams into reality?{" "}
              </h3>
              <h3 className="text-[#000000]/50 text-2xl font-[Oxanium] font-[700] uppercase">
                Contact us noW!
              </h3>
            </div>
          </motion.div>
          <motion.p
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
              delay: 1.2,
            }}
            className="text-base font-[Oxanium] font-[400] my-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet finibus nunc. Phasellus ante dolor, luctus in lorem sit
            amet, pulvinar ultricies risus. Proin sodales rutrum nisi, eget
            ultricies urna vulputate ut. Aenean.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0.2, 0.6, 1] }}
            transition={{
              duration: 0.6,
              ease: "backInOut",
              delay: 1.4,
              times: [0.2, 0.6, 1],
            }}
            onClick={() => router.push("/contact")}
            className="text-[#2C2C2C] flex justify-center items-center gap-2.5 mt-[2.5%] font-[Oxanium] font-[400] text-base w-32 h-32 border border-[#2C2C2C]  rounded-full relative hoverAnimationContactBTN overflow-hidden z-10 transition-colors duration-200 ease-in-out delay-100"
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
    </>
  );
};
