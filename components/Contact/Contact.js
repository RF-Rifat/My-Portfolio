"use client";
import { FcContacts } from "react-icons/fc";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { BiMessageSquareAdd, BiSend } from "react-icons/bi";
import { IoIosPersonAdd } from "react-icons/io";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
const Contact = () => {
  const [state, handleSubmit] = useForm("xleyqkzv");
  if (state.succeeded) {
    toast.success("Successfully Email Send!");
  }
  return (
    <>
      <div
        className="px-5 py-8 bg-white  rounded-2xl contact-section lg:p-13 border-blue-gray-100 shadow-md shadow-blue-gray-500/5 border dark:bg-dark"
        id="contact"
      >
        <div className="inline-flex items-center gap-4 px-2 py-2 text-xs tracking-wide text-black font-semibold dark:text-white border lg:px-5 section-name  200 rounded-4xl rounded">
          <FcContacts className="h-5 w-5" />
          CONTACT
        </div>
        <div className="mb-10 mt-7">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Contact <span className="font-semibold ">Me.</span>
          </h2>
          <p className="mt-3.5 md:mt-5  dark:text-white">
            Thank you for taking the time to visit my portfolio! If you have any
            questions, inquiries, or would like to discuss a project, feel free
            to reach out to me. I&apos;m always open to new opportunities and
            collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white my-6 font-[sans-serif] text-[#011c2b] dark:bg-dark">
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

            <div className="px-6 py-12 rounded-xl lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center">
                    <Input
                      variant="standard"
                      type="text"
                      color="blue"
                      label="First Name"
                      name="fname"
                      className="px-2 py-3 w-full text-sm "
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
                      name="lname"
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
                      name="phone"
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
                      name="email"
                      id="email"
                    />
                    <MdEmail className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                  <div className="relative flex items-center sm:col-span-2">
                    <Textarea
                      variant="standard"
                      color="blue"
                      label="Write Message"
                      className="px-2 pt-3 text-black w-full text-sm border-b-2 outline-none"
                      defaultValue={""}
                      name="message"
                    />
                    <BiMessageSquareAdd className="w-[18px] h-[18px] absolute right-2 text-gray-700" />
                  </div>
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  type="submit"
                  color="blue"
                  disabled={state.submitting}
                  className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold"
                >
                  <FaRegPaperPlane className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

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

// "use client";
// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { Button } from "@material-tailwind/react";
// function Contact() {
//   const [state, handleSubmit] = useForm("xleyqkzv");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />
//       <Button type="submit" disabled={state.submitting}>
//         Submit
//       </Button>
//     </form>
//   );
// }
// export default Contact;
