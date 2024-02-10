import React from "react";
import "./icon.css";

const SocialIcons = () => {
  return (
    <>
      <h1>Social Icon Animation</h1>
      <div id="socialicons">
        <div className="socialicon">
          <div className="dribbblecolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-dribbble dribbble" />
          </div>
        </div>
        <div className="socialicon">
          <div className="facebookcolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-facebook-square facebook" />
          </div>
        </div>
        <div className="socialicon">
          <div className="googlecolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-google-plus-square google" />
          </div>
        </div>
        <div className="socialicon">
          <div className="flickrcolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-flickr flickr" />
          </div>
        </div>
        <div className="socialicon">
          <div className="pinterestcolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-pinterest-square pinterest" />
          </div>
        </div>
        <div className="socialicon">
          <div className="githubcolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-github-alt github" />
          </div>
        </div>
        <div className="socialicon">
          <div className="linkedincolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-linkedin-square linkedin" />
          </div>
        </div>
        <div className="socialicon">
          <div className="youtubecolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-youtube-square youtube" />
          </div>
        </div>
        <div className="socialicon">
          <div className="tumblrcolor socialiconcircle1" />
          <div className="socialiconcircle2">
            <i className="fa icons fa-tumblr-square tumblr" />
          </div>
        </div>
      </div>
    </>
  );
};

const socialIconStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  overflow: "hidden",
  background: "#e4e4e4",
  position: "relative",
  float: "left",
  margin: "0px 0px 10px 10px",
};

const dribbbleColorStyle = {
  width: "150px",
  height: "150px",
  position: "absolute",
  left: "0px",
  top: "100px",
  animation: "fill 2s infinite",
  backgroundColor: "#ea4c89",
};

const socialIconCircle2Style = {
  width: "94px",
  height: "94px",
  borderRadius: "50%",
  background: "#fff",
  position: "absolute",
  left: "3px",
  top: "3px",
};

const iconStyle = {
  fontSize: "2em",
  position: "absolute",
  left: "33px",
  top: "33px",
  animation: "iconjump 2s infinite",
};

export default SocialIcons;
