import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useAnimate, useInView } from "framer-motion";
import SplitType from "split-type";
import { gsap } from "gsap/dist/gsap";

import ArrowIcon from "../../../assets/images/Arrow.png";

// import FooterLogo from "../../../assets/images/LogoWhite.png";
import FooterLogo from "../../../assets/images/WhtLogoHor1.svg";
import Link from "next/link";
// import { useInView } from "@/hooks/useInView";

export const HomeFooter = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [scope, animate] = useAnimate();

  const isInView = useInView(textRef);

  const handleInViewAnimation = () => {
    const gsapTimeLine = gsap.timeline();
    const animateChar =
      textRef.current && new SplitType(textRef.current, { types: "chars" });

    if (animateChar?.chars) {
      gsapTimeLine.fromTo(
        animateChar.chars,
        { y: 100, opacity: 0 },
        {
          y: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          scrub: 2,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    handleInViewAnimation();
  }, [isInView]);

  // useInView(sectionRef, handleInViewAnimation);

  // const rotateAndColorChange = () => {
  //   animate(
  //     "#rotatingDiv",
  //     { transform: "rotateX(360deg)" },
  //     { duration: 0.5, ease: "easeInOut" }
  //   );
  // };

  const handleAnimation = async () => {
    // rotateAndColorChange();
    await animate(
      "#BTNAnimate #innerText",
      { y: "-350%" },
      { duration: 0.8, ease: "circInOut" }
    );
    // await animate(
    //   "#BTNAnimate #innerText-2",
    //   { transform: ["translateY(112px)", "translateY(-40px)"] },
    //   { duration: 0.8, ease: "circInOut" }
    // );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-35px)", "translateY(-200px)"] },
      { duration: 0.9, ease: "circInOut", delay: 0.3 }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(112px)", "translateY(-70px)"],
        display: ["none", "flex"],
      },
      { duration: 0.9, ease: "circInOut" }
    );
    animate(
      "#BTNAnimate #innerText-3",
      {
        color: "black",
      },
      { duration: 1.2, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(-240px) translateY(208px)",
          "translateX(0px) translateY(0px)",
        ],
        display: ["none", "flex"],
      },
      { duration: 0.3, ease: "backInOut", delay: 0, stiffness: 1, velocity: 10 }
    );
  };
  const handleAnimationOut = async () => {
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(0px) translateY(0px)",
          "translateX(-240px) translateY(208px)",
        ],
        display: ["flex", "none"],
      },
      {
        duration: 0.3,
        ease: "backInOut",
        delay: 0.1,
        stiffness: 1,
        velocity: 10,
      }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        color: "white",
      },
      { duration: 0.9, ease: "circInOut", delay: 0 }
    );

    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(-60px)", "translateY(112px)"],
        display: ["flex", "none"],
      },
      { duration: 0.9, ease: "circInOut", delay: 0.1 }
    );
    // await animate(
    //   "#BTNAnimate #innerText-2",
    //   { transform: ["translateY(-200px)", "translateY(-40px)"] },
    //   { duration: 0.9, ease: "circInOut", delay: 0.1 }
    // );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-40px)", "translateY(112px)"] },
      { duration: 0.9, ease: "circInOut", delay: 0.1 }
    );
    animate(
      "#BTNAnimate #innerText",
      { y: "0%" },
      { duration: 0.9, ease: "circInOut" }
    );
  };

  return (
    <>
      <footer
        ref={sectionRef}
        className="bg-[#121212] py-8 hidden justify-center items-center md:hidden xl:flex 2xl:flex lg:landscape:flex lg:portrait:hidden"
      >
        <div className="w-[85%]">
          <div className="flex justify-between items-center gap-3 border-b-2 border-[#2C2C2C] p-0">
            <div className="w-[40%]  flex justify-between items-start 2xl:gap-10 xl:gap-8 lg:gap-5">
              <div className="2xl:w-[60%] xl:w-[65%] lg:w-[70%] 2xl:p-5 xl:p-4 lg:p-2.5">
                <div className="2xl:h-12 h-16 w-[50%] relative">
                  <Image
                    src={FooterLogo}
                    alt="footer-logo"
                    fill
                    loading="lazy"
                  />
                </div>
                <p className="text-[#D9D9D9] font-[Oxanium] font-[400] text-md 2xl:text-base lg:mt-2 lg:text-sm mt-8 2xl:mt-14">
                  Our dedication to client success is reflected in our track
                  record of helping businesses achieve increased brand
                  visibility, higher conversion rates, and sustained growth.
                </p>
              </div>
              <div className="w-[35%]  flex flex-col justify-center items-center">
                {[
                  {
                    socialText: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100089610044002",
                  },
                  {
                    socialText: "Twitter",
                    link: "https://x.com/KaltechServices",
                  },
                  {
                    socialText: "Linkedin",
                    link: "https://www.linkedin.com/company/kaltech-designs/",
                  },
                  {
                    socialText: "Instagram",
                    link: "https://www.instagram.com/kaltechconsultancy/",
                  },
                ].map((cur, id) => (
                  <Link
                    key={id}
                    href={cur.link}
                    target="_blank"
                    className="font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400] w-[80%]  flex justify-center items-center h-20 2xl:h-24 border border-[#2C2C2C] border-b-0"
                  >
                    <motion.button
                      initial={{
                        background: "transparent",
                        color: "#FFF",
                      }}
                      whileHover={{
                        color: "#121212",
                        background: "#FFF",
                        opacity: [0.5, 1],
                      }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      className=" w-full h-full font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400]"
                    >
                      {cur.socialText}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-[70%] flex justify-between items-center ">
              <div className="w-[60%] ">
                <h3
                  ref={textRef}
                  className="font-[Oxanium] font-[700] lg:text-[60px] xl:text-[65px] 2xl:text-[85px] text-[#FFF] uppercase flex-shrink-0"
                >
                  Let’s talk
                </h3>
              </div>
              <div className="w-[30%] flex justify-center items-center ">
                <div
                  ref={scope}
                  onMouseEnter={handleAnimation}
                  onMouseLeave={handleAnimationOut}
                  className="flex justify-center items-center bg-[#E413F6] backdrop-blur-md h-[200px] w-[200px] lg:h-[180px] lg:w-[180px]  2xl:w-[200px]  2xl:h-[200px] xl:w-[200px] xl:h-[200px]  rounded-full homeFooterBTNShadow transition-all duration-500 ease-linear"
                >
                  <div
                    id="rotatingDiv"
                    className="absolute top-0 right-0 bg-[f161fe] w-[100%] h-[100%] transition-all duration-500 ease-linear"
                  />
                  <Link href="/contact">
                  <button
                    id="BTNAnimate"
                    className="font-[Open Sans] flex flex-col justify-center items-center bg-[#121212] opacity-100 text-[#FFF] w-[185px] h-[185px] lg:h-[165px] lg:w-[165px] 2xl:w-[185px] 2xl:h-[185px] xl:w-[185px] xl:h-[185px] rounded-full font-[800] overflow-hidden relative z-10"
                  >
                    <span
                      id="innerText"
                      className=" 2xl:text-4xl xl:text-3xl lg:text-2xl  mt-7"
                    >
                      Project
                    </span>
                    <span
                      id="innerText-2"
                      className="2xl:text-4xl xl:text-3xl lg:text-2xl translate-y-28"
                    >
                      Idea
                    </span>
                    <span
                      id="innerText-3"
                      className="2xl:text-4xl xl:text-3xl lg:text-2xl translate-y-28 hidden  flex-col justify-center items-center gap-3.5"
                    >
                      Get Started{" "}
                      <span
                        id="BTNbg"
                        className="-translate-x-60 translate-y-52"
                      >
                        <span className="relative h-7 w-7">
                          <Image fill src={ArrowIcon} alt="" />
                        </span>
                      </span>
                    </span>
                    <div
                      id="BTNbg"
                      className="absolute top-0 left-0 w-full h-full bg-white -z-10 -translate-x-60 translate-y-52 rounded-full"
                    />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-7 flex justify-between items-center">
            <div className="2xl:w-[20%] w-[25%] xl:w-[40%]">
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-base font-[400] text-[#FFF]">
                © 2024 | Alrights reserved.
              </p>
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-base font-[400] text-[#FFF]">
                Designed by Kaltech
              </p>
            </div>
            <div>
              <ul className="flex justify-center items-center gap-4 2xl:gap-8">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/about" },
                  { title: "Services", path: "/service" },
                  { title: "Blog", path: "/blog" },
                  { title: "Contact us", path: "/contact" },
                  { title: "Privacy Policy", path: "/privacypolicy" },
                ].map((cur, id) => (
                  <motion.div
                    key={id}
                    initial={{ scale: 1, y: "0%" }}
                    whileHover={{ scale: 1.2, y: "-20%" }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    <Link
                      className="font-[Oxanium] text-[#FFF] uppercase lg:text-[12px] xl:text-sm text-base 2xl:text-base font-[400] no-underline"
                      href={cur.path}
                    >
                      {cur.title}
                    </Link>
                  </motion.div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <HomeFooterTab />
      <HomeFooterMob />
    </>
  );
};

// #Footer Tablet
const HomeFooterTab = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const [scope, animate] = useAnimate();

  const isInView = useInView(textRef);

  const handleInViewAnimation = () => {
    const gsapTimeLine = gsap.timeline();
    const animateChar =
      textRef.current && new SplitType(textRef.current, { types: "chars" });

    if (animateChar?.chars) {
      gsapTimeLine.fromTo(
        animateChar.chars,
        { y: 100, opacity: 0 },
        {
          y: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          scrub: 2,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    handleInViewAnimation();
  }, [isInView]);

  const handleAnimation = async () => {
    // rotateAndColorChange();
    await animate(
      "#BTNAnimate #innerText",
      { y: "-350%" },
      { duration: 1.2, ease: "circInOut" }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(112px)", "translateY(-40px)"] },
      { duration: 1.2, ease: "circInOut" }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-35px)", "translateY(-200px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.8 }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(112px)", "translateY(-70px)"],
        display: ["none", "flex"],
      },
      { duration: 1.2, ease: "circInOut", delay: 0.1 }
    );
    animate(
      "#BTNAnimate #innerText-3",
      {
        color: "black",
      },
      { duration: 1.2, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(-240px) translateY(208px)",
          "translateX(0px) translateY(0px)",
        ],
        display: ["none", "flex"],
      },
      { duration: 0.3, ease: "backInOut", delay: 0, stiffness: 1, velocity: 10 }
    );
  };
  const handleAnimationOut = async () => {
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(0px) translateY(0px)",
          "translateX(-240px) translateY(208px)",
        ],
        display: ["flex", "none"],
      },
      {
        duration: 0.3,
        ease: "backInOut",
        delay: 0.3,
        stiffness: 1,
        velocity: 10,
      }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        color: "white",
      },
      { duration: 1.2, ease: "circInOut", delay: 0 }
    );

    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(-60px)", "translateY(112px)"],
        display: ["flex", "none"],
      },
      { duration: 1.2, ease: "circInOut", delay: 0.5 }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-200px)", "translateY(-40px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.8 }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-40px)", "translateY(112px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.5 }
    );
    animate(
      "#BTNAnimate #innerText",
      { y: "0%" },
      { duration: 1.2, ease: "circInOut" }
    );
  };

  return (
    <>
      <footer className="bg-[#121212] hidden md:flex text-white py-5 2xl:hidden xl:hidden lg:landscape:hidden lg:portrait:flex">
        <div>
          <div className="w-[90%] mx-auto border-l border-r border-[#2C2C2C]">
            <div className="h-28 w-64 relative mx-auto">
              <Image fill src={FooterLogo} alt="logo" />
            </div>
            <div>
              <p className="font-[Oxanium] font-[400] text-lg text-center">
                Our dedication to client success is reflected in our track
                record of helping businesses achieve increased brand visibility,
                higher conversion rates, and sustained growth.
              </p>
              <div className="w-full flex justify-center items-center mt-2">
                {[
                  {
                    socialText: "Facebook",
                    link: "https://www.facebook.com/profile.php?id=100089610044002",
                  },
                  {
                    socialText: "Twitter",
                    link: "https://x.com/KaltechServices",
                  },
                  {
                    socialText: "Linkedin",
                    link: "https://www.linkedin.com/company/kaltech-designs/",
                  },
                  {
                    socialText: "Instagram",
                    link: "https://www.instagram.com/kaltechconsultancy/",
                  },
                ].map((cur, id) => (
                  <Link
                    href={cur.link}
                    key={id}
                    target="_blank"
                    className="font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400] w-[80%]  flex justify-center items-center h-20 2xl:h-24 border border-[#2C2C2C] border-b-0"
                  >
                    <motion.button
                      initial={{
                        background: "transparent",
                        color: "#FFF",
                      }}
                      whileTap={{
                        color: "#121212",
                        background: "#FFF",
                        opacity: [0.5, 1],
                      }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      className="font-[Oxanium] lg:text-sm text-md text-[#FFF] font-[400] w-full h-full"
                    >
                      {cur.socialText}
                    </motion.button>
                  </Link>
                ))}
              </div>

              <div className="w-full py-3 flex flex-col justify-between items-center gap-3">
                <div className="w-full flex justify-center items-center">
                  <h3
                    ref={textRef}
                    className="font-[Oxanium] font-[700] text-[75px] 2xl:text-[100px] text-[#FFF] uppercase"
                  >
                    Let’s talk
                  </h3>
                </div>
                <div className="w-[30%] flex justify-center items-center ">
                  <div
                    ref={scope}
                    onMouseEnter={handleAnimation}
                    onMouseLeave={handleAnimationOut}
                    className="flex justify-center items-center bg-[#E413F6] h-[200px] w-[200px]  2xl:w-[275px]  2xl:h-[275px] rounded-full homeFooterBTNShadow "
                  >
                  <Link href='/contact'>
                    <button
                      id="BTNAnimate"
                      className="font-[Open Sans] flex flex-col justify-center items-center text-3xl 2xl:text-5xl bg-[#000000]/95 text-[#FFF] w-[185px] h-[185px] 2xl:w-[255px] 2xl:h-[255px] rounded-full font-[800] overflow-hidden relative z-10"
                    >
                      <span
                        id="innerText"
                        className="text-4xl 2xl:text-5xl xl:text-5xl mt-7"
                      >
                        Project
                      </span>
                      <span
                        id="innerText-2"
                        className="text-4xl 2xl:text-5xl xl:text-5xl translate-y-28"
                      >
                        Idea
                      </span>
                      <span
                        id="innerText-3"
                        className="text-4xl 2xl:text-5xl xl:text-5xl translate-y-28 hidden flex-col justify-center items-center gap-3.5"
                      >
                        Get Started
                        <span className="relative h-6 w-6">
                          <Image fill src={ArrowIcon} alt="" />
                        </span>
                      </span>
                      <div
                        id="BTNbg"
                        className="absolute top-0 left-0 w-full h-full bg-white -z-10 -translate-x-60 translate-y-52 rounded-full"
                      />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2C2C2C] w-full py-4 px-2">
            <div className="w-[90%] mx-auto my-3">
              <ul className="flex justify-around items-center gap-4 w-full">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/about" },
                  { title: "Services", path: "/service" },
                  { title: "Blog", path: "/blog" },
                  { title: "Contact us", path: "/contact" },
                  { title: "Privacy Policy", path: "/privacypolicy" },
                ].map((cur, id) => (
                  <motion.div
                    key={id}
                    initial={{ scale: 1, y: "0%" }}
                    whileHover={{ scale: 1.2, y: "-20%" }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    <Link
                      className="font-[Oxanium] text-[#FFF] uppercase lg:text-sm text-base 2xl:text-xl font-[400] no-underline"
                      href={cur.path}
                    >
                      {cur.title}
                    </Link>
                  </motion.div>
                ))}
              </ul>
            </div>

            <div className="w-[85%] mx-auto my-4 flex justify-between items-center">
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-lg font-[400] text-[#FFF]">
                © 2024 | Alrights reserved.
              </p>
              <p className="font-[Oxanium] lg:text-sm text-base 2xl:text-lg font-[400] text-[#FFF]">
                Designed by Kaltech
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const HomeFooterMob = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const [scope, animate] = useAnimate();

  const isInView = useInView(textRef);

  const handleInViewAnimation = () => {
    const gsapTimeLine = gsap.timeline();
    const animateChar =
      textRef.current && new SplitType(textRef.current, { types: "chars" });

    if (animateChar?.chars) {
      gsapTimeLine.fromTo(
        animateChar.chars,
        { y: 100, opacity: 0 },
        {
          y: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          scrub: 2,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    handleInViewAnimation();
  }, [isInView]);

  const handleAnimation = async () => {
    // rotateAndColorChange();
    await animate(
      "#BTNAnimate #innerText",
      { y: "-350%" },
      { duration: 1.2, ease: "circInOut" }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(112px)", "translateY(-40px)"] },
      { duration: 1.2, ease: "circInOut" }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-35px)", "translateY(-200px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.8 }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(112px)", "translateY(-60px)"],
        display: ["none", "flex"],
      },
      { duration: 1.2, ease: "circInOut", delay: 0.1 }
    );
    animate(
      "#BTNAnimate #innerText-3",
      {
        color: "black",
      },
      { duration: 1.2, ease: "circInOut", delay: 0.3 }
    );
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(-240px) translateY(208px)",
          "translateX(0px) translateY(0px)",
        ],
        display: ["none", "flex"],
      },
      { duration: 0.3, ease: "backInOut", delay: 0, stiffness: 1, velocity: 10 }
    );
  };
  const handleAnimationOut = async () => {
    animate(
      "#BTNAnimate #BTNbg",
      {
        transform: [
          "translateX(0px) translateY(0px)",
          "translateX(-240px) translateY(208px)",
        ],
        display: ["flex", "none"],
      },
      {
        duration: 0.3,
        ease: "backInOut",
        delay: 0.3,
        stiffness: 1,
        velocity: 10,
      }
    );
    await animate(
      "#BTNAnimate #innerText-3",
      {
        color: "white",
      },
      { duration: 1.2, ease: "circInOut", delay: 0 }
    );

    await animate(
      "#BTNAnimate #innerText-3",
      {
        transform: ["translateY(-60px)", "translateY(112px)"],
        display: ["flex", "none"],
      },
      { duration: 1.2, ease: "circInOut", delay: 0.5 }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-200px)", "translateY(-40px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.8 }
    );
    await animate(
      "#BTNAnimate #innerText-2",
      { transform: ["translateY(-40px)", "translateY(112px)"] },
      { duration: 1.2, ease: "circInOut", delay: 0.5 }
    );
    animate(
      "#BTNAnimate #innerText",
      { y: "0%" },
      { duration: 1.2, ease: "circInOut" }
    );
  };
  return (
    <>
      <div
        className="bg-[#121212] flex flex-col justify-center items-center w-screen h-screen 2xl:hidden
      xl:hidden lg:hidden md:hidden"
      >
        <div className="w-[90%]">
          <div className="h-16 w-52 relative mx-auto">
            <Image fill src={FooterLogo} alt="logo" />
          </div>
          <p className="font-[Oxanium] font-[400] text-white text-sm text-center my-2">
            Our dedication to client success is reflected in our track record of
            helping businesses achieve increased brand visibility, higher
            conversion rates, and sustained growth.
          </p>

          <div className="w-[90%] grid grid-cols-2 gap-0 my-4 mx-auto">
            {[
              {
                socialText: "Facebook",
                link: "https://www.facebook.com/profile.php?id=100089610044002",
              },
              {
                socialText: "Twitter",
                link: "https://x.com/KaltechServices",
              },
              {
                socialText: "Linkedin",
                link: "https://www.linkedin.com/company/kaltech-designs/",
              },
              {
                socialText: "Instagram",
                link: "https://www.instagram.com/kaltechconsultancy/",
              },
            ].map((cur, id) => (
              <Link
                href={cur.link}
                target="_blank"
                key={id}
                className="font-[Oxanium]  text-md text-[#FFF] font-[400] w-full  flex justify-center items-center h-16  border border-[#2C2C2C] border-b"
              >
                <motion.button
                  initial={{
                    background: "transparent",
                    color: "#FFF",
                  }}
                  whileTap={{
                    color: "#121212",
                    background: "#FFF",
                    opacity: [0.5, 1],
                  }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="font-[Oxanium]  text-md text-[#FFF] font-[400] w-full  
                  h-full"
                >
                  {cur.socialText}
                </motion.button>
              </Link>
            ))}
          </div>

          <div className="w-full py-3 flex flex-col justify-between items-center gap-4">
            <div className="w-full flex justify-center items-center">
              <h3
                ref={textRef}
                className="font-[Oxanium] font-[700] text-5xl  text-[#FFF] uppercase"
              >
                Let’s talk
              </h3>
            </div>
            <div className="w-[50%] flex justify-center items-center ">
              <div
                ref={scope}
                onMouseEnter={handleAnimation}
                onMouseLeave={handleAnimationOut}
                className="flex justify-center items-center bg-[#E413F6] h-[160px] w-[160px] rounded-full homeFooterBTNShadow "
              >
                <Link href='/contact'>
                <button
                  id="BTNAnimate"
                  className="font-[Open Sans] flex flex-col justify-center items-center text-3xl 2xl:text-5xl bg-[#000000]/95 text-[#FFF] w-[150px] h-[150px]  rounded-full font-[800] overflow-hidden relative z-10"
                >
                  <span id="innerText" className="text-3xl  mt-7">
                    Project
                  </span>
                  <span id="innerText-2" className="text-3xl translate-y-28">
                    Idea
                  </span>
                  <span
                    id="innerText-3"
                    className="text-3xl translate-y-28 hidden flex-col justify-center items-center gap-2.5"
                  >
                    Get Started
                    <span className="relative h-5 w-5">
                      <Image fill src={ArrowIcon} alt="" />
                    </span>
                  </span>
                  <div
                    id="BTNbg"
                    className="absolute top-0 left-0 w-full h-full bg-white -z-10 -translate-x-60 translate-y-52 rounded-full"
                  />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2C2C2C] w-full py-4 px-2 my-2">
          <div className="w-[90%] mx-auto my-3">
            <ul className="flex justify-around items-center flex-wrap gap-4 w-full">
              {[
                { title: "Home", path: "/" },
                { title: "About Us", path: "/about" },
                { title: "Services", path: "/service" },
                { title: "Blog", path: "/blog" },
                { title: "Contact us", path: "/contact" },
                { title: "Privacy Policy", path: "/privacypolicy" },
              ].map((cur, id) => (
                <motion.div
                  key={id}
                  initial={{ scale: 1, y: "0%" }}
                  whileHover={{ scale: 1.2, y: "-20%" }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  <Link
                    className="font-[Oxanium] text-[#FFF] uppercase lg:text-sm text-sm  font-[400] no-underline"
                    href={cur.path}
                  >
                    {cur.title}
                  </Link>
                </motion.div>
              ))}
            </ul>
          </div>

          <div className="w-[85%] mx-auto my-4 flex justify-between items-center">
            <p
              className="font-[Oxanium] 
               text-[12px] 2xl:text-lg font-[400] text-[#FFF]"
            >
              © 2024 | Alrights reserved.
            </p>
            <p
              className="font-[Oxanium] 
               text-[12px] 2xl:text-lg font-[400] text-[#FFF]"
            >
              Designed by Kaltech
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
