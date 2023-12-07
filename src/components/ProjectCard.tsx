"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  imageUrl: string;
  tags: string[];
  paragraph: string;
  title: string;
  flexDirection: string;
  liveLink: string;
  githubLink: string;
  youtubeLink: string;
}

const ProjectCard = ({
  imageUrl,
  tags,
  flexDirection,
  paragraph,
  title,
  liveLink,
  githubLink,
  youtubeLink,
}: ProjectCardProps) => {
  const [ref, inView] = useInView({
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
          delay: 0.7,
        },
      });
    }
  }, [inView]);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
      className="w-full flex flex-col gap-5"
    >
      <div
        className={`w-full flex flex-col lg:${flexDirection} justify-center items-center gap-8`}
      >
        <div className="border-[20px] border-[#102630]">
          <Image
            src={imageUrl}
            width={350}
            height={350}
            alt="Project"
            className="w-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-2">
          <div className="">
            <h1 className="text-white text-[20px] font-bold text-center">
              {title}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <div key={tag} className="bg-[#102630] rounded py-1 px-2">
                <h1 className="text-white text-xs">{tag}</h1>
              </div>
            ))}
          </div>
          <p className="text-white leading-8">{paragraph}</p>
          <section className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mt-2">
            {liveLink && (
              <div>
                <a
                  href={`${liveLink}`}
                  target="_blank"
                  className="w-[230px] border border-[2px] border-[#102630] flex justify-center items-center  text-white bg-[#102630] px-8 py-2 hover:bg-[#6e6e6e] hover:border-[#6e6e6e] transition-all duration-300 ease-in-out"
                >
                  Visit Site
                </a>
              </div>
            )}

            {youtubeLink && (
              <div>
                <a
                  href={`${youtubeLink}`}
                  target="_blank"
                  className="w-[230px] border border-[2px] border-[#102630] flex justify-center items-center  text-white bg-[#102630] px-8 py-2 hover:bg-[#6e6e6e] hover:border-[#6e6e6e] transition-all duration-300 ease-in-out"
                >
                  View Video
                </a>
              </div>
            )}

            {githubLink && (
              <div>
                <a
                  href={`${githubLink}`}
                  target="_blank"
                  className=" w-[230px] border border-[2px] border-white flex  justify-center items-center  text-white bg-transparent py-2 hover:bg-[#6e6e6e] hover:border-[#6e6e6e] transition-all duration-300 ease-in-out"
                >
                  Github Repo
                </a>
              </div>
            )}
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
