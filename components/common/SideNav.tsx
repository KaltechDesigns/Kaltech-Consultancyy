import { useRef, useEffect } from "react";
import Image from "next/image";
// import Logo2 from "../../assets/images/kaltechLogoB.svg";
// import Logo2 from "../../assets/images/kaltechLogoBlack.svg";
import { motion, useAnimate, stagger } from "framer-motion";
import Logo2 from "../../assets/images/BlkLogoVert1.svg";
import NavLogo from "../../assets/images/BlkLogoHor.svg";
import gsap from "gsap";
import Link from "next/link";
import { TabNav } from "./TabNav";

export const SideNav = () => {
  /* The code snippet you provided is creating a side navigation component in React using TypeScript.
Let's break down the functionality of the code: */
  const sideNavRef = useRef<HTMLDivElement>(null);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sideNavAnimationTimeline = gsap.timeline();
    if (!sideNavRef.current) return;

    sideNavAnimationTimeline.fromTo(
      sideNavRef.current,
      { x: "-100%" },
      { x: "0", duration: 0.4, ease: "back.inOut", scrub: 2 }
      // { duration: 0.4, ease: "back.inOut" },
    );
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
      <div
        ref={sideNavRef}
        className=" flex-col hidden fixed z-50 top-0 left-0  justify-around items-center 2xl:px-5 lg:px-2.5 h-screen border-r-2 border-[#D9D9D9] md:hidden 2xl:flex lg:landscape:flex lg:portrait:hidden"
      >
        <div className="cursor-pointer lg:h-[130px] lg:w-[30px] xl:h-[140px] xl:w-[40px] 2xl:h-[150px] 2xl:w-[50px] relative">
          <Image
            src={Logo2}
            alt="kaltech-logo"
            fill
            quality={90}
            priority={true}
          />
        </div>
        <button onClick={handleMenuAnimation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.47368 1.73684C3.47368 2.69608 2.69601 3.47368 1.73684 3.47368C0.777678 3.47368 0 2.69608 0 1.73684C0 0.777607 0.777678 0 1.73684 0C2.69601 0 3.47368 0.777607 3.47368 1.73684ZM3.47368 11C3.47368 11.9592 2.69601 12.7368 1.73684 12.7368C0.777678 12.7368 0 11.9592 0 11C0 10.0408 0.777678 9.26316 1.73684 9.26316C2.69601 9.26316 3.47368 10.0408 3.47368 11ZM1.73684 22C2.69601 22 3.47368 21.2224 3.47368 20.2632C3.47368 19.3039 2.69601 18.5263 1.73684 18.5263C0.777678 18.5263 0 19.3039 0 20.2632C0 21.2224 0.777678 22 1.73684 22ZM12.7368 1.73684C12.7368 2.69608 11.9592 3.47368 11 3.47368C10.0408 3.47368 9.26316 2.69608 9.26316 1.73684C9.26316 0.777607 10.0408 0 11 0C11.9592 0 12.7368 0.777607 12.7368 1.73684ZM11 12.7368C11.9592 12.7368 12.7368 11.9592 12.7368 11C12.7368 10.0408 11.9592 9.26316 11 9.26316C10.0408 9.26316 9.26316 10.0408 9.26316 11C9.26316 11.9592 10.0408 12.7368 11 12.7368ZM12.7368 20.2632C12.7368 21.2224 11.9592 22 11 22C10.0408 22 9.26316 21.2224 9.26316 20.2632C9.26316 19.3039 10.0408 18.5263 11 18.5263C11.9592 18.5263 12.7368 19.3039 12.7368 20.2632ZM20.2632 3.47368C21.2223 3.47368 22 2.69608 22 1.73684C22 0.777607 21.2223 0 20.2632 0C19.304 0 18.5263 0.777607 18.5263 1.73684C18.5263 2.69608 19.304 3.47368 20.2632 3.47368ZM22 11C22 11.9592 21.2223 12.7368 20.2632 12.7368C19.304 12.7368 18.5263 11.9592 18.5263 11C18.5263 10.0408 19.304 9.26316 20.2632 9.26316C21.2223 9.26316 22 10.0408 22 11ZM20.2632 22C21.2223 22 22 21.2224 22 20.2632C22 19.3039 21.2223 18.5263 20.2632 18.5263C19.304 18.5263 18.5263 19.3039 18.5263 20.2632C18.5263 21.2224 19.304 22 20.2632 22Z"
              fill="#121212"
            />
          </svg>
        </button>
        <div className="flex justify-end items-end gap-0 transformRotate">
          <h3 className="font-[Oxanium] changeWrittingMode text-right text-[#121212] font-[600] 2xl:text-[17px] lg:text-sm xl:text-base">
            +1(931)- 266-6101
          </h3>
          <p className="font-[Oxanium] changeWrittingMode text-right text-[#555] font-[300] text-[12px] 2xl:text-[14px]">
            For all enquiries call
          </p>
        </div>
      </div>
      {/* animated side nav for desktop */}
      <div
        ref={scope}
        className="fixed w-full h-full flex justify-center items-center  top-0 left-0 -z-10 opacity-0 bg-white lg:portrait:hidden"
      >
        <div className="w-[70%] h-full flex justify-center items-center leftMainWrapper opacity-0">
          <div className="w-[25%] flex flex-col justify-center items-center h-full border-r border-[#D9D9D9]">
            <div className="border border-[#D9D9D9] border-r-0 w-full h-[15%] flex justify-center items-center">
              <div className="relative 2xl:h-[35px] 2xl:w-[160px] xl:h-[30px] xl:w-[150px] lg:h-[25px] lg:w-[140px]">
                <Image
                  fill
                  src={NavLogo}
                  alt="kaltech-logo"
                  className="object-fill w-full h-full"
                  quality={90}
                  priority={true}
                />
              </div>
            </div>

            <div className="h-[60%] w-full border border-[#D9D9D9] border-r-0 flex justify-center items-center">
              <div className="flex flex-col justify-start items-start gap-3">
                <h4 className="font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700] text-[#121212]">
                  Follow Us
                </h4>
                <Link
                  className="font-[Oxanium] 2xl:text-lg xl:text-base lg:text-base font-[500] text-[#121212]"
                  href="https://www.facebook.com/profile.php?id=100089610044002"
                  target="_blank"
                >
                  Facebook
                </Link>
                <Link
                  className="font-[Oxanium] 2xl:text-lg xl:text-base lg:text-base font-[500] text-[#121212]"
                  href="https://www.instagram.com/kaltechconsultancy/"
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  className="font-[Oxanium] 2xl:text-lg xl:text-base lg:text-base font-[500] text-[#121212]"
                  href="https://x.com/KaltechServices"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M12.0988 1.19811C12.1613 1.1267 12.2091 1.04368 12.2394 0.953806C12.2698 0.863929 12.2822 0.76895 12.2758 0.674293C12.2695 0.579635 12.2446 0.487153 12.2025 0.402127C12.1604 0.3171 12.102 0.241194 12.0306 0.178742C11.9592 0.11629 11.8762 0.0685161 11.7863 0.0381472C11.6964 0.00777836 11.6014 -0.00459051 11.5068 0.0017468C11.4121 0.00808411 11.3196 0.0330036 11.2346 0.0750823C11.1496 0.117161 11.0737 0.175575 11.0112 0.246989L7.32083 4.46458L4.1887 0.288876C4.12143 0.199183 4.0342 0.126383 3.93392 0.0762435C3.83364 0.0261035 3.72306 0 3.61095 0H0.72219C0.588071 0 0.456601 0.0373478 0.342512 0.107858C0.228424 0.178369 0.136224 0.279257 0.0762438 0.399217C0.0162639 0.519176 -0.00912616 0.653469 0.00291849 0.787046C0.0149631 0.920623 0.0639667 1.04821 0.144438 1.1555L4.79317 7.35333L0.900571 11.802C0.838119 11.8734 0.790345 11.9565 0.759976 12.0463C0.729607 12.1362 0.717238 12.2312 0.723575 12.3258C0.729913 12.4205 0.754832 12.513 0.796911 12.598C0.838989 12.683 0.897403 12.7589 0.968817 12.8214C1.04023 12.8838 1.12325 12.9316 1.21312 12.962C1.303 12.9924 1.39798 13.0047 1.49264 12.9984C1.58729 12.992 1.67978 12.9671 1.7648 12.9251C1.84983 12.883 1.92574 12.8246 1.98819 12.7531L5.67858 8.53483L8.81071 12.7105C8.87798 12.8002 8.96521 12.873 9.06549 12.9232C9.16577 12.9733 9.27635 12.9994 9.38846 12.9994H12.2772C12.4113 12.9994 12.5428 12.9621 12.6569 12.8916C12.771 12.821 12.8632 12.7202 12.9232 12.6002C12.9831 12.4802 13.0085 12.3459 12.9965 12.2124C12.9844 12.0788 12.9354 11.9512 12.855 11.8439L8.20624 5.64608L12.0988 1.19811Z"
                      fill="#121212"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="h-[25%] w-full border border-[#D9D9D9] border-r-0 flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col justify-center items-start">
                <Link
                  className="font-[Oxanium] 2xl:text-lg xl:text-base lg:text-[12px] font-[400] text-[#121212]"
                  href="/"
                >
                  Terms of Services
                </Link>
                <Link
                  className="font-[Oxanium] 2xl:text-lg xl:text-base lg:text-[12px] font-[400] text-[#121212]"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[75%] h-full flex justify-center items-center">
            <div className="h-[80%] w-full">
              <ul className="w-full flex flex-col justify-start items-start gap-5 ">
                {[
                  { path: "/", title: "Home" },
                  { path: "/about", title: "About Us" },
                  { path: "/service", title: "Services" },
                  { path: "/blog", title: "Blog" },
                  { path: "/contact", title: "Contact" },
                ].map((cur, id) => (
                  <div
                    key={id}
                    className="border-b border-[#D9D9D9] w-full px-7 py-5 navLinks opacity-0"
                  >
                    <Link
                      className="font-[Oxanium] font-[400] 2xl:landscape:text-7xl xl:landscape:text-4xl  lg:landscape:text-3xl text-[#121212] "
                      href={cur.path}
                    >
                      {cur.title}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[30%] bg-[#F2F2F2] h-full border border-[#D9D9D9] border-l-0 relative rightMainWrapper opacity-0">
          <button
            onClick={handelHideAnimateMenu}
            className="absolute right-[5%] top-[3%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
            >
              <ellipse
                cx="30"
                cy="30.2757"
                rx="30"
                ry="30.1356"
                fill="#D9D9D9"
              />
              <path
                d="M21.1869 23.0459C21.2467 22.984 21.3176 22.9349 21.3956 22.9014C21.4736 22.8679 21.5573 22.8506 21.6418 22.8506C21.7263 22.8506 21.8099 22.8679 21.888 22.9014C21.966 22.9349 22.0369 22.984 22.0966 23.0459L29.9977 31.2274L37.9019 23.0459C38.0226 22.921 38.1862 22.8508 38.3568 22.8508C38.5274 22.8508 38.691 22.921 38.8116 23.0459C38.9322 23.1708 39 23.3402 39 23.5169C39 23.6935 38.9322 23.8629 38.8116 23.9878L30.9073 32.1693L38.8084 40.3542C38.929 40.4791 38.9968 40.6485 38.9968 40.8251C38.9968 41.0018 38.929 41.1712 38.8084 41.2961C38.6878 41.421 38.5241 41.4912 38.3535 41.4912C38.1829 41.4912 38.0193 41.421 37.8987 41.2961L29.9977 33.1113L22.0934 41.2928C21.9704 41.4019 21.8122 41.4588 21.6504 41.4524C21.4886 41.4459 21.3352 41.3764 21.2207 41.2579C21.1062 41.1393 21.0391 40.9804 21.0328 40.8129C21.0266 40.6453 21.0816 40.4815 21.1869 40.3542L29.088 32.1693L21.1869 23.9845C21.0672 23.8598 21 23.6911 21 23.5152C21 23.3393 21.0672 23.1706 21.1869 23.0459Z"
                fill="#121212"
              />
            </svg>
          </button>

          <div className="absolute 2xl:w-[50%] xl:w-[60%] lg:w-[60%] left-[10%] top-[15%] flex flex-col justify-center items-start gap-3">
            <h4 className="text-[#121212] font-[Oxanium] 2xl:text-2xl xl:text-xl lg:text-lg font-[700]">
              Get in touch
            </h4>
            <Link
              href="tel:+1(931)-266-6101"
              className="text-[#121212] font-[Oxanium] 2xl:text-lg xl:text-base lg:text-[12px] font-[400]"
            >
              +1(931)-266-6101
            </Link>
            <Link
              href="mailto:info@kaltechdesign.com"
              className="text-[#121212] font-[Oxanium] 2xl:text-lg xl:text-base lg:text-[12px] font-[400]"
            >
              info@kaltechdesign.com
            </Link>
            <Link
              href="/"
              className="text-[#121212] font-[Oxanium] 2xl:text-lg xl:text-base lg:text-[12px] font-[400]"
            >
              103 Stoneledge Ct, Elizabethtown, KY 42701, Kentucky, USA.
            </Link>
          </div>

          <div className="absolute bottom-0 left-[25%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="174"
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

      {/* Nav bar for Tab */}
      <TabNav />
    </>
  );
};
