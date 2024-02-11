"use client";
import { Typography } from "@material-tailwind/react";

const Project = () => {
  return (
    <>
      <div className="px-5 py-8 md:p-8 bg-white  rounded-2xl service-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name  200 rounded-4xl">
          <i className="fal fa-tasks-alt text-theme" />
          PORTFOLIO
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Featured <span className="font-semibold text-theme">Projects</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            I design products that are more than pretty. I make them shippable
            and usable, ttempor non mollit dolor et do aute
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
                  <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
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
                {/* <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div> */}
              </div>
              {/* <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Design
                <span>Specialization</span>
              </div> */}
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
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/portfolio-img2.png"
                  className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Design
                <span>Specialization</span>
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
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/portfolio-img3.png"
                  className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Design
                <span>Specialization</span>
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
          <div className="relative item md:col-span-2 z-1 group">
            <a
              className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl  "
              href="/"
            >
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/portfolio-img4.png"
                  className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Design
                <span>Specialization</span>
              </div>
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
