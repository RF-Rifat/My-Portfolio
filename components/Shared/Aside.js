"use client";
import { Avatar } from "@material-tailwind/react";
import SocialIcons from "./SocialIcons";

const Aside = () => {
  return (
    <>
      <aside className="-translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 dark:bg-blue-gray-100 shadow-md shadow-blue-gray-500/5">
        <div className="p-3 mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
          <div className="mx-4 mt-12 text-center user-info lg:mx-6">
            <a className="block mx-auto border-6 pb-4" href="/">
              <Avatar
                size="xxl"
                alt="avatar"
                src="/profile.png"
                className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
              />
            </a>
            <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
              MD RIFADUL ISLAM
            </h6>
            <div className="leading-none cd-headline clip is-full-width">
              <h6
                className="text-sm cd-words-wrapper designation text-theme after:!bg-theme"
                style={{ width: "107.213px" }}
              >
                <b className="font-normal is-hidden">Web Developer</b>
                <b className="font-normal is-hidden">Photographers</b>
                <b className="font-normal is-visible">Web Designer</b>
              </h6>
            </div>
          </div>
          <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
            <ul className="space-y-3">
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  Residence:
                </span>
                <span>Bangladesh</span>
              </li>
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  City:
                </span>
                <span>Dinajpur</span>
              </li>
              <li className="flex text-sm">
                <span className="flex-1 font-medium text-black dark:text-white">
                  Age:
                </span>
                <span>21</span>
              </li>
            </ul>
          </div>
          <SocialIcons />
        </div>
      </aside>
    </>
  );
};

export default Aside;
