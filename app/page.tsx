'use client'

import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
import { pastEventsList } from '@/data/pastEventsList';

function page() {

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (val) => {
    //console.log(val);
  });

  const scale = useTransform(scrollY, [200, 600], [1, 6]);
  const inverseScale = useTransform(scale, (s) => 1 / s);

  const [menuVisible, setMenuVisible] = useState(false);
  const[currentYear, setCurrentYear] = useState<string>(pastEventsList[0].title);
  const[currentYearImage, setCurrentYearImage] = useState<string | undefined>(pastEventsList[0].image);

  useEffect(() => {
    const temp = pastEventsList.find((item) => {
        return item.title === currentYear
    });

    setCurrentYearImage(temp?.image);
  }, [currentYear]);

  return (
    <>
      <div className={`w-full h-auto relative overflow-hidden flex flex-col justify-start items-center`}>

        {/* hero section */}
        <div className={`w-full z-10 h-screen overflow-hidden fixed top-0`}>

          <div className={`w-full z-10 absolute top-[30%] lg:top-[20%] h-auto flex flex-col md:flex-row justify-between md:justify-center md:gap-5 items-center px-5`}>
            <motion.h1 initial={{ y: 500, filter: "blur(20px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }} className={`text-white w-full select-none text-center md:w-auto font-ClashDisplay text-[150px] font-extrabold`}>SAP</motion.h1>
            <div className={`absolute md:static w-full md:w-auto top-[85%]`}>
              <motion.h1 initial={{ y: 500, filter: "blur(20px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }} className={`text-white select-none text-center md:text-start font-ClashDisplay text-4xl md:text-5xl font-extrabold`}>INSIDE TRACK</motion.h1>
              <motion.h1 initial={{ y: 500, filter: "blur(20px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }} className={`text-white select-none text-center md:text-start font-ClashDisplay text-4xl md:text-5xl font-extrabold`}>KOLKATA</motion.h1>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2, ease: "easeInOut" }} className={`w-1/2 lg:w-75 h-50 rounded-full blur-[70px] bg-[#ffbb00] absolute bottom-2 md:bottom-20 lg:bottom-5 xl:bottom-24 right-1/2 -translate-x-1/2 left-1/2 z-10 `}></motion.div>

          <img src="/assets/hero-texture.jpeg" className="h-full w-full z-10" />
          <motion.img initial={{ y: 100, filter: "blur(20px)" }} animate={{ y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, ease: "easeInOut" }} src="/assets/victoria.png" className="h-auto lg:h-1/2 lg:right-1/2 lg:-translate-x-1/2 lg:left-1/2 z-20 absolute bottom-0" />
        </div>

        <span onClick={() => { setMenuVisible(!menuVisible); }} className={`fixed md:hidden top-8 right-7 z-50 text-3xl text-white`}>{menuVisible ? <RxCross1 /> : <TbMenu />}</span>


        <div className={`w-full h-screen fixed top-0 bg-[#ffbb00] z-40 flex flex-col justify-start items-center pt-20 duration-500 ease-in-out ${menuVisible ? "translate-y-0" : "-translate-y-full"}`}>
          <Link href='' className={`w-[90%] text-start font-Helvetica text-black text-2xl py-4 border-b border-black`}>Home</Link>
          <Link href='' className={`w-[90%] text-start font-Helvetica text-black text-2xl py-4 border-b border-black`}>About</Link>
          <Link href='' className={`w-[90%] text-start font-Helvetica text-black text-2xl py-4 border-b border-black`}>Events</Link>
          <Link href='' className={`w-[90%] text-start font-Helvetica text-black text-2xl py-4 border-b border-black`}>Certificates</Link>
        </div>

        {/* main section */}
        <div className={`z-20 relative flex flex-col justify-start items-center w-full h-auto`}>

          <div className='h-screen'></div>
          <motion.div style={{ scale }} className={`w-125 h-125 bg-white rounded-full relative z-20 flex flex-col justify-start items-center pt-10`}>
            <motion.div style={{ scale: inverseScale }} className={`absolute w-full px-10 lg:px-0 top-[5%] flex flex-col justify-start items-center pt-10`}>
              <motion.h1 initial={{ filter: "blur(20px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className={`w-full text-center text-3xl lg:text-5xl font-ClashDisplay font-extrabold text-blue-950`}>ABOUT</motion.h1>
              <motion.p initial={{ filter: "blur(20px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className={`w-[95vw] md:w-[80vw] px-5 lg:px-10 mt-6 text-center text-black font-Helvetica text-[12px] lg:text-sm`}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th</motion.p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.8, duration: 0.5, ease: "easeInOut"}} className={`w-full h-auto py-5 absolute -bottom-20 z-30 flex flex-col justify-start items-center pt-10 bg-black`}>
          <motion.h1 initial={{ filter: "blur(20px)", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`w-full text-center text-3xl lg:text-5xl font-ClashDisplay font-extrabold text-white`}>PAST EVENTS</motion.h1>

          <div className={`w-full pb-10 lg:mt-5 flex flex-col justify-start items-center md:flex-row`}>
            <div className={`w-full md:w-1/2 flex flex-col justify-start items-start px-5 lg:px-10 py-8`}>
              <motion.p initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className={`w-full text-start text-white font-Helvetica text-[10px] mt-5`}>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has s</motion.p>
              <motion.p initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className={`w-full text-start text-yellow-500 font-Helvetica text-xl font-extrabold mt-5`}>MINI SESSIONS</motion.p>
              <motion.p initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className={`w-full text-start text-white font-Helvetica text-[10px] my-5`}>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has s</motion.p>

              <motion.p onClick={() => setCurrentYear('SIT 2025')} initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className={`w-full text-start cursor-pointer text-yellow-500 ${currentYear === 'SIT 2025' ? "opacity-100" : "opacity-60"} font-Helvetica text-xl font-extrabold`}>SIT 2025</motion.p>
              <motion.p onClick={() => setCurrentYear('SIT 2024')} initial={{ filter: "blur(20px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className={`w-full text-start cursor-pointer text-yellow-500 ${currentYear === 'SIT 2024' ? "opacity-100" : "opacity-60"} font-Helvetica text-xl font-extrabold`}>SIT 2024</motion.p>

            </div>

            <div className={`w-full md:w-1/2 flex justify-center items-center px-5 py-4`}>
                <div className={`w-[95%] lg:w-[85%] h-[90%] lg:h-[80%] overflow-hidden rounded-lg`}>
                  <img src={currentYearImage} className={`w-full h-full object-cover`} />
                </div>
            </div>
          </div>
        </motion.div>


      </div>
    </>
  )
}

export default page