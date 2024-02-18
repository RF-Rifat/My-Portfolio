import { FaDatabase } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="py-8 md:p-8 bg-white  rounded-2xl service-section lg:p-10 2xl:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border px-5 dark:bg-dark"
      >
        <div className="inline-flex items-center gap-4 font-semibold px-2 py-2 text-xs tracking-wide dark:text-white dark:bg-gray-800 border lg:px-5 section-name  200 rounded-4xl rounded">
          <FcServices className="h-5 w-5" />
          SERVICES
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My{" "}
            <span className="font-semibold  text-blue-500 dark:text-white">
              Services
            </span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle dark:text-white">
            As a MERN stack developer, I offer the following services to help
            businesses thrive in the digital world:
          </p>
        </div>
        <div className="grid gap-5 md:gap-6 service-card-wrapper sm:grid-cols-2 lg:gap-7 2xl:gap-8">
          <div className="relative p-5 transition duration-300 border py-7 md:p-7 card-item group   rounded-2xl xl:p-8 2xl:p-10 hover:border-theme shadow-md hover:shadow-lg dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <div className="absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11">
              <FaDatabase className="h-6 w-6 dark:text-white" />
            </div>
            <div className="text-5xl font-extrabold transition duration-300 md:text-6xl number lg:text-7xl text-greyBlack opacity-50 group-hover:opacity-100 dark:text-white">
              01
            </div>
            <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl">
              Database Design & Management
            </h4>
            <p className="dark:text-white">
              I specialize in designing and managing databases to ensure
              efficient data storage and retrieval for web applications.
            </p>
          </div>
          <div className="relative p-5 transition duration-300 border py-7 md:p-7 card-item group   rounded-2xl xl:p-8 2xl:p-10 hover:border-theme shadow-md hover:shadow-lg dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <div className="absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11">
              <MdOutlineDeveloperMode className="h-6 w-6 dark:text-white" />
            </div>
            <div className="text-5xl font-extrabold transition duration-300 md:text-6xl number lg:text-7xl text-greyBlack opacity-50 group-hover:opacity-100 dark:text-white">
              02
            </div>
            <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl">
              API Development
            </h4>
            <p className="dark:text-white">
              I develop robust and scalable APIs using Node.js and Express.js to
              power modern web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
