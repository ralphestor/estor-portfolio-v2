"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`h-[200px] bg-[#050505] ${
        pathname === "/" ? "hidden" : "flex"
      } flex-col items-center justify-center gap-4`}
    >
      <div>
        <Link
          href="/"
          className="border border-[#ffffffa4] border-[5px] text-[16px] p-2 text-[#ffffffa4] font-black"
        >
          RE
        </Link>
      </div>
      <div>
        <p className="text-[#ffffffa4] text-sm">All Rights Reserved ©2023</p>
      </div>
    </footer>
  );
};

export default Footer;
