import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useAnimate } from "framer-motion";

import VictorImg from "../../../assets/images/VictorImg.jpg";
import BlumeImg from "../../../assets/images/BlumeImg1.png";
import SahilImg from "../../../assets/images/SahilImg1.png";
import SasankaImg from "../../../assets/images/SasankaImg1.png";
import OlamilekanImg from "../../../assets/images/Olamilekan.jpg";
import { useInView } from "@/hooks/useInView";

const teamList = [
  {
    image: BlumeImg,
    name: "Blume",
    position: "Lead Technical Consultant",
  },
  {
    image: SasankaImg,
    name: "Sasanka",
    position: "Lead Frontend Developer",
  },
  {
    image: SahilImg,
    name: "Sahil",
    position: "Lead UX/UI Designer",
  },
  {
    image: VictorImg,
    name: "Victor",
    position: "Strategic Consultant",
  },
  {
    image: OlamilekanImg,
    name: "Olamilekan",
    position: "Marketing Director",
  },
];

export const OurTeam = () => {
  const [scope, animate] = useAnimate();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handelanimation = async () => {
    await animate(
      scope.current,
      {
        x: ["200%", 0],
      },
      {
        duration: 1.5,
        ease: "backInOut",
        delay: 0.4,
      }
    );

    /* This part of the code is checking if the `scope.current` exists (not null or undefined). If it
    does exist, it retrieves the children elements of the `scope.current` element. Then, it iterates
    over each child element and extracts the numerical id from the element's id attribute (assuming
    the id is in the format "ID-someNumber"). */
    if (scope.current) {
      const children = scope.current.children;

      Array.from(children).forEach((item: any) => {
        const id = Number(item.id.split("-")[1]);

        if (id % 2 === 0) {
          animate(
            `#ID-${id}`,
            {
              y: "8%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        } else {
          animate(
            `#ID-${id}`,
            {
              y: "-8%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        }
      });
    }
  };

  useInView(sectionRef, handelanimation);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
        transition={{
          duration: 0.4,
          ease: "circInOut",
          times: [0.2, 0.4, 0.6, 0.8, 1],
          delay: 0.3,
        }}
        className="h-screen bg-[#121212] md:flex lg:flex xl:flex 2xl:flex flex-col justify-center items-center gap-20 overflow-x-hidden hidden"
      >
        <div className="w-[80%] flex justify-center items-center ">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backInOut" }}
            // lg:landscape:text-5xl
            className="AzonixFont font-[Azonix,Oxanium] text-center 2xl:text-6xl xl:text-3xl lg:text-3xl font-[400] text-[#FFF]"
          >
            Meet The Team
          </motion.h3>
        </div>
        <div
          ref={sectionRef}
          className="2xl:w-[90%] xl:w-[95%] lg:w-[95%] ml-auto "
        >
          <motion.div
            ref={scope}
            drag="x"
            dragConstraints={{
              left: -2000,
              right: 400,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragElastic={0.5}
            className="flex items-center w-full gap-6"
          >
            {/* customMargin */}
            {teamList.map((cur, id) => (
              <motion.div
                initial={{ filter: "grayscale(1)" }}
                whileHover={{ filter: "grayscale(0)" }}
                transition={{ ease: "circInOut", duration: 0.2 }}
                className="flex-shrink-0 cursor-grab active:cursor-grabbing selection:bg-transparent "
                key={id}
                id={`ID-${id + 1}`}
              >
                <div className="relative h-[470px] w-[360px] lg:landscape:w-[300px] lg:landscape:h-[390px]">
                  <Image fill src={cur.image} alt="neelImg" className="z-0" />
                  <div className="absolute w-full h-full bg-transparent z-10 top-0 left-0" />
                </div>
                <h4 className="font-[Oxanium] font-[500] text-xl text-[#FFF] mt-3">
                  {cur.name}
                </h4>
                <p className="font-[Oxanium] font-[400] text-[14px] text-[#999]">
                  {cur.position}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <OurTeamMob />
    </>
  );
};

const OurTeamMob = () => {
  const [scope, animate] = useAnimate();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handelanimation = async () => {
    await animate(
      scope.current,
      {
        x: ["200%", 0],
      },
      {
        duration: 1.5,
        ease: "backInOut",
        delay: 0.4,
      }
    );

    /* This part of the code is checking if the `scope.current` exists (not null or undefined). If it
    does exist, it retrieves the children elements of the `scope.current` element. Then, it iterates
    over each child element and extracts the numerical id from the element's id attribute (assuming
    the id is in the format "ID-someNumber"). */
    if (scope.current) {
      const children = scope.current.children;

      Array.from(children).forEach((item: any) => {
        const id = Number(item.id.split("-")[1]);

        if (id % 2 === 0) {
          animate(
            `#ID-${id}`,
            {
              y: "6%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        } else {
          animate(
            `#ID-${id}`,
            {
              y: "-6%",
            },
            {
              duration: 0.8,
              ease: "circInOut",
              delay: 0.6,
            }
          );
        }
      });
    }
  };

  useInView(sectionRef, handelanimation);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.2, 0.4, 0.6, 0.8, 1] }}
        transition={{
          duration: 0.4,
          ease: "circInOut",
          times: [0.2, 0.4, 0.6, 0.8, 1],
          delay: 0.3,
        }}
        className="bg-[#121212] h-screen flex flex-col justify-center items-center gap-14 md:hidden lg:hidden xl:hidden 2xl:hidden overflow-hidden"
      >
        <h3 className="AzonixFont font-[Azonix,Oxanium] text-center text-4xl font-[400] text-[#FFF]">
          Meet Out Team
        </h3>
        <div className="w-[90%]">
          <div ref={sectionRef} className="w-full">
            <motion.div
              ref={scope}
              drag="x"
              dragConstraints={{
                left: -2500,
                right: 150,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              dragElastic={0.5}
              className="flex items-center w-full gap-6"
            >
              {/* customMargin */}
              {teamList.map((cur, id) => (
                <motion.div
                  initial={{ filter: "grayscale(1)" }}
                  whileHover={{ filter: "grayscale(0)" }}
                  whileTap={{ filter: "grayscale(0)" }}
                  transition={{ ease: "circInOut", duration: 0.2 }}
                  className="flex-shrink-0 cursor-grab active:cursor-grabbing selection:bg-transparent "
                  key={id}
                  id={`ID-${id + 1}`}
                >
                  <div className="relative h-[400px] w-[310px] lg:landscape:w-[300px] lg:landscape:h-[390px]">
                    <Image fill src={cur.image} alt="neelImg" className="z-0" />
                    <div className="absolute w-full h-full bg-transparent z-10 top-0 left-0" />
                  </div>
                  <h4 className="font-[Oxanium] font-[500] text-xl text-[#FFF] mt-3">
                    {cur.name}
                  </h4>
                  <p className="font-[Oxanium] font-[400] text-[14px] text-[#999]">
                    {cur.position}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
