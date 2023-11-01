"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import { Squash as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <nav
      className={`fixed top-0 ${
        pathname === "/" ? "hidden" : "flex"
      } justify-between items-center w-full h-[50px] md:h-[70px] px-[20px] ${
        navbar ? "bg-[#050505]" : "bg-transparent"
      } z-[999] transition-all duration-300 ease-in-out`}
    >
      <div>
        <Link
          href="/"
          className="border border-gray-200 border-[3px] md:border-[5px] text-[12px] md:text-[16px] p-1 md:p-2 text-white font-black"
        >
          RE
        </Link>
      </div>
      <ul className="hidden md:flex flex-row gap-4 text-white">
        <li>
          <Link href="/" className="text-[12px] tracking-[6px] font-black homeLink-child pl-[6px]">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-[12px] tracking-[6px] font-black homeLink-child pl-[6px]">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-[12px] tracking-[6px] font-black homeLink-child pl-[6px]">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/connect" className="text-[12px] tracking-[6px] font-black homeLink-child pl-[6px]">
            CONNECT
          </Link>
        </li>
      </ul>

      <div className="flex md:hidden">
        <div>
          <Hamburger color="#0F3B46" toggled={isOpen} toggle={toggleDrawer} size={24} />
        </div>
        <div className="z-[10000]">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="nav-drawer"
            style={{
              zIndex: 10000,
              background: "linear-gradient(to right, #0F3B46, #102630)",
            }}
          >
            <ul className="flex flex-col items-center text-white py-5">
              <li className="flex justify-center items-center mb-5">
                <Link
                  className="border border-gray-200 border-[5px] p-2 text-white font-black"
                  href="/"
                >
                  RE
                </Link>
              </li>
              <li className="w-full h-[64px] flex justify-center items-center">
                <Link className="flex justify-center items-center w-full h-full bg-transparent hover:bg-[#6e6e6e] transition-all ease-in-out duration-300 text-[12px] tracking-[6px] font-black" href="/">
                  HOME
                </Link>
              </li>
              <li className="w-full h-[64px] flex justify-center items-center">
                <Link className="flex justify-center items-center w-full h-full bg-transparent hover:bg-[#6e6e6e] transition-all ease-in-out duration-300 text-[12px] tracking-[6px] font-black" href="/about">
                  ABOUT
                </Link>
              </li>
              <li className="w-full h-[64px] flex justify-center items-center">
                <Link className="flex justify-center items-center w-full h-full bg-transparent hover:bg-[#6e6e6e] transition-all ease-in-out duration-300 text-[12px] tracking-[6px] font-black" href="/projects">
                  PROJECTS
                </Link>
              </li>
              <li className="w-full h-[64px] flex justify-center items-center">
                <Link className="flex justify-center items-center w-full h-full bg-transparent hover:bg-[#6e6e6e] transition-all ease-in-out duration-300 text-[12px] tracking-[6px] font-black" href="/connect">
                  CONNECT
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
