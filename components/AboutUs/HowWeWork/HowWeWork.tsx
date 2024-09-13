import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useAnimate, useInView } from "framer-motion";

import HowWeWorkBg from "../../../assets/images/HowWeWorkBg.png";
import HowWeWorkBg2 from "../../../assets/images/HowWeWorkBg2.png";
import HowWeWorkImg1 from "../../../assets/images/HowWeWorkImg1.png";
import HowWeWorkImg2 from "../../../assets/images/HowWeWorkImg2.png";
import HowWeWorkImg3 from "../../../assets/images/HowWeWorkImg3.png";
import HowWeWorkImg4 from "../../../assets/images/HowWeWorkImg4.png";

export const HowWeWork = () => {
  const [scope, animate] = useAnimate();

  const handleAnimationOnMouseEnter = async (e: any, animateDiv: any) => {
    animate(
      `#${animateDiv} .imageWrapper`,
      {
        opacity: 1,
      },
      { duration: 0.6, ease: "circInOut", delay: 0.0 }
    );
    await animate(
      `#${animateDiv} .consultationContentWrapper`,
      {
        opacity: 1,
        zIndex: 10,
      },
      {
        duration: 0.8,
        ease: "backInOut",
        delay: 0.2,
      }
    );
  };

  const handleAnimationOnMouseLeave = async (e: any, animateDiv: any) => {
    animate(
      `#${animateDiv} .imageWrapper`,
      {
        opacity: 0,
      },
      { duration: 0.6, ease: "circInOut", delay: 0.0 }
    );

    await animate(
      `#${animateDiv} .consultationContentWrapper`,
      {
        opacity: 0,
        zIndex: -10,
      },
      {
        duration: 0.8,
        ease: "backInOut",
        delay: 0.2,
      }
    );
  };

  return (
    <>
      <div className="h-screen relative overflow-hidden hidden md:hidden 2xl:flex xl:flex lg:portrait:hidden lg:landscape:flex">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "backInOut", delay: 0.4 }}
          className="absolute w-full h-full"
        >
          <Image fill src={HowWeWorkBg} loading="lazy" alt="work-bg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "circInOut", delay: 0.8 }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center py-2">
            <h3 className="text-[#000] AzonixFont font-[Azonix,Oxanium] 2xl:text-6xl xl:text-3xl lg:text-4xl font-[400]">
              How we work
            </h3>
          </div>
          <div className="w-[85%] max-h-[90%] flex  justify-start items-center">
            <div
              ref={scope}
              className="flex  justify-between items-center my-[10%] w-full"
            >
              <div
                id="Consultation"
                onMouseEnter={(e) =>
                  handleAnimationOnMouseEnter(e, "Consultation")
                }
                onMouseLeave={(e) =>
                  handleAnimationOnMouseLeave(e, "Consultation")
                }
                className="w-[280px] h-[280px] xl:w-[180px] xl:h-[180px] lg:landscape:w-[220px] lg:landscape:h-[220px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffec"
              >
                <div className="absolute bg-white rounded top-[-80%] left-0 customShadow w-[500px] p-5 consultationContentWrapper opacity-0 -z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-4xl lg:landscape:text-2xl font-[700] my-2">
                      Consultation
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base lg:landscape:text-sm font-[700]">
                      We start by getting to know you and your unique needs.
                      Through comprehensive consultations, we identify your
                      goals, target audience, and specific requirements. This
                      foundational step ensures that our solutions are tailored
                      to your unique objectives.
                    </p>
                  </div>
                </div>

                <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] lg:landscape:text-7xl text-9xl font-[400]">
                  01
                </h4>
                <div>
                  <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                    <Image fill src={HowWeWorkImg1} alt="how-we-work-image-1" />
                  </div>
                </div>
              </div>

              <div
                id="Research"
                onMouseEnter={(e) => handleAnimationOnMouseEnter(e, "Research")}
                onMouseLeave={(e) => handleAnimationOnMouseLeave(e, "Research")}
                className="w-[280px] h-[280px] lg:landscape:w-[220px] lg:landscape:h-[220px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffec"
              >
                <div className="absolute bg-white rounded bottom-[-80%] left-0 customShadow w-[500px] p-5 consultationContentWrapper opacity-0 -z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-4xl lg:landscape:text-2xl font-[700] my-2">
                      Research
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base lg:landscape:text-sm font-[700]">
                      With a clear understanding of your needs, we develop a
                      strategic plan that outlines the project scope, timelines,
                      and key milestones. Our team collaborates closely with you
                      to ensure that every aspect of the strategy aligns with
                      your vision and business goals.
                    </p>
                  </div>
                </div>

                <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] lg:landscape:text-7xl text-9xl font-[400]">
                  02
                </h4>
                <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                  <Image fill src={HowWeWorkImg2} alt="how-we-work-image-1" />
                </div>
              </div>

              <div
                id="Design"
                onMouseEnter={(e) => handleAnimationOnMouseEnter(e, "Design")}
                onMouseLeave={(e) => handleAnimationOnMouseLeave(e, "Design")}
                className="w-[280px] h-[280px] lg:landscape:w-[220px] lg:landscape:h-[220px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffec"
              >
                <div className="absolute bg-white rounded top-[-80%] left-0 customShadow w-[500px] p-5 consultationContentWrapper opacity-0 -z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-4xl lg:landscape:text-2xl font-[700] my-2">
                      Design/Prototype
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base lg:landscape:text-sm font-[700]">
                      We craft innovative designs and develop solutions that
                      reflect your brand identity and resonate with your
                      audience. Utilizing the latest technologies and best
                      practices, we build robust solutions that prioritize
                      functionality, aesthetics, and user experience to create a
                      product that stands out and performs exceptionally.
                    </p>
                  </div>
                </div>

                <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] lg:landscape:text-7xl text-9xl font-[400]">
                  03
                </h4>
                <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                  <Image fill src={HowWeWorkImg3} alt="how-we-work-image-1" />
                </div>
              </div>

              <div
                id="Deployment"
                onMouseEnter={(e) =>
                  handleAnimationOnMouseEnter(e, "Deployment")
                }
                onMouseLeave={(e) =>
                  handleAnimationOnMouseLeave(e, "Deployment")
                }
                className="w-[280px] h-[280px] lg:landscape:w-[220px] lg:landscape:h-[220px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffec"
              >
                <div className="absolute bg-white rounded bottom-[-80%] right-0 customShadow w-[500px] p-5 consultationContentWrapper opacity-0 -z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-4xl lg:landscape:text-2xl font-[700] my-2">
                      Testing/Deployment
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base lg:landscape:text-sm font-[700]">
                      Before launch, we conduct thorough testing to ensure that
                      your project is fully functional, secure, and optimized
                      for performance. Our quality assurance team meticulously
                      checks every detail to deliver a flawless final product.
                    </p>
                  </div>
                </div>
                <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] lg:landscape:text-7xl text-9xl font-[400]">
                  04
                </h4>
                <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                  <Image fill src={HowWeWorkImg4} alt="how-we-work-image-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <HowWeWorkTab />
      <HowWeWorkMob />
    </>
  );
};

