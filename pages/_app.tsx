import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
