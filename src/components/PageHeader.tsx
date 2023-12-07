"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const [textRef, textInView] = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();
  const animationText = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.5,
          delay: 0.3,
        },
      });
    }
  }, [inView]);

  useEffect(() => {
    if (textInView) {
      animationText.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.5,
          delay: 0.3,
        },
      });
    }
  }, [textInView]);

  return (
    <header className="w-full h-[150px] md:h-[250px] bg-[#102630] flex justify-center items-center relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: "20px" }}
        animate={animation}
      >
        <h1 className="text-white font-black text-[14px] md:text-[20px] tracking-[7px] md:tracking-[10px] text-shadow">
          {title}
        </h1>
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: "-20px" }}
        animate={animation}
        className="absolute top-[50%] left-[50%] border"
      >
        <h1 className="absolute text-white font-black text-[28px] md:text-[40px] tracking-[14px] md:tracking-[20px] opacity-[0.1] translate-x-[-50%] translate-y-[-50%] w-fit">
          {title}
        </h1>
      </motion.div>
      <div className="fixed top-0 left-0 translate-y-[60px] md:translate-y-[80px]">
        <Link
          href="/"
          className="fixed bg-[#ffffff21] hover:bg-[#ffffff31] transition-all duration-300 ease-in-out pr-5 py-1 rounded-r-full flex justify-center items-center drop-shadow"
        >
          <Icon icon="tabler:chevron-left" color="white" width="25" />
          <Icon icon="ion:home" color="white" width="25" height="25" />
        </Link>
      </div>
    </header>
  );
};

export default PageHeader;
