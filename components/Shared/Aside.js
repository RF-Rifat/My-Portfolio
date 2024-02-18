"use client";
import { Avatar } from "@material-tailwind/react";
import SocialIcons from "./SocialIcons";
import TypeWriter from "./Typewriter";
import { Button } from "@material-tailwind/react";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { FcRight } from "react-icons/fc";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-80"
        } sticky top-4 h-[92svh] inset-0 z-50 my-4 ml-4 pb-10 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 dark:bg-dark shadow-md shadow-blue-gray-500/5 `}
      >
        <div className="p-3 mb-3 overflow-hidden bg-white dark:bg-dark rounded-2xl">
          <div className="mx-4 mt-6 text-center lg:mx-6">
            <a
              className="block mx-auto border-6 pb-4"
              href="/"
              style={{
                perspective: "2000px",
                transformStyle: "preserve-3d",
                perspectiveOrigin: "53% 57%",
              }}
            >
              <Avatar
                style={{
                  transform: "rotateX(4deg) rotateY(6deg) rotateZ(2deg)",
                  boxShadow: "1px 2px 33px 3px rgba(0, 0, 0, 0.35)",
                  WebkitBoxShadow: "1px 2px 33px 3px rgba(0, 0, 0, 0.35)",
                  MozBoxShadow: "1px 2px 33px 3px rgba(0, 0, 0, 0.35)",
                }}
                size="xxl"
                alt="avatar"
                src="/profile.png"
                className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
              />
            </a>
            <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
              MD RIFADUL ISLAM
            </h6>
            <div className="leading-none cd-headline clip is-full-width w-full">
              <h6
                className="text-sm cd-words-wrapper designation  after:!bg-theme text-center w-full"
                style={{ width: "107.213px" }}
              >
                <div className="whitespace-nowrap font-semibold text-center ml-10 dark:text-white">
                  <TypeWriter></TypeWriter>
                </div>
              </h6>
            </div>
          </div>
          <div className="pt-6 mx-4 border-t lg:mx-6 md:mx-7 my-7">
            <ul className="space-y-3">
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  Residence:
                </span>
                <span className="dark:text-white">Bangladesh</span>
              </li>
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  City:
                </span>
                <span className="dark:text-white">Dinajpur</span>
              </li>
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  Age:
                </span>
                <span className="dark:text-white">21</span>
              </li>
            </ul>
          </div>
          <div className="border-t mx-4">
            <div className="border-t mb-4"></div>
            <h2 className="ml-2 font-semibold mb-3 dark:text-white">
              Let&apos;s Get Social
            </h2>
            <SocialIcons />
          </div>
        </div>
        <div className="grid place-items-center w-full z-50">
          <a href="https://drive.google.com/file/d/1hojg5_y1kYig2PAZpK153xh3zIgFuz17/view?usp=sharing">
            <Button
              size="md"
              variant="gradient"
              color="light-blue"
              className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
            >
              Download Resume
              <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                <FaDownload className="h-6 w-6" />
              </span>
            </Button>
          </a>
        </div>
        <div
          className={`${
            isOpen ? "-right-7" : "-right-12"
          } xl:hidden fixed top-0 z-50`}
        >
          <button color="white" onClick={toggleAside} className="">
            <FcRight className="h-8 w-8 text-black" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
