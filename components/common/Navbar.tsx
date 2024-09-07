import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import NavLogo from "../../assets/images/BlkLogoHor.svg";
import { TabNav } from "./TabNav";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const router = useRouter()

  const handleScrollPosition = () => {
    setScrollPositionY(window.scrollY);
  };
 

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);
  }, []);
  return (
    <>
      <motion.div
        initial={{ y: "-50%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 0.6, ease: "circInOut" }}
        className="justify-center items-center fixed z-50 top-0 hidden  w-full md:hidden 2xl:flex xl:flex lg:portrait:hidden lg:landscape:flex"
        style={{
          backdropFilter: scrollPositionY >= 5 ? "blur(5px)" : "transparent",
          background:
            scrollPositionY >= 5 ? "rgba(255,255,255,.85)" : "transparent",
        }}
      >
        <header className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] flex justify-between items-center px-3 py-5 ">
          <div onClick={()=>router.push('/')} className="relative h-[45px] w-[190px] xl:h-[35px]">
            <Image
              fill
              src={NavLogo}
              alt="kaltech-logo"
              loading="lazy"
              className="object-fill w-full h-full"
            />
          </div>
          <nav>
            <ul className="flex justify-center items-center gap-10">
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
                    className="font-[Oxanium] uppercase text-[#555] font-[400] text-xl xl:text-base"
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
      <TabNav />
    </>
  );
};



