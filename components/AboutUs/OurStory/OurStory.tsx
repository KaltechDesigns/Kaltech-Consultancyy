import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";

// import OurStoryBg from "../../../assets/images/OurStoryBg.png";
// import OurStoryImg1 from "../../../assets/images/OurStoryImg1.png";
// import OurStoryImg2 from "../../../assets/images/OurStoryImg2.png";
// import OurStoryImg3 from "../../../assets/images/OurStoryImg3.png";
// import OurStoryImg4 from "../../../assets/images/OurStoryImg4.png";

export const OurStory = () => {
  return (
    <>
      <div className="h-[50vh] relative overflow-hidden mt-1 hidden md:flex  lg:flex xl:flex 2xl:flex">
        <motion.div
          initial={{ x: "-95%", y: "-90%", opacity: 0 }}
          whileInView={{ x: "0%", y: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "backInOut", delay: 0.8 }}
          className="absolute top-10 left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="400"
            // width="200"
            // height="400"
            viewBox="0 0 254 435"
            fill="none"
          >
            <path
              d="M0 0.525269C67.365 0.525269 131.971 23.4783 179.605 64.335C227.239 105.192 254 160.605 254 218.385C254 276.165 227.239 331.579 179.605 372.435C131.971 413.292 67.365 436.245 -1.52588e-05 436.245L-1.52588e-05 322.451C32.1783 322.451 63.0387 311.487 85.7922 291.971C108.546 272.454 121.328 245.985 121.328 218.385C121.328 190.785 108.546 164.316 85.7922 144.8C63.0387 125.284 32.1783 114.32 -1.52588e-05 114.32L0 0.525269Z"
              fill="#F9F9F9"
            />
          </svg>
        </motion.div>

        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] h-[90%] mt-0 flex flex-col justify-center items-center gap-10">
            <div className=" flex flex-col justify-start items-start gap-4">
              <motion.h3
                initial={{ y: "-40%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "backInOut", delay: 0.4 }}
                className="AzonixFont font-[Azonix,Oxanium] 2xl:text-6xl xl:text-3xl lg:text-4xl font-[400] text-[#121212]"
              >
                Our Story
              </motion.h3>
              <motion.p
                initial={{ y: "-40%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "backInOut", delay: 0.4 }}
                className="font-[Oxanium] 2xl:text-xl xl:text-base lg:base 2xl:font-[400] xl:font-[200] text-[#555]"
              >
                Kaltech Consultancy is a powerhouse of digital creativity,
                equipped with a talented team of designers, developers,
                consultants, data analysts, engineers, and strategists. Equipped
                with over two decades of experience and a passion for
                innovation, we specialize in crafting visually stunning and
                user-centric business systems that captivate audiences from
                different business ventures. We combine our technical
                proficiency with a deep understanding of the latest industry
                trends and best practices, ensuring your business remains ahead
                of the curve.
              </motion.p>
              {/* <motion.p initial={{y:'-40%',opacity:0}} whileInView={{y:"0%",opacity:1}} transition={{duration:.6,ease:'backInOut',delay:.4}}  className="font-[Oxanium] text-xl font-[400] text-[#555] mt-4">
              Our specialized team of researchers coordinate and streamlined
              processes to break through any organizational roadblocks. We
              translate your ideas into solutions to promote your brand
              identity.
            </motion.p> */}
            </div>
            {/* <div className=" h-[70%] w-full flex justify-center items-center relative">
            <motion.div
              initial={{ y: "90%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
              className="h-[500px] w-[400px] relative"
            >
              <Image src={OurStoryImg1} fill alt="image-1" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 1 }}
              className="absolute left-[22%] h-[310px] w-[210px]"
            >
              <Image className="" fill src={OurStoryImg2} alt="image-2" />
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 1 }}
              className="absolute h-[279px] w-[351px] right-[13%] top-[40%]"
            >
              <Image fill src={OurStoryImg4} alt="image-2" />
            </motion.div>
            <motion.div
              initial={{ y: "-150%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "backInOut", delay: 1 }}
              className="absolute right-[22%] top-[15%] h-[118px] w-[197px]"
            >
              <Image fill src={OurStoryImg3} alt="image-2" />
            </motion.div>
          </div> */}
          </div>
        </div>
      </div>

      <OurStoryMob />
    </>
  );
};

const OurStoryMob = () => {
  return (
    <>
      <div className="flex justify-center items-center py-7 2xl:hidden xl:hidden lg:hidden md:hidden">
        <div className="w-[90%] flex flex-col justify-start items-start gap-3">
          <motion.h3
            initial={{ y: "-40%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "backInOut", delay: 0.4 }}
            className="AzonixFont font-[Azonix,Oxanium] text-4xl  font-[400] text-[#121212]"
          >
            Our Story
          </motion.h3>
          <motion.p
            initial={{ y: "-40%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "backInOut", delay: 0.4 }}
            className="font-[Oxanium] text-[15px] font-[400] text-[#555]"
          >
            Kaltech Consultancy is a powerhouse of digital creativity, equipped
            with a talented team of designers, developers, consultants, data
            analysts, engineers, and strategists. Equipped with over two decades
            of experience and a passion for innovation, we specialize in
            crafting visually stunning and user-centric business systems that
            captivate audiences from different business ventures. We combine our
            technical proficiency with a deep understanding of the latest
            industry trends and best practices, ensuring your business remains
            ahead of the curve.
          </motion.p>
          <motion.p
            initial={{ y: "-40%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "backInOut", delay: 0.4 }}
            className="font-[Oxanium] text-[15px] font-[400] text-[#555]"
          >
            Our specialized team of researchers coordinate and streamlined
            processes to break through any organizational roadblocks. We
            translate your ideas into solutions to promote your brand identity.
          </motion.p>
        </div>
      </div>
    </>
  );
};
