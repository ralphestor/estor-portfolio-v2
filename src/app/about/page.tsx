"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PageHeader from "@/components/PageHeader";

const About = () => {
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
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.5,
          delay: 0.2,
        },
      });
    }
  }, [inView]);

  useEffect(() => {
    if (textInView) {
      animationText.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "ease",
          duration: 0.5,
          delay: 0.2,
        },
      });
    }
  }, [textInView]);
  return (
    <main className="flex flex-col justify-start items-center w-full h-full min-h-[100vh] bg-[#0F3B46]">
      <PageHeader title="ABOUT" />
      <article className="w-[90%] md:w-[80%] xl:w-[900px] py-[50px] flex flex-col gap-20">
        <section className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="border-[20px] border-[#102630]">
              <Image
                src="/about-image.png"
                width={350}
                height={350}
                alt="Picture of the author"
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <div className="">
                <h1 className="text-white text-[20px] border-b-[2px] font-bold">
                  Introduction
                </h1>
              </div>
              <p className="text-white leading-8">
                Hello, world! I&apos;m Ralph Estor. I&apos;m a dedicated web developer
                with a strong passion for programming and committed to showcase
                my expertise in a professional setting. I&apos;m fully eager to learn
                various technologies to achieve business objectives. My ultimate
                motivation is to create outstanding applications that have a
                positive impact.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
            <div className="border-[20px] border-[#102630]">
              <Image
                src="/about-image-2.jpg"
                width={350}
                height={350}
                alt="Picture of the author"
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <div className="">
                <h1 className="text-white text-[20px] border-b-[2px] font-bold">
                  My Professional Background
                </h1>
              </div>
              <p className="text-white leading-8">
                I started my professional journey as an IT Support Specialist
                and Assistant Teacher in a private school, progressing
                eventually into a Web Developer. My passion for web development
                has been consistent since 2018. I have garnered extensive
                experience in diverse work environments, including large-scale
                corporation, start-up, and project-based client.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <div className="flex justify-center">
            <h1 className="w-fit text-white text-[20px] font-bold border-b-[2px]">
              Companies I Worked For
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-10">
            <div>
              <Image
                src="/honey.png"
                width={200}
                height={200}
                alt="Company"
              />
            </div>
            <div>
              <Image
                src="/shinefy.png"
                width={200}
                height={200}
                alt="Company"
              />
            </div>
            <div>
              <Image
                src="/icsi.png"
                width={150}
                height={150}
                alt="Company"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex justify-center">
            <h1 className="w-fit text-white text-[20px] font-bold border-b-[2px]">
              All About Me
            </h1>
          </div>
          <div className="w-full flex flex-row flex-wrap justify-center gap-10">
            <div className="max-w-[250px] flex flex-col gap-3 bg-[#102630] p-5">
              <div>
                <h1 className="text-center text-white text-[20px] border-b-[2px] font-bold">
                  Technical Skills
                </h1>
              </div>
              <ul className="flex flex-col gap-3 list-disc text-white pl-5">
                <li>
                  <p>Web Development</p>
                </li>
                <li>
                  <p>Web Design</p>
                </li>
                <li>
                  <p>Photo Editing</p>
                </li>
                <li>
                  <p>Mathematical Skills</p>
                </li>
                <li>
                  <p>Troubleshooting Software and Hardware Issues</p>
                </li>
              </ul>
            </div>
            <div className="max-w-[250px] flex flex-col gap-3 bg-[#102630] p-5">
              <div>
                <h1 className="text-center text-white text-[20px] border-b-[2px] font-bold">
                  Professional Traits
                </h1>
              </div>
              <ul className="flex flex-col gap-3 list-disc text-white pl-5">
                <li>
                  <p>Critical Thinker and Problem Solver</p>
                </li>
                <li>
                  <p>Good Time Management and Well-Organized</p>
                </li>
                <li>
                  <p>Keen Eye for Aesthetics</p>
                </li>
                <li>
                  <p>Trainable and Hardworking</p>
                </li>
              </ul>
            </div>
            <div className="max-w-[250px] flex flex-col gap-3 bg-[#102630] p-5">
              <div>
                <h1 className="text-center text-white text-[20px] border-b-[2px] font-bold">
                  Hobbies
                </h1>
              </div>
              <ul className="flex flex-col gap-3 list-disc text-white pl-5">
                <li>
                  <p>Sports: Football and Chess</p>
                </li>
                <li>
                  <p>Music: Singing and Playing the Guitar</p>
                </li>
                <li>
                  <p>Watching Netflix Movies and Series</p>
                </li>
                <li>
                  <p>Cooking and Eating</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
          <div>
            <Link
              href="/projects"
              className="w-[230px] border border-[2px] border-[#102630] flex justify-center items-center  text-white bg-[#102630] px-8 py-2 hover:bg-[#6e6e6e] hover:border-[#6e6e6e] transition-all duration-300 ease-in-out"
            >
              Go to Projects
              <Icon icon="ic:round-chevron-right" color="white" height="20" />
            </Link>
          </div>
          <div>
            <Link
              href="/connect"
              className=" w-[230px] border border-[2px] border-white flex  justify-center items-center  text-white bg-transparent py-2 hover:bg-[#6e6e6e] hover:border-[#6e6e6e] transition-all duration-300 ease-in-out"
            >
              Connect With Me
              <Icon icon="ic:round-chevron-right" color="white" height="20" />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default About;
