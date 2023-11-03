"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className="w-full h-[150px] md:h-[250px] bg-[#102630] flex justify-center items-center relative">
      <div>
        <h1 className="text-white font-black text-[14px] md:text-[20px] tracking-[7px] md:tracking-[10px] text-shadow">
          {title}
        </h1>
      </div>
      <div className="absolute top-[50%] left-[50%] border">
        <h1 className="absolute text-white font-black text-[28px] md:text-[40px] tracking-[14px] md:tracking-[20px] opacity-[0.1] translate-x-[-50%] translate-y-[-50%] w-fit">
          {title}
        </h1>
      </div>
      <div className="fixed top-0 left-0 translate-y-[60px] md:translate-y-[80px]">
        <Link href="/" className="fixed bg-[#ffffff21] hover:bg-[#ffffff31] transition-all duration-300 ease-in-out pr-5 py-1 rounded-r-full flex justify-center items-center drop-shadow">
        <Icon icon="tabler:chevron-left" color="white" width="25" />
          <Icon icon="ion:home" color="white" width="25" height="25" />
        </Link>
      </div>
    </header>
  );
};

export default PageHeader;
