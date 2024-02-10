import React from "react";
import "./icon.css";
import { FaDiscord, FaFacebookSquare, FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <>
      <div className="grid grid-cols-3 place-items-center pr-4">
        <a href="https://www.facebook.com/rfrifat6344" className="socialicon">
          <div className="facebookcolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaFacebookSquare className="facebook h-8 w-8" />
          </div>
        </a>
        <a href="https://github.com/RF-Rifat" className="socialicon">
          <div className="githubcolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaGithub className="github h-8 w-8" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/md-rifadul-islam-rifad-90aa612a5"
          className="socialicon"
        >
          <div className="linkedincolor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaLinkedin className="h-8 w-8 linkedin" />
          </div>
        </a>
        <a href="mailto:rfrifat6344@gmail.com" className="socialicon">
          <div className="googlecolor socialiconcircle1"></div>
          <div className="socialiconcircle2 grid place-items-center">
            <IoMailOpenOutline className="h-8 w-8 google" />
          </div>
        </a>
        <a
          href="https://join.skype.com/invite/tuiuXPGhl5vt"
          className="socialicon"
        >
          <div className="whatsAppColor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaSkype className="h-8 w-8 whatsApp" />
          </div>
        </a>
        <a href="https://discord.gg/GuAuStbq" className="socialicon">
          <div className="discordColor socialiconcircle1" />
          <div className="socialiconcircle2 grid place-items-center">
            <FaDiscord className="h-8 w-8 discord" />
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
