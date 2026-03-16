'use client'

import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

function page() {

  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
  });

  const scale = useTransform(scrollY, [200, 600], [1, 6]);

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <div className={`w-full h-auto relative overflow-hidden flex flex-col justify-start items-center`}>

        {/* hero section */}
        <div className={`w-full z-10 h-screen overflow-hidden fixed top-0`}>

          <div className={`w-full z-10 absolute top-[30%] lg:top-[20%] h-auto flex flex-col md:flex-row justify-between md:justify-center md:gap-5 items-center px-5`}>
            <h1 className={`text-white w-full select-none text-center md:w-auto font-ClashDisplay text-[150px] font-extrabold`}>SAP</h1>
            <div className={`absolute md:static w-full md:w-auto top-[85%]`}>
              <h1 className={`text-white select-none text-center md:text-start font-ClashDisplay text-4xl md:text-5xl font-extrabold`}>INSIDE TRACK</h1>
              <h1 className={`text-white select-none text-center md:text-start font-ClashDisplay text-4xl md:text-5xl font-extrabold`}>KOLKATA</h1>
            </div>
          </div>

          <div className={`w-1/2 lg:w-75 h-50 rounded-full blur-[70px] bg-[#ffbb00] absolute bottom-2 md:bottom-20 lg:bottom-5 right-1/2 -translate-x-1/2 left-1/2 z-10 `}></div>

          <img src="/assets/hero-texture.jpeg" className="h-full w-full z-10" />
          <img src="/assets/victoria.png" className="h-auto lg:h-1/2 lg:right-1/2 lg:-translate-x-1/2 lg:left-1/2 z-20 absolute bottom-0" />

          <span onClick={() => {setMenuVisible(!menuVisible);}} className={`fixed md:hidden top-8 right-7 z-50 text-3xl text-white`}>{menuVisible ? <RxCross1 /> : <TbMenu />}</span>
        </div>

        <div className={`w-full max-h-screen bg-[#ffbb00] z-40 duration-300 ease-in-out ${menuVisible ? "translate-y-0" : "-translate-y-full"}`}>

        </div>

        {/* main section */}
        <div className={`z-20 flex flex-col justify-start items-center w-full min-h-screen`}></div>
        <motion.div style={{scale}} className={`w-125 h-125 bg-white rounded-full z-20`}></motion.div>
      </div>
    </>
  )
}

export default page