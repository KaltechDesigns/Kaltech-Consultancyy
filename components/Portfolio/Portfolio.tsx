import React, { useState } from "react";
import Image from "next/image";
// test ....
import portfolioImg1 from "../../assets/images/portfolioImg1.png";
import portfolioImg2 from "../../assets/images/Royal1.jpg";
import portfolioImg3 from "../../assets/images/Life1.jpg";
import portfolioImg4 from "../../assets/images/joptimal1.jpg";
import portfolioImg5 from "../../assets/images/TABB1.jpg";
import portfolioImg6 from "../../assets/images/Upwealth1.jpg";
import { useAnimate } from "framer-motion";

import { useRouter } from "next/router";
import { LearnMoreBTN } from "../common/Buttons/LearnMoreBTN";

const dummyData = [
  {
    SRNO: "01",
    heading: "Bliz Services",
    description: `Bliz services is an international organization with headquarters in Canada that specializes in facilitating  immigration, work permits, both long and short stay visas, and higher education to the UK, US, and Canada. Kaltech was contracted to design and build a custom onboarding pipeline to automate and ease the application processes from document submission, authentication,  processing and official documents being granted. `,
    img: portfolioImg1,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#E6DFFF",
  },
  {
    SRNO: "02",
    heading: "ELTA HEALTHCARE",
    description: `Elta Healthcare is a medical and non-medical provider, offering assistance and support to enable its clients to maintain active and independent lives. Elta Healthcare provides services to seniors, disabled members, and people of all ages: (physical conditions and cognitive abilities) who would like to enjoy the comfort and safety of their homes while receiving assistance with care. Elta contracted Kaltech to build a fullstack application which will help to increase their brand identity by designing and developing a clean and easy to navigate website, and to design a compelling and attracting marketing campaign to show case  their services`,
    img: portfolioImg2,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#FDD",
  },
  {
    SRNO: "03",
    heading: "Insurance Life",
    description: `Insurance Life Magazine is a lifestyle magazine for insurance agents, other financial professionals and people looking for cash liquidity, leverage and control. Kaltech was contracted to design an eye catching magazine platform which will help grow it’s subscriber base.`,
    img: portfolioImg3,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#E8FFEA",
  },
  {
    SRNO: "04",
    heading: "Joptimal Agency",
    description: `JOptiman agency is a group of financial professionals and partners who help each other reach a common mission, vision and objectives. Kaltech was contracted to build their agency store front. The project was split into two phases. Building the store front where suitable applicants can join the agency to enjoy all the benefits, and interested parties who need both financial and insurance services. The second phase involves the design and building of a full custom CRM to assist all the agents perform all their business trnsactions.`,
    img: portfolioImg4,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#FFF0E8",
  },
  {
    SRNO: "05",
    heading: "TABB",
    description: ` The Tennessee Association of Blood Banks, TABB was established in 1971 as a not-for-profit organization of blood bank and transfusion medicine professionals and other individuals working in this field. They contracted Kaltech to build a simple platform where they could hold their meetings and annual conferences.`,
    img: portfolioImg5,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#ECF4FF",
  },
  {
    SRNO: "06",
    heading: "Upwealth",
    description: `UpWealth magazine is a premier magazine for entrepreneurs by entrepreneurs from small to large business owners who have mastered the art of creating and maintaining business systems. They contracted Kaltech to design and build an interactive and dynamic platform that can showcase the power and interest of business tycoons.`,
    img: portfolioImg6,
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    link: "/",
    bgColor: "#FFFFFF",
  },
];
export const Portfolio = () => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCurrentIndex = async (index: number, bgColor: string) => {
    setCurrentIndex(index);

    animate(
      "#portfolio-main-tab",
      { backgroundColor: dummyData[currentIndex - 1].bgColor },
      { duration: 0.3, ease: "circInOut", delay: 0 }
    );
    animate(
      "#portfolio-div-bg",
      { backgroundColor: bgColor },
      { duration: 0.5, ease: "backInOut", delay: 0.1 }
    );

    animate(
      "#portfolio-div-bg",
      {
        width: ["20%", "100%"],
      },
      { duration: 1, ease: "easeInOut", delay: 0.1 }
    );
    animate(
      `#imageWrapper`,
      {
        width: ["20%", "40%", "50%"],
        height: ["20%", "50%", "70%", "90%"],
        y: ["50%", "0%"],
        x: ["120%", "0%"],
      },
      { duration: 0.6, ease: "linear", delay: 0 }
    );
    animate(
      `#imageWrappers`,
      {
        x: ["50%", "0%"],
        y: ["20%", "0%"],
        width: ["50%", "100%"],
        height: ["50%", "100%"],
      },
      { duration: 0.6, ease: "linear", delay: 0.1 }
    );

    animate(
      `#title`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    animate(
      `#content`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );

    animate(
      `#Navbar`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    // animate(
    //   `#headings_${index} #nav_title`,
    //   { opacity: [0, 1] },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
    // animate(
    //   `#headings_${index} #Navbar-line`,
    //   { width: ["0%", "100%"] },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
  };

  return (
    <>
      <div className="h-screen hidden relative md:hidden xl:flex lg:landscape:flex lg:portrait:hidden 2xl:flex justify-end items-center">
        <div
          ref={scope}
          className=" w-full h-full flex items-center overflow-hidden"
        >
          <div
            id="portfolio-main-tab"
            className={` g-[${
              dummyData[currentIndex - 1].bgColor
            }] w-[80%] h-full flex justify-end items-center  flex-shrink-0 overflow-hidden`}
          >
            <div
              id="portfolio-div-bg"
              className={`h-full flex justify-end items-center py-1 w-full bg-[#E6DFFF] bg-[${
                dummyData[currentIndex - 1].bgColor
              }]`}
            >
              <div
                id="portfolio-main-tab-inner"
                className="w-[90%] h-[85%] flex flex-col justify-center items-center gap-3 2xl:gap-10 relative"
              >
                <div
                  id="title"
                  className="flex justify-between items-center w-full "
                >
                  <div>
                    <h3 className="text-[#121212] AzonixFont font-[Azonix,Oxanium] lg:text-3xl xl:text-4xl 2xl:text-5xl">
                      Our Portfolio
                    </h3>
                  </div>
                  <div className="w-[50%] bg-[#282828] h-[2px] rounded-lg" />
                </div>
                <div className="w-full h-[75%] flex justify-between items-end gap-5">
                  <div id="content" className="w-[50%] h-[90%]">
                    <h3 className="text-[#121212] font-[Oxanium] text-xl 2xl:text-3xl font-[700]">
                      {dummyData[currentIndex - 1].heading}
                    </h3>
                    <p className="text-[#2E2E2E] font-[Oxanium] lg:text-sm xl:text-sm 2xl:text-[20px] my-4 font-[400]">
                      {dummyData[currentIndex - 1].description}
                    </p>

                    {/* <div className="grid grid-cols-2 w-[80%] 2xl:w-[60%] gap-6">
                      {dummyData[currentIndex - 1].features.map((cur, id) => (
                        <div
                          key={id}
                          className="flex justify-center itemd-center py-2 gap-2 border border-[#000] rounded-full"
                        >
                          <span className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[500]">
                            +
                          </span>
                          <h4 className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[300]">
                            {cur}
                          </h4>
                        </div>
                      ))}
                    </div> */}

                    <div className="my-7">
                      <LearnMoreBTN
                        innerText="Learn More"
                        path={`${dummyData[currentIndex - 1].link}`}
                      />
                    </div>
                  </div>
                  <div id="imageWrapper" className="w-[50%] 2xl:h-[90%] xl:h-[80%] h-[75%] relative">
                    <Image
                      fill
                      src={dummyData[currentIndex - 1].img}
                      loading="lazy"
                      className="object-fill"
                      alt="portfolio-img"
                    />
                  </div>
                </div>
                <div
                  id="Navbar"
                  className="sticky left-0 w-full flex justify-center items-center"
                >
                  <div className="w-full ml-auto flex justify-start items-center">
                    {dummyData.map((cur, id) => (
                      <>
                        <div
                          key={id}
                          id={`headings_${id + 1}`}
                          onClick={() =>
                            handleCurrentIndex(id + 1, cur.bgColor)
                          }
                          className=" min-w-[15%]  flex flex-col justify-between items-start gap-2 cursor-pointer"
                        >
                          <div className="flex justify-center items-center gap-2.5 2xl:gap-5 px-2">
                            <h3 className="font-[Kanit] font-[600] text-base 2xl:text-[20px]">
                              {cur.SRNO}
                            </h3>
                            <h3
                              id="nav_title"
                              className={`font-[Kanit] text-sm 2xl:text-[20px] font-[300] ${
                                currentIndex === id + 1
                                  ? "opacity-100"
                                  : "opacity-0"
                              }  transition-all duration-300 ease-in-out`}
                            >
                              {cur.heading}
                            </h3>
                          </div>
                          <div
                            id="Navbar-line"
                            className={`bg-[#000] ${
                              currentIndex === id + 1 ? "w-[100%]" : "w-[0%]"
                            }  h-[2px] transition-all duration-300 ease-in-out`}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="hidden" id="imageWrappers"></span>
          {dummyData.slice(currentIndex).map((cur, id) => (
            <div
              key={id}
              className={`${id % 2 === 0 ? "w-[15%]" : "w-[5%]"}  h-full bg-[${
                cur.bgColor
              }] protfolioShadow flex justify-center items-center flex-shrink-0 overflow-hidden`}
            >
              <div
                className={`w-full ${
                  id % 2 === 0 ? "h-[85%]" : "h-[90%]"
                }  flex justify-end items-end`}
              >
                <div
                  className={`w-full ${
                    id % 2 === 0 ? "h-[25%]" : "h-[10%]"
                  } relative`}
                >
                  <Image
                    src={cur.img}
                    fill
                    id="imageWrappers"
                    className="ml-auto"
                    loading="lazy"
                    alt="portfolio-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioTab />
      <PortfolioMob />
    </>
  );
};

const PortfolioTab = () => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();

  const handleNext = async (index: number, bgColor: string) => {
    setCurrentIndex(index);

    animate(
      "#portfolio-main-tab",
      { backgroundColor: dummyData[currentIndex - 1].bgColor },
      { duration: 0.3, ease: "circInOut", delay: 0 }
    );
    animate(
      "#portfolio-div-bg",
      { backgroundColor: bgColor },
      { duration: 0.5, ease: "backInOut", delay: 0.1 }
    );
    animate(
      "#portfolio-div-bg",
      {
        height: ["20%", "100%"],
      },
      { duration: 1, ease: "easeInOut", delay: 0.1 }
    );
    animate(
      `#imageWrapper`,
      {
        width: ["30%", "50%", "85%", "100%"],
        height: ["30%", "50%", "85%", "100%"],
        y: ["-120%", "0%"],
        x: ["0%", "0%"],
      },
      { duration: 0.6, ease: "linear", delay: 0 }
    );
    animate(
      `#title`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    animate(
      `#content`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    animate(
      `#Navbar`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    // animate(
    //   `#navBgColor-${index}`,
    //   { background: "black" },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
    // animate(
    //   `#navTextColor-${index}`,
    //   { color: "white" },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
    animate(
      `#imageWrappers`,
      {
        x: ["50%", "0%"],
        y: ["90%", "0%"],
        width: ["50%", "100%"],
        height: ["50%", "100%"],
      },
      { duration: 0.6, ease: "linear", delay: 0.1 }
    );
  };

  return (
    <>
      <div className="h-screen hidden md:flex  lg:landscape:hidden lg:portrait:flex">
        <div
          ref={scope}
          className="flex flex-col  items-center w-full h-full overflow-hidden"
        >
          <div
            id="portfolio-main-tab"
            className="w-full h-[75%] flex flex-col justify-end items-end bg-[E6DFFF] flex-shrink-0 overflow-hidden"
          >
            <div
              id="portfolio-div-bg"
              className={`w-full h-full flex justify-end items-end flex-col bg-[${
                dummyData[currentIndex - 1].bgColor
              }]`}
            >
              <div className="h-[45%] w-[90%] mx-auto flex flex-col justify-center itemx-center gap-2.5">
                <div
                  id="title"
                  className="flex justify-between items-center gap-3"
                >
                  <h3 className="text-[#121212] font-[Oxanium] font-[700] text-4xl flex-shrink-0">
                    Our Portfolio
                  </h3>
                  <div className="flex-1 h-[2px] bg-[#282828]" />
                </div>
                <h4
                  id="title"
                  className="text-[#121212] font-[Oxanium] font-[700] text-3xl flex-shrink-0"
                >
                  {dummyData[currentIndex - 1].heading}
                </h4>
                <p
                  id="content"
                  className="text-[#2E2E2E] font-[400] font-[Oxanium] text-base"
                >
                  {dummyData[currentIndex - 1].description}
                </p>
                {/* <div id="content" className="grid grid-cols-2 gap-4 w-[60%]">
                  {dummyData[currentIndex - 1].features.map((cur, id) => (
                    <div
                      key={id}
                      className="flex justify-center items-center gap-3 border-2 border-[#000000] rounded-full py-2"
                    >
                      <span className="text-base font-[300] font-[Kanit]">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.28 6.592V4.224H0.8V3.184H3.28V0.72H4.352V3.184H6.832V4.224H4.352V6.592H3.28Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <p className="text-base font-[300] font-[Kanit] text-[#2E2E2E]">
                        {cur}
                      </p>
                    </div>
                  ))}
                </div> */}
               
                <div id="content">
                <LearnMoreBTN innerText='Learn More' path='/' />
                </div>
              </div>
              <div className="h-[52%] w-full flex justify-between items-start gap-4">
                <div id="Navbar" className="w-[15%] flex flex-col gap-3">
                  {dummyData.map((cur, id) => (
                    <div
                      onClick={() => handleNext(id + 1, cur.bgColor)}
                      key={id}
                      id={`navBgColor-${id + 1}`}
                      className={`w-full py-2 ${
                        currentIndex === id + 1 ? "bg-black" : "bg-transparent"
                      }   flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out`}
                    >
                      <h4
                        id={`navTextColor-${id + 1}`}
                        className={`
                            ${
                              currentIndex === id + 1
                                ? "text-white"
                                : "text-[#000000]/40"
                            }
                          text-xl font-[700] font-[Oxanium] transition-all duration-300 ease-in-out`}
                      >
                        {cur.SRNO}
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="h-full w-[85%] flex justify-end items-end">
                  <div id="imageWrapper" className="relative w-full h-full">
                    <Image
                      fill
                      src={dummyData[currentIndex - 1].img}
                      loading="lazy"
                      alt="portfolio-img"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="hidden" id="imageWrappers"></span>

          {dummyData.slice(currentIndex).map((cur, id) => (
            <div
              key={id}
              className={`w-full ${
                id % 2 === 0 ? "h-[15%]" : "h-[10%]"
              } h-[15] flex justify-end items-end bg-[${
                cur.bgColor
              }] flex-shrink-0 overflow-hidden`}
            >
              <div className="w-[90%] h-full ml-auto">
                <div
                  className={`h-full ${
                    id % 2 ? "w-[15%]" : "w-[25%]"
                  }  relative ml-auto`}
                >
                  <Image
                    src={cur.img}
                    fill
                    loading="lazy"
                    id="imageWrappers"
                    alt="portfolio-img"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PortfolioMob = () => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = async (index: number, bgColor: string) => {
    setCurrentIndex(index);

    animate(
      "#portfolio-main-tab",
      { backgroundColor: dummyData[currentIndex - 1].bgColor },
      { duration: 0.3, ease: "circInOut", delay: 0 }
    );
    animate(
      "#portfolio-div-bg",
      { backgroundColor: bgColor },
      { duration: 0.5, ease: "backInOut", delay: 0.1 }
    );
    animate(
      "#portfolio-div-bg",
      {
        height: ["20%", "100%"],
      },
      { duration: 1, ease: "easeInOut", delay: 0.1 }
    );
    animate(
      `#imageWrapper`,
      {
        width: ["30%", "50%", "85%", "100%"],
        height: ["30%", "50%", "85%", "100%"],
        y: ["120%", "0%"],
        x: ["20%", "0%"],
      },
      { duration: 0.6, ease: "linear", delay: 0 }
    );
    animate(
      `#title`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    animate(
      `#content`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    animate(
      `#Navbar`,
      { opacity: [0, 1] },
      { duration: 0.8, ease: "backInOut", delay: 0.6 }
    );
    // animate(
    //   `#navBgColor-${index}`,
    //   { background: "black" },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
    // animate(
    //   `#navTextColor-${index}`,
    //   { color: "white" },
    //   { duration: 1.3, ease: "backInOut", delay: 0.7 }
    // );
    animate(
      `#imageWrappers`,
      {
        x: ["50%", "0%"],
        y: ["90%", "0%"],
        width: ["50%", "100%"],
        height: ["50%", "100%"],
      },
      { duration: 0.6, ease: "linear", delay: 0.1 }
    );
  };
  return (
    <>
      <div
        ref={scope}
        className="h-screen flex flex-col items-center overflow-hidden w-screen 2xl:hidden xl:hidden lg:hidden md:hidden"
      >
        <div
          id="portfolio-main-tab"
          className=" flex-shrink-0 w-full h-[90%] flex justify-center items-center overflow-hidden"
        >
          <div
            id="portfolio-div-bg"
            className="flex justify-center items-end w-full h-full bg-[#E6DFFF] mt-auto overflow-hidden"
          >
            <div className="w-[90%] h-[90%] flex flex-col justify-between ">
              <div className="w-full h-[60%] flex flex-col justify-start items-start gap-1">
                <div
                  id="title"
                  className="flex justify-between items-center gap-3 w-full"
                >
                  <h3 className="text-[#121212] font-[Oxanium] font-[700] text-3xl flex-shrink-0">
                    Our Portfolio
                  </h3>
                  <div className="flex-1 h-[2px] bg-[#282828]" />
                </div>
                <h4
                  id="title"
                  className="text-[#121212] self-start font-[Oxanium] font-[700] text-[17px] flex-shrink-0"
                >
                  {dummyData[currentIndex - 1].heading}
                </h4>
                <p
                  id="content"
                  className="text-[#2E2E2E]  font-[400] font-[Oxanium] text-[12px] my-0"
                >
                  {dummyData[currentIndex - 1].description}
                </p>
                {/* <div id="content" className="grid grid-cols-2 gap-2 w-full">
                  {dummyData[currentIndex - 1].features.map((cur, id) => (
                    <>
                      <div
                        key={id}
                        className="flex justify-center items-center gap-3 border-2 border-[#000000] rounded-full py-1"
                      >
                        <span className="text-base font-[300] font-[Kanit]">
                          <svg
                            width="7"
                            height="7"
                            viewBox="0 0 7 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.28 6.592V4.224H0.8V3.184H3.28V0.72H4.352V3.184H6.832V4.224H4.352V6.592H3.28Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <p className="text-base font-[300] font-[Kanit] text-[#2E2E2E]">
                          {cur}
                        </p>
                      </div>
                    </>
                  ))}
                </div> */}

                {/* <button
                  id="content"
                  onClick={() =>
                    router.push(`/${dummyData[currentIndex - 1].link}`)
                  }
                  className="flex justify-center items-center gap-3 cursor-pointer bg-[#000] rounded-full w-full text-[#FFF] py-1.5 font-[Oxanium] font-[600] mt-1  learMoreBTNcustomHoverEffect capitalize text-base"
                >
                  Learn more{" "}
                </button> */}
                <LearnMoreBTN innerText='Learn More' path='/' />

                <div id="Navbar" className="w-full flex my-2">
                  {dummyData.map((cur, id) => (
                    <div
                      key={id}
                      id={`navBgColor-${id + 1}`}
                      onClick={() => handleNext(id + 1, cur.bgColor)}
                      className={`w-full py-2 ${
                        currentIndex === id + 1 ? "bg-black" : "bg-transparent"
                      }  flex justify-center items-center cursor-pointer border-b border-black`}
                    >
                      <h4
                        id={`navTextColor-${id + 1}`}
                        className={`${
                          currentIndex === id + 1
                            ? "text-white"
                            : "text-[#000000]/40"
                        }  text-base font-[700] font-[Oxanium]`}
                      >
                        {cur.SRNO}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[35%] w-full flex justify-end items-end">
                <div
                  id="imageWrapper"
                  className="w-full h-full relative mt-auto "
                >
                  <Image
                    fill
                    src={dummyData[currentIndex - 1].img}
                    loading="lazy"
                    alt="portfolio-img"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span id="imageWrappers" className="hidden" />
        {dummyData.slice(currentIndex).map((cur, id) => (
          <>
            <div
              key={id}
              className={`w-full bg-[${cur.bgColor}] flex-shrink-0 h-[10%] flex justify-center items-center overflow-hidden`}
            >
              <div className="w-[90%] h-full flex justify-end items-end">
                <div className="h-full w-[25%] flex justify-end items-end  ml-auto">
                  <div id="imageWrappers" className="relative w-full h-full">
                    <Image
                      src={cur.img}
                      fill
                      loading="lazy"
                      alt="portfolio-img"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
