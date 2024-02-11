"use client";
import { FcWorkflow } from "react-icons/fc";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiDonateBlood } from "react-icons/bi";

const Resume = () => {
  return (
    <>
      <div
        className="px-5 py-8 md:p-8 bg-white rounded-2xl service-section lg:p-10 2xl:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border"
        id="work"
      >
        <div className="inline-flex items-center gap-4 px-2 font-semibold py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name  200 rounded-4xl rounded">
          <FcWorkflow className="h-5 w-5" />
          RESUME
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work <span className="font-semibold text-theme">Experience</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            I design products that are more than pretty. I make them shippable
            and usable, tempor non mollit dolor et do aute
          </p>
        </div>
        {/*./section-title*/}
        <div>
          <ul className="space-y-4 md:space-y-0">
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2 md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Secure-Saving
                </h6>
                <p className="text-[13px] md:text-sm text-theme">
                  Jan, 2024 - Current
                </p>
              </div>
              <Timeline>
                <TimelineItem className="pb-4">
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="md:p-2">
                      <PiCurrencyCircleDollarBold className="h-5 w-5" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Banking-Management System
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="mb:pb-6">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600 mb-3"
                    >
                      In an era marked by digital advancements and increasing
                      reliance on technology, the financial sector is undergoing
                      a transformative shift towards providing more secure,
                      efficient, and user-friendly services. SecureSavings
                      emerges as a pioneering project, aiming to redefine
                      banking by prioritizing security, innovation, and customer
                      experience.
                    </Typography>
                    <Link
                      target="_blank"
                      href="https://savings-34498.web.app"
                      className=""
                    >
                      <Button variant="filled" size="sm" color="blue">
                        Learn More
                      </Button>
                    </Link>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </li>
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2 md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Bismillah-Chinese
                </h6>
                <p className="text-[13px] md:text-sm text-theme">
                  Feb, 2024 - Current
                </p>
              </div>
              <Timeline>
                <TimelineItem className="pb-4">
                  <TimelineConnector  />
                  <TimelineHeader>
                    <TimelineIcon className="md:p-2">
                      <IoFastFoodOutline className="h-5 w-5" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Fusion Cuisine Delivery
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="mb:pb-6">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600 mb-3"
                    >
                      Bismillah-Chinese brings the fusion of Chinese and local
                      cuisine right to your doorstep. In an era marked by
                      digital advancements and increasing reliance on
                      technology, the food delivery sector is witnessing a
                      revolution. This project aims to offer a seamless and
                      delightful experience for food enthusiasts, combining the
                      flavors of traditional Chinese dishes with local
                      delicacies.
                    </Typography>
                    <Link
                      target="_blank"
                      href="https://savings-34498.web.app"
                      className=""
                    >
                      <Button variant="filled" size="sm" color="blue">
                        Learn More
                      </Button>
                    </Link>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </li>
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2 md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Blood-Bond
                </h6>
                <p className="text-[13px] md:text-sm text-theme">DEC, 2023</p>
              </div>
              <Timeline>
                <TimelineItem className="pb-4">
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="md:p-2">
                      <BiDonateBlood className="h-5 w-5" />
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Connecting Blood Donors with Recipients
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="mb:pb-6">
                    <Typography
                      color="gary"
                      className="font-normal text-gray-600 mb-3"
                    >
                      Blood-Bond serves as a crucial platform bridging the gap
                      between blood donors and recipients. In an era marked by
                      digital advancements and increasing reliance on
                      technology, the need for efficient blood donation systems
                      is paramount. This initiative aims to streamline the
                      process, ensuring timely access to blood donations for
                      those in need while promoting awareness and participation
                      in blood donation drives.
                    </Typography>
                    <Link
                      target="_blank"
                      href="https://savings-34498.web.app"
                      className=""
                    >
                      <Button variant="filled" size="sm" color="blue">
                        Learn More
                      </Button>
                    </Link>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </li>
          </ul>
        </div>
        <br />
        <div id="education" className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Education</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            I design products that are more than pretty. I make them shippable
            and usable, tempor non mollit dolor et do aute
          </p>
        </div>
        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before: md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2 md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Oxford University
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2016-2018</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Diploma in Computer
                </h4>
                <p>
                  Owing to advancements in product other designer technologies
                  aute voluptate.
                </p>
              </div>
            </li>
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2   md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Google
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2018 - 2022</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  BSc in Engineering
                </h4>
                <p>
                  Owing to advancements in product other designer technologies
                  aute voluptate.
                </p>
              </div>
            </li>
            <li className="p-5 border rounded-xl md:flex max-md:space-y-2   md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Oxford University
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2014-2018</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Php Development
                </h4>
                <p>
                  Owing to advancements in product other designer technologies
                  aute voluptate.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
