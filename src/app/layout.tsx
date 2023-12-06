"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Hello World! This is Ralph Estor. Welcome to my Portfolio."
        />
        <meta name="keywords" content="Ralph Estor, Portfolio, Web Developer" />
        <meta name="author" content="Ralph Estor" />
        <title>
          {pathname === "/about"
            ? "About Me"
            : pathname === "/projects"
            ? "My Projects"
            : pathname === "/connect"
            ? "Connect With Me"
            : "Ralph Estor - Portfolio"}
        </title>
      </head>
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          <motion.div key={pathname}>
            <Navbar />
            {children}
            <motion.div
              className="slide-in"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
              className="slide-out"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
