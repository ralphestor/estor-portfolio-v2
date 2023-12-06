"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [textRef, textInView] = useInView({
    threshold: 0.1,
  });

  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.5,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <main className="w-full h-[100vh] min-h-[650px] px-[10%]">
      <header className="flex flex-row">
        <div className="absolute left-0 w-[50vw] h-[100vh] min-h-[650px] bg-[#102630]"></div>
        <div className="absolute right-0 w-[50vw] h-[100vh] min-h-[650px] bg-[#0F3B46]"></div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex flex-col justify-center items-center home-title text-center w-full z-[100] h-[100vh] min-h-[600px] gap-10">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-shadow text-[20px] sm:text-[30px] lg:text-[50px] xl:text-[70px] text-white font-black tracking-[10px] lg:tracking-[25px] xl:tracking-[35px] pl-[10px] lg:pl-[25px] lg:pl-[35px] z-[100]">
                RALPH ESTOR
              </h1>
            </div>
            <div>
              <h1 className="home-position text-[12px] lg:text-[20px] xl:text-[26px] text-white opacity-20 font-black tracking-[12px] lg:tracking-[20px] lg:tracking-[26px] w-fit pl-[12px] lg:pl-[20px] xl:pl-[26px] z-[100]">
                WEB DEVELOPER
              </h1>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
            <div className="z-[99] border border-gray-200 border-[16px]">
              <Image
                src="/ralphgif_opt.gif"
                width={350}
                height={350}
                alt="Picture of the author"
                className="z-[99]"
              />
            </div>
            <ul className="text-white flex items-center lg:items-start flex-col sm:flex-row lg:flex-col items-start gap-4">
              <li>
                <a
                  href="/about"
                  className="text-[16px] lg:text-[34px] xl:text-[50px] tracking-[8px] lg:tracking-[17px] xl:tracking-[25px] font-black text-shadow homeLink-child pl-[8px] lg:pl-[17px] xl:pl-[25px]"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-[16px] lg:text-[34px] xl:text-[50px] tracking-[8px] lg:tracking-[17px] xl:tracking-[25px] font-black text-shadow homeLink-child pl-[8px] lg:pl-[17px] xl:pl-[25px]"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="/connect"
                  className="text-[16px] lg:text-[34px] xl:text-[50px] tracking-[8px] lg:tracking-[17px] xl:tracking-[25px] font-black text-shadow homeLink-child pl-[8px] lg:pl-[17px] xl:pl-[25px]"
                >
                  CONNECT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </main>
  );
}
