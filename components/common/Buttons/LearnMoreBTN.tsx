import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const LearnMoreBTN = ({innerText,path}:any) => {
    const router = useRouter();
  return (
    <button onClick={()=>router.push(path)} className="flex justify-center relative items-center cursor-pointer bg-[#000] rounded-full px-8 py-2 text-[#FFF]  2xl:text-base  xl:text-sm font-[Oxanium] font-[600] my-4 2xl:my-3 learMoreBTNcustomHoverEffect overflow-hidden">
          <span className="z-10">{innerText}</span>
      <span className="w-2 h-2 absolute  z-0 translate-x-0 spanEle overflow-hidden flex justify-end items-center">
        <Image
          src="/BtnArrow.png"
          height={9}
          width={9}
          alt="BtnArrow.png"
          className="ml-auto mr-[10%]"
        />
      </span>
    </button>
  );
};
