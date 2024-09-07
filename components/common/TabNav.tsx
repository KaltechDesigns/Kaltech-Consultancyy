import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, stagger, useAnimate } from "framer-motion";

import NavLogo from "../../assets/images/BlkLogoHor.svg";

export const TabNav = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const router = useRouter();

  const handleScrollPosition = () => {
    setScrollPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
  }, []);
  return (
    <>
      <motion.div
        initial={{ y: "-55%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 0.6, ease: "circInOut" }}
        className="md:flex justify-center items-center 2xl:hidden xl:hidden lg:landscape:hidden hidden  sticky top-0 w-screen z-50"
        style={{
          backdropFilter: scrollPositionY >= 5 ? "blur(5px)" : "transparent",
          background:
            scrollPositionY >= 5 ? "rgba(255,255,255,.85)" : "transparent",
        }}
      >
        <header className="w-[90%] flex justify-between items-center px-1 py-5">
          <div
            onClick={() => router.push("/")}
            className="relative h-[40px] w-[180px] "
          >
            <Image
              fill
              src={NavLogo}
              alt="kaltech-logo"
              loading="lazy"
              className="object-fill w-full h-full"
            />
          </div>
          <nav className="w-[80%]">
            <ul className="flex justify-center items-center gap-4">
              {[
                { title: "Home", path: "/" },
                { title: "About Us", path: "/about" },
                { title: "Services", path: "/service" },
                { title: "Blog", path: "/blog" },
                { title: "Contact us", path: "/contact" },
              ].map((cur, id) => (
                <motion.div
                  initial={{ scale: 1, y: "0%" }}
                  whileHover={{ scale: 1.2, y: "-20%" }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  key={id}
                  className="cursor-pointer"
                >
                  <Link
                    className="font-[Oxanium] uppercase text-[#555] font-[400] text-lg"
                    href={cur.path}
                  >
                    {" "}
                    {cur.title}
                  </Link>
                </motion.div>
              ))}
            </ul>
          </nav>
        </header>
      </motion.div>

      <MobNav />
    </>
  );
};

const MobNav = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [scope, animate] = useAnimate();
  const router = useRouter();

  const handleScrollPosition = () => {
    setScrollPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
  }, []);

  const handleMenuAnimation = async () => {
    await animate(
      scope.current,
      { opacity: 1, zIndex: 9999 },
      { duration: 0.5, ease: "circInOut" }
    );
    animate(
      ".leftMainWrapper",
      { x: ["-50%", "0%"], opacity: [0, 1] },
      { duration: 0.5, ease: "circInOut" }
    );
    await animate(
      ".rightMainWrapper",
      { x: ["50%", "0%"], opacity: [0, 1] },
      { duration: 0.5, ease: "circInOut" }
    );

    animate(
      ".leftMainWrapper .navLinks",
      {
        opacity: [0, 1],
        x: ["-10%", "0%"],
      },
      { duration: 0.8, ease: "circInOut", delay: stagger(0.2) }
    );
  };
  const handelHideAnimateMenu = async () => {
    await animate(
      ".leftMainWrapper .navLinks",
      {
        opacity: [1, 0],
        x: ["0%", "-10%"],
      },
      { duration: 0.8, ease: "circInOut", delay: stagger(0.2) }
    );
    animate(
      ".leftMainWrapper",
      { x: ["0%", "-50%"], opacity: [1, 0] },
      { duration: 0.5, ease: "circInOut" }
    );
    await animate(
      ".rightMainWrapper",
      { x: ["0%", "50%"], opacity: [1, 0] },
      { duration: 0.5, ease: "circInOut" }
    );
    animate(
      scope.current,
      { opacity: 0, zIndex: -1 },
      { duration: 0.5, ease: "circInOut", delay: 0.3 }
    );
  };

  return (
    <>
      <motion.div
        initial={{ y: "-55%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 0.6, ease: "circInOut" }}
        style={{
          backdropFilter: scrollPositionY >= 5 ? "blur(5px)" : "transparent",
          background:
            scrollPositionY >= 5 ? "rgba(255,255,255,.5)" : "transparent",
        }}
        className=" 2xl:hidden xl:hidden lg:hidden md:hidden py-4 sticky top-0 w-screen left-0 z-50"
      >
        <header className="flex justify-between items-center w-[90%]">
          <div className="relative h-[30px] w-[160px] ">
            <Image
              fill
              src={NavLogo}
              alt="kaltech-logo"
              loading="lazy"
              className="object-fill w-full h-full"
            />
          </div>

          <div onClick={handleMenuAnimation} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <rect width="19" height="3" rx="1.5" fill="black" />
              <rect y="7" width="19" height="3" rx="1.5" fill="black" />
            </svg>
          </div>
        </header>
      </motion.div>

      <div
        ref={scope}
        className="bg-[#FFFFFF] fixed top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center -z-10 md:hidden lg:hidden xl:hidden 2xl:hidden opacity-0 "
      >
        <div className="h-full w-[80%] leftMainWrapper">
          <div className="py-4 border-b border-[#D9D9D9]">
            <div
              onClick={async () => {
                await handelHideAnimateMenu();
                router.push("/");
              }}
              className="relative h-[30px] w-[160px] "
            >
              <Image
                fill
                src={NavLogo}
                alt="kaltech-logo"
                loading="lazy"
                className="object-fill w-full h-full"
              />
            </div>
          </div>

          <div className="w-full h-[60%] flex justify-center items-center ">
            <div className="h-full w-full">
              <ul className="w-full flex flex-col justify-start items-start gap-2.5 ">
                {[
                  { path: "/", title: "Home" },
                  { path: "/about", title: "About Us" },
                  { path: "/service", title: "Services" },
                  { path: "/blog", title: "Blog" },
                  { path: "/contact", title: "Contact" },
                ].map((cur, id) => (
                  <div
                    key={id}
                    className="border-b border-[#D9D9D9] w-full px-7 py-4 navLinks opacity-100"
                  >
                    <Link
                      className="font-[Oxanium] font-[400] text-4xl lg:landscape:text-6xl text-[#121212] "
                      href={cur.path}
                    >
                      {cur.title}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[32%] relative w-full flex justify-center items-start py-4 bg-[#F2F2F2]">
            <div className="w-[85%]">
              <div className=" w-full  flex flex-col justify-center items-start gap-1">
                <h4 className="text-[#121212] font-[Oxanium] text-2xl font-[700]">
                  Get in touch
                </h4>
                <Link
                  href="/"
                  className="text-[#121212] font-[Oxanium] text-base font-[400]"
                >
                  +1(931)-266-6101
                </Link>
                <Link
                  href="/"
                  className="text-[#121212] font-[Oxanium] text-base font-[400]"
                >
                  info@kaltechdesign.com
                </Link>
                <Link
                  href="/"
                  className="text-[#121212] font-[Oxanium] text-base font-[400]"
                >
                  103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 left-[25%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="134"
                viewBox="0 0 240 174"
                fill="none"
              >
                <path
                  d="M0 174.284C1.08491e-06 161.818 2.44432 149.474 7.19339 137.957C11.9425 126.44 18.9033 115.975 27.6784 107.161C36.4535 98.3457 46.8712 91.3534 58.3364 86.5829C69.8017 81.8124 82.0901 79.357 94.5 79.357C106.91 79.357 119.198 81.8124 130.664 86.5829C142.129 91.3534 152.546 98.3457 161.322 107.161C170.097 115.975 177.058 126.44 181.807 137.957C186.556 149.474 189 161.818 189 174.284L94.5 174.284L0 174.284Z"
                  fill="#C99C09"
                />
                <ellipse
                  cx="199.998"
                  cy="40.1808"
                  rx="40"
                  ry="40.1808"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center rightMainWrapper items-center border-l border-[#D2D2D2] h-full w-[20%] ">
          <div className="flex flex-col justify-between items-center w-full h-[95%]">
            <div>
              <button onClick={handelHideAnimateMenu} className="">
                <svg
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3.84326"
                    y="-0.278076"
                    width="19"
                    height="3"
                    rx="1.5"
                    transform="rotate(45 3.84326 -0.278076)"
                    fill="black"
                  />
                  <rect
                    x="1.72168"
                    y="13.1567"
                    width="19"
                    height="3"
                    rx="1.5"
                    transform="rotate(-45 1.72168 13.1567)"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col justify-between items-center h-[40%]">
              <div className="flex flex-col justify-center items-center gap-5">
                <Link href="/" className="cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F0F0F3" />
                    <path
                      d="M18.9582 18.5938H20.7811L21.5103 15.6771H18.9582V14.2188C18.9582 13.4677 18.9582 12.7605 20.4165 12.7605H21.5103V10.3105C21.2725 10.2791 20.3749 10.2084 19.427 10.2084C17.4473 10.2084 16.0415 11.4166 16.0415 13.6355V15.6771H13.854V18.5938H16.0415V24.7917H18.9582V18.5938Z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <Link href="/" className="cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F0F0F3" />
                    <path
                      d="M10.3906 16.7101C10.3906 13.7312 10.3906 12.2414 11.3164 11.3164C12.2414 10.3906 13.7312 10.3906 16.7101 10.3906H18.2899C21.2688 10.3906 22.7586 10.3906 23.6836 11.3164C24.6094 12.2414 24.6094 13.7312 24.6094 16.7101V18.2899C24.6094 21.2688 24.6094 22.7586 23.6836 23.6836C22.7586 24.6094 21.2688 24.6094 18.2899 24.6094H16.7101C13.7312 24.6094 12.2414 24.6094 11.3164 23.6836C10.3906 22.7586 10.3906 21.2688 10.3906 18.2899V16.7101Z"
                      stroke="black"
                      stroke-width="1.45833"
                    />
                    <path
                      d="M21.0545 15.1302C21.7089 15.1302 22.2394 14.5997 22.2394 13.9453C22.2394 13.2909 21.7089 12.7604 21.0545 12.7604C20.4001 12.7604 19.8696 13.2909 19.8696 13.9453C19.8696 14.5997 20.4001 15.1302 21.0545 15.1302Z"
                      fill="black"
                    />
                    <path
                      d="M17.5002 19.8698C18.809 19.8698 19.87 18.8088 19.87 17.5C19.87 16.1912 18.809 15.1302 17.5002 15.1302C16.1914 15.1302 15.1304 16.1912 15.1304 17.5C15.1304 18.8088 16.1914 19.8698 17.5002 19.8698Z"
                      stroke="black"
                      stroke-width="1.45833"
                    />
                  </svg>
                </Link>
                <Link href="/" className="cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#F0F0F3" />
                    <path
                      d="M18.9153 16.3275L24.453 9.84375H23.1405L18.3334 15.4733L14.4922 9.84375H10.0625L15.8703 18.3575L10.0625 25.1562H11.375L16.4522 19.2106L20.5089 25.1562H24.9386L18.9153 16.3275ZM17.1183 18.4319L16.5298 17.5842L11.8475 10.8391H13.8633L17.6411 16.2827L18.2295 17.1303L23.1416 24.2069H21.1258L17.1183 18.4319Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
              <div className="rotate-180">
                <h4 className="changeWrittingMode2 text-3xl font-[Oxanium] font-[700]">
                  Follow Us
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
