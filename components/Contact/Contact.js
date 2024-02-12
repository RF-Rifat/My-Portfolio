"use client";
import { FcContacts } from "react-icons/fc";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { BiMessageSquareAdd, BiSend } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div
        className="px-5 py-8 bg-white  rounded-2xl contact-section lg:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border"
        id="contact"
      >
        <div className="inline-flex items-center gap-4 px-2 py-2 text-xs tracking-wide text-black font-semibold dark:text-white border lg:px-5 section-name  200 rounded-4xl rounded">
          <FcContacts className="h-5 w-5" />
          CONTACT
        </div>
        <div className="mb-10 mt-7 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Contact <span className="font-semibold ">Me.</span>
          </h2>
          <p className="mt-3.5 md:mt-5 subtitle max-w-sectionTitle">
            I design products that are more than pretty. I make them shippable
            and usable, ttempor non mollit dolor et do aute
          </p>
        </div>
        {/*./section-title*/}
        <div className="max-w-6xl mx-auto bg-white my-6 font-[sans-serif] text-[#011c2b]">
          <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
            <div className="bg-[#011c2b] rounded-lg p-6 max-lg:text-center">
              <h2 className="text-xl font-bold text-white">
                Contact Information
              </h2>
              <p className="text-sm text-gray-400 mt-3">
                Have some big idea or brand to develop and need help?
              </p>
              <ul className="mt-16 space-y-10">
                <li className="flex items-center max-lg:justify-center">
                  <MdEmail className="text-white h-5 w-5" />
                  <a
                    href="mailto:rfrifat6344@gmail.com"
                    className="text-white text-sm ml-3"
                  >
                    <strong>rfrifat6344@gmail.com</strong>
                  </a>
                </li>
                <li className="flex items-center max-lg:justify-center">
                  <MdPhone className="text-white h-5 w-5" />
                  <a href="tel:01770703939" className="text-white text-sm ml-3">
                    <strong>+880 17707-03939</strong>
                  </a>
                </li>
                <li className="flex items-center max-lg:justify-center">
                  <MdLocationOn className="text-white h-5 w-5" />
                  <div className="text-white text-sm ml-3">
                    <strong>Dinajpur, Chawliapotty Bangladesh</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl lg:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center">
                    <Input
                      variant="standard"
                      type="text"
                      color="blue"
                      label="First Name"
                      className="px-2 py-3 w-full text-sm"
                    />
                    <IoIosPersonAdd className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      variant="standard"
                      type="text"
                      color="blue"
                      className="px-2 py-3 w-full text-sm"
                      label="Last Name"
                    />
                    <IoIosPersonAdd className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      variant="standard"
                      color="blue"
                      className="px-2 py-3 w-full text-sm"
                      type="number"
                      label="Phone No"
                    />
                    <MdPhone className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      variant="standard"
                      color="blue"
                      className="px-2 py-3 w-full text-sm"
                      type="email"
                      label="Email"
                    />
                    <MdEmail className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                  <div className="relative flex items-center sm:col-span-2">
                    <Textarea
                      variant="standard"
                      color="blue"
                      label="Write Message"
                      className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 outline-none"
                      defaultValue={""}
                    />
                    <BiMessageSquareAdd className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                </div>
                <Button
                  type="button"
                  color="blue"
                  className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold"
                >
                  <FaRegPaperPlane className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Location Map */}
        <iframe
          id="map"
          className="w-full overflow-hidden border-10 embed-map h-80 2xl:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3419.155888782968!2d88.6207782033622!3d25.63350034042849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1707640145880!5m2!1sen!2sbd"
          aria-label="Contact Map"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