const HowWeWorkTab = () => {
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(mainSectionRef);
  const [scope, animate] = useAnimate();
  const inViewAnimation = async () => {
    animate(
      "#Consultation",
      { y: ["100%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      "#Research",
      { y: ["-20%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      "#Design",
      { y: ["-142%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );
    animate(
      "#Deployment",
      { y: ["-260%", "0%"] },
      { duration: 0.8, ease: "circInOut", delay: 0 }
    );

    animate(
      "#Consultation",
      { x: ["100%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );

    animate(
      "#Research",
      { x: ["-175%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );

    animate(
      "#Design",
      { x: ["100%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );

    await animate(
      "#Deployment",
      { x: ["-175%", "0%"] },
      { duration: 0.8, ease: "circInOut" }
    );

    await animate(
      ".consultationContentWrapper",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.3 }
    );

    animate(
      "#Deployment .imageWrapper",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#Design .imageWrapper",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#Research .imageWrapper",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#Consultation .imageWrapper",
      { opacity: [0, 1] },
      { duration: 0.8, ease: "circInOut", delay: 0.3 }
    );
  };

  useEffect(() => {
    inViewAnimation();
  }, [isInView]);
  return (
    <>
      <div className="h-screen relative overflow-x-hidden hidden md:flex lg:landscape:hidden 2xl:hidden xl:hidden">
        <Image src={HowWeWorkBg2} fill alt="HowWeWorkBg2" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center py-2 my-3">
            <h3 className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-6xl font-[400]">
              How we work
            </h3>
          </div>
          <div ref={mainSectionRef} className="w-full">
            <div
              ref={scope}
              className="w-[90%] flex flex-col justify-center items-center gap-10 mx-auto"
            >
              {/* consultation */}
              <div className="flex justify-between items-center">
                <div
                  id="Consultation"
                  className="w-[200px] h-[200px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffectTabs z-10"
                >
                  <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-7xl font-[400]">
                    01
                  </h4>
                  <div>
                    <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                      <Image
                        fill
                        src={HowWeWorkImg1}
                        alt="how-we-work-image-1"
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-white rounded  customShadow w-[60%] p-3 consultationContentWrapper opacity-0 z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-3xl font-[700] my-2">
                      Consultation
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base font-[700]">
                      We start by getting to know you and your unique needs.
                      Through comprehensive consultations, we identify your
                      goals, target audience, and specific requirements. This
                      foundational step ensures that our solutions are tailored
                      to your unique objectives.
                    </p>
                  </div>
                </div>
              </div>
              {/* Research */}
              <div className="flex justify-between ites-center">
                <div className=" bg-white rounded  customShadow w-[60%] p-3 consultationContentWrapper opacity-0 z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-3xl font-[700] my-2">
                      Research
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base font-[700]">
                      With a clear understanding of your needs, we develop a
                      strategic plan that outlines the project scope, timelines,
                      and key milestones. Our team collaborates closely with you
                      to ensure that every aspect of the strategy aligns with
                      your vision and business goals.
                    </p>
                  </div>
                </div>
                <div
                  id="Research"
                  // onMouseEnter={(e) =>
                  //   handleAnimationOnMouseEnter(e, "Research")
                  // }
                  // onMouseLeave={(e) =>
                  //   handleAnimationOnMouseLeave(e, "Research")
                  // }
                  className="w-[200px] h-[200px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffectTabs"
                >
                  <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-7xl font-[400]">
                    02
                  </h4>
                  <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                    <Image fill src={HowWeWorkImg2} alt="how-we-work-image-1" />
                  </div>
                </div>
              </div>

              {/* design/prototype */}
              <div className="flex justify-between items-center">
                <div
                  id="Design"
                  // onMouseEnter={(e) => handleAnimationOnMouseEnter(e, "Design")}
                  // onMouseLeave={(e) => handleAnimationOnMouseLeave(e, "Design")}
                  className="w-[200px] h-[200px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffectTabs"
                >
                  <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-7xl font-[400]">
                    03
                  </h4>
                  <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                    <Image fill src={HowWeWorkImg3} alt="how-we-work-image-1" />
                  </div>
                </div>
                <div className=" bg-white rounded  customShadow w-[60%] p-3 consultationContentWrapper opacity-0 z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-3xl font-[700] my-2">
                      Design/Prototype
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base font-[700]">
                      We craft innovative designs and develop solutions that
                      reflect your brand identity and resonate with your
                      audience. Utilizing the latest technologies and best
                      practices, we build robust solutions that prioritize
                      functionality, aesthetics, and user experience to create a
                      product that stands out and performs exceptionally.
                    </p>
                  </div>
                </div>
              </div>

              {/* testing and development */}
              <div className="flex justify-between items-center">
                <div className=" bg-white rounded  customShadow w-[60%] p-5 consultationContentWrapper opacity-0 z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-3xl font-[700] my-2">
                      Testing/Deployment
                    </h3>
                    <p className="font-[Oxanium] text-[#000] text-base font-[700]">
                      Before launch, we conduct thorough testing to ensure that
                      your project is fully functional, secure, and optimized
                      for performance. Our quality assurance team meticulously
                      checks every detail to deliver a flawless final product.
                    </p>
                  </div>
                </div>
                <div
                  id="Deployment"
                  // onMouseEnter={(e) =>
                  //   handleAnimationOnMouseEnter(e, "Deployment")
                  // }
                  // onMouseLeave={(e) =>
                  //   handleAnimationOnMouseLeave(e, "Deployment")
                  // }
                  className="w-[200px] h-[200px] rounded-full border-[8px] border-[#000] flex justify-center items-center relative afterEffectTabs"
                >
                  <h4 className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-7xl font-[400]">
                    04
                  </h4>
                  <div className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center">
                    <Image fill src={HowWeWorkImg4} alt="how-we-work-image-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HowWeWorkMob = () => {
  return (
    <>
      <div className="relative h-screen md:hidden lg:hidden xl:hidden 2xl:hidden overflow-hidden">
        <div>
          <Image fill src={HowWeWorkBg2} alt="bg-image" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-[90%] max-h-[95%] flex flex-col justify-evenly items-center py-2 gap-7">
            <h4 className="text-[#000] text-center AzonixFont font-[Azonix,Oxanium] text-4xl font-[400]">
              How We Work
            </h4>

            <div className="flex flex-col justify-center items-center gap-10 w-full ">
              {/* Consultation */}
              <motion.div
                initial={{ x: "80%", opacity: 0.3 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut" }}
                className="flex justify-center items-center w-full gap-2"
              >
                <div
                  id="Consultation"
                  className="w-[90px] h-[90px] rounded-full border-[4px] border-[#000] flex justify-center items-center relative afterEffectTabs z-10 flex-shrink-0"
                >
                  <motion.h4
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "backInOut",
                      delay: 0.4,
                    }}
                    className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-3xl font-[400]"
                  >
                    01
                  </motion.h4>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "backInOut",
                        delay: 0.6,
                      }}
                      className="absolute w-full h-full top-0 left-0 imageWrapper  flex justify-center items-center"
                    >
                      <Image
                        fill
                        src={HowWeWorkImg1}
                        alt="how-we-work-image-1"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className=" bg-white rounded  customShadow w-[90%] px-2 py-2 consultationContentWrapper z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-2xl font-[700] my-0">
                      Consultation
                    </h3>
                    {/* <p className="font-[Oxanium] text-[#000] text-[10px] font-[500]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus sit amet finibus nunc. Phasellus ante dolor,
                      luctus in lorem sit amet, pulvinar ultricies risus. Proin
                      sodales rutrum nisi.
                    </p> */}
                  </div>
                </div>
              </motion.div>

              {/* Research */}
              <motion.div
                initial={{ x: "-80%", opacity: 0.3 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.2 }}
                className="flex justify-center items-center w-full gap-2"
              >
                <div className=" bg-white rounded  customShadow w-[90%] px-2 py-2 consultationContentWrapper z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-2xl font-[700] my-0">
                      Research
                    </h3>
                  </div>
                </div>

                <div
                  id="Consultation"
                  className="w-[90px] h-[90px] rounded-full border-[4px] border-[#000] flex justify-center items-center relative afterEffectTabs z-10 flex-shrink-0"
                >
                  <motion.h4
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "backInOut",
                      delay: 0.4,
                    }}
                    className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-3xl font-[400]"
                  >
                    02
                  </motion.h4>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "backInOut",
                        delay: 0.6,
                      }}
                      className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center"
                    >
                      <Image
                        fill
                        src={HowWeWorkImg2}
                        alt="how-we-work-image-1"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* design/prototype */}
              <motion.div
                initial={{ x: "80%", opacity: 0.3 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.4 }}
                className="flex justify-center items-center w-full gap-2"
              >
                <div
                  id="Consultation"
                  className="w-[90px] h-[90px] rounded-full border-[4px] border-[#000] flex justify-center items-center relative afterEffectTabs z-10 flex-shrink-0"
                >
                  <motion.h4
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "backInOut",
                      delay: 0.6,
                    }}
                    className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-3xl font-[400]"
                  >
                    03
                  </motion.h4>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "backInOut",
                        delay: 0.8,
                      }}
                      className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center"
                    >
                      <Image
                        fill
                        src={HowWeWorkImg3}
                        alt="how-we-work-image-1"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className=" bg-white rounded  customShadow w-[90%] px-2 py-2 consultationContentWrapper z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-xl font-[700] my-0">
                      Design/Prototype
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Testing/Deployment */}
              <motion.div
                initial={{ x: "-80%", opacity: 0.3 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "backInOut", delay: 0.6 }}
                className="flex justify-center items-center w-full gap-2"
              >
                <div className=" bg-white rounded  customShadow w-[90%] px-2 py-2 consultationContentWrapper z-10">
                  <div>
                    <h3 className="font-[Oxanium] text-[#000] text-xl font-[700] my-0">
                      Testing/Deployment
                    </h3>
                  </div>
                </div>
                <div
                  id="Consultation"
                  className="w-[90px] h-[90px] rounded-full border-[4px] border-[#000] flex justify-center items-center relative afterEffectTabs z-10 flex-shrink-0"
                >
                  <motion.h4
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "backInOut",
                      delay: 0.8,
                    }}
                    className="text-[#000] AzonixFont font-[Azonix,Oxanium] text-3xl font-[400]"
                  >
                    04
                  </motion.h4>
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "backInOut",
                        delay: 1,
                      }}
                      className="absolute w-full h-full top-0 left-0 imageWrapper opacity-0 flex justify-center items-center"
                    >
                      <Image
                        fill
                        src={HowWeWorkImg4}
                        alt="how-we-work-image-1"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
