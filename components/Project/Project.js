"use client";
import { Typography } from "@material-tailwind/react";
import { FcNook } from "react-icons/fc";

const Project = () => {
  return (
    <>
      <div className="px-5 py-8 md:p-8 bg-white rounded-2xl service-section lg:p-10 2xl:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border dark:bg-dark">
        <div className="inline-flex items-center gap-2 px-2 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name  200 rounded-4xl">
          <FcNook className="h-5 w-5" />
          PORTFOLIO
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Featured{" "}
            <span className="font-semibold  text-blue-500">Projects</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            Dive into a collection of my recent projects, where each endeavor is
            a testament to my passion for creating innovative solutions.
          </p>
        </div>
        {/*./section-title*/}
        <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
          <div className="relative item md:col-span-2 z-1 group">
            <a
              className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl"
              href="/"
            >
              <div className="">
                <figure className="relative h-96 w-full">
                  <img
                    className="w-full rounded-xl object-cover object-center rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs w-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
                    src="/secure.png"
                    alt="portfolio"
                  />
                  <figcaption className="absolute bottom-8 left-2/4 flex w-full md:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 md:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm px-4">
                    <div>
                      <Typography variant="h5" color="blue-gray">
                        Secure-Savings
                      </Typography>
                      <Typography color="gray" className="mt-2 font-normal">
                        5 Jan 2024
                      </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                      Growth
                    </Typography>
                  </figcaption>
                </figure>
              </div>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl "
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          {/*./portfolio-card*/}
          <div className="relative item md:col-span-1 z-1 group">
            <a
              className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl  "
              href="/"
            >
              <figure className="relative h-96 w-full">
                <img
                  className="w-full rounded-xl object-cover object-center rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs w-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
                  src="/bismillah.png"
                  alt="portfolio"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-full md:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 md:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm px-4">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Secure-Savings
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                      5 Jan 2024
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray">
                    Growth
                  </Typography>
                </figcaption>
              </figure>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl "
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          {/*./portfolio-card*/}
          <div className="relative item md:col-span-1 z-1 group">
            <a
              className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl  "
              href="/"
            >
              <figure className="relative h-96 w-full">
                <img
                  className="w-full rounded-xl object-cover object-center rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs w-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
                  src="/bloodbond.png"
                  alt="portfolio"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-full md:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 md:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm px-4">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Secure-Savings
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                      5 Jan 2024
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray">
                    Growth
                  </Typography>
                </figcaption>
              </figure>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl "
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          {/*./portfolio-card*/}
          <div className="relative item md:col-span-2 z-1 group">
            <a
              target="_blank"
              className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl  "
              href="https://bloodbond-1911f.web.app/dashboard/home"
            >
              <figure className="relative h-96 w-full">
                <img
                  className="w-full rounded-xl object-cover object-center rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs w-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
                  src="/bloodbond.png"
                  alt="bloodbond"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-full md:w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 md:px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm px-4">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Blood-Bond
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                      18 Dec 2023
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray">
                    Management
                  </Typography>
                </figcaption>
              </figure>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl"
                >
                  Branding
                </a>
              </li>
            </ul>
          </div>
          {/*./portfolio-card*/}
        </div>
        <div className="mt-10 text-center more-blogs md:mt-13">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300"
          >
            More Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
