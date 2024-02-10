import { FcHome } from "react-icons/fc";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="px-5 py-8 bg-white rounded-2xl md:p-8 lg:p-10 2xl:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border">
      <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
        <FcHome className="h-5 w-5" />
        INTRODUCE
      </div>
      <div className="items-center gap-6 hero-content md:flex xl:gap-10">
        <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
          <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
            I Craft The <br />
            <span className="text-theme">Digital Landscape</span>
          </h1>
          <p>
            I am a{" "}
            <span className="font-medium text-black dark:text-white/90">
              Frontend Developer
            </span>{" "}
            at heart and, i create features that are best suited for the job at
            hand.
          </p>
          <ul className="flex items-center mt-4 -mx-3 lg:mt-5">
            <li className="flex items-center mx-3 text-regular">
              <i className="mr-2 fal fa-check-double text-theme" />
              Available for work
            </li>
            <li className="flex items-center mx-3 text-regular">
              <i className="mr-2 fal fa-check-double text-theme" />
              Full Time Job
            </li>
          </ul>
          <ul className="mt-7 buttons">
            <li data-scroll-nav={8} className="">
              <a
                href="#contact"
                className="btn-theme inline-flex items-center gap-2 bg-theme text-power__black py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
              >
                <i className="fal fa-paper-plane" />
                HIRE ME
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
          <Image
            src="/homeProfile.jpg"
            height={500}
            width={500}
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
