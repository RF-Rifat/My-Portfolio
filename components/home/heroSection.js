"use client";
import { FcHome, FcRight } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import TextAnimate from "../Shared/TextAnimate";

const HeroSection = () => {
  return (
    <div className="px-5 py-8 bg-white rounded-2xl md:p-8 lg:p-10 2xl:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border dark:bg-dark">
      <div className="inline-flex items-center gap-4 font-semibold px-2 py-2 text-xs tracking-wide dark:text-white dark:bg-dark border lg:px-5 section-name  200 rounded-4xl rounded">
        <FcHome className="h-5 w-5" />
        INTRODUCE
      </div>
      <div className="items-center gap-6 hero-content lg:flex lg:gap-10 space-y-4">
        <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
          <h1 className="text-[32px] lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
            <TextAnimate text={"Crafting Seamless Digital Solutions"} /> <br />
            <span className="text-blue-500">with MERN Stack Mastery</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            I&apos;m a Junior MERN Stack Developer passionate about creating
            efficient, scalable, and innovative solutions. My journey involves
            continuous learning and problem-solving, turning ideas into reality
            with code.
          </p>
          <ul className="grid items-center mt-4 -mx-3 lg:mt-5">
            <li className="flex items-center mx-3 text-gray-600 dark:text-gray-300">
              <FcRight className="h-6 w-6 mr-2" />
              Open for opportunities
            </li>
            <li className="flex items-center mx-3 text-gray-600 dark:text-gray-300">
              <FcRight className="h-6 w-6 mr-2" />
              Available for freelance projects
            </li>
            <li className="flex items-center mx-3 text-gray-600 dark:text-gray-300">
              <FcRight className="h-6 w-6 mr-2" />
              Available for Full Time Job
            </li>
          </ul>
          <ul className="mt-7 buttons">
            <Link href="#contact" className="">
              <Button
                color="blue"
                size="lg"
                href="#contact"
                className="inline-flex items-center gap-3"
              >
                <FaRegPaperPlane className="h-5 w-5" />
                HIRE ME
              </Button>
            </Link>
          </ul>
        </div>
        <div className="flex-[0_0_33.3rem] max-md:hidden">
          <Image
            src="/homeProfile.jpg"
            height={1000}
            width={1000}
            className="rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
