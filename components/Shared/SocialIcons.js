import React from "react";
import "./icon.css";
import { FaDiscord, FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <>
      <div id="socialicons">
        <a href="" className="socialicon">
          <div className="facebookcolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaFacebookSquare className="facebook h-8 w-8" />
          </div>
        </a>
        <a href="" className="socialicon">
          <div className="githubcolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaGithub className="github h-8 w-8" />
          </div>
        </a>
        <a className="socialicon">
          <div className="linkedincolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaLinkedin className="h-8 w-8 linkedin" />
          </div>
        </a>
        <a className="socialicon">
          <div className="googlecolor socialiconcircle1"></div>
          <div className="socialiconcircle2 grid place-items-center">
            <IoMailOpenOutline className="h-8 w-8 google" />
          </div>
        </a>
        <a className="socialicon">
          <div className="whatsAppColor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaSquareWhatsapp className="h-8 w-8 whatsApp" />
          </div>
        </a>
        <div className="socialicon">
          <div className="discordColor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaDiscord className="h-8 w-8 discord" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
