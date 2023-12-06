"use client";

import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";

const Connect = () => {
  return (
    <main
      className={`flex flex-col justify-start items-center w-full min-h-[calc(100vh-200px)] bg-[#0F3B46]`}
    >
      <PageHeader title="CONNECT" />
      <article className="w-[90%] md:w-[80%] xl:w-[900px] py-[50px] flex justify-center items-center min-h-[calc(100vh-250px)]">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-fit">
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <div>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ralphestor30@gmail.com&su=Your+Subject+here&body=Your+Message+here&ui=2"
                target="_blank"
              >
                <Icon
                  icon="simple-icons:gmail"
                  color="white"
                  width="200"
                  height="200"
                  className="bg-[#102630] hover:bg-[#6e6e6e] transition-all duration-300 ease-in-out p-4"
                />
              </a>
            </div>
            <div>
              <h1 className="text-white">Email me on Gmail</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <div>
              <a href="https://www.facebook.com/ralphestor30" target="_blank">
                <Icon
                  icon="akar-icons:facebook-fill"
                  color="white"
                  width="200"
                  height="200"
                  className="bg-[#102630] hover:bg-[#6e6e6e] transition-all duration-300 ease-in-out p-4"
                />
              </a>
            </div>
            <div>
              <h1 className="text-white">Visit my Facebook</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <div>
              <a href="https://github.com/ralphestor" target="_blank">
                <Icon
                  icon="akar-icons:github-fill"
                  color="white"
                  width="200"
                  height="200"
                  className="bg-[#102630] hover:bg-[#6e6e6e] transition-all duration-300 ease-in-out p-4"
                />
              </a>
            </div>
            <div>
              <h1 className="text-white">Check my Github</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-fit">
            <div>
              <a
                href="https://www.linkedin.com/in/ralphestor30/"
                target="_blank"
              >
                <Icon
                  icon="akar-icons:linkedin-fill"
                  color="white"
                  width="200"
                  height="200"
                  className="bg-[#102630] hover:bg-[#6e6e6e] transition-all duration-300 ease-in-out p-4"
                />
              </a>
            </div>
            <div>
              <h1 className="text-white">View my LinkedIn</h1>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Connect;
