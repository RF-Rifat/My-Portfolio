"use client";
import { Fragment, useState } from "react";
import "./ChatApp.css";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineAddReaction } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi2";
import { BsSend } from "react-icons/bs";

const ChatApp = () => {
  const [chat, setChat] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);
  const handleSendClick = () => {
    console.log("clicked");
  };

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 right-0">
        {" "}
        <div className="main z-50">
          <div
            id="chat-app"
            className={`chat-app w-0 h-0 ${
              !open && "is-active h-[75svh] !w-[350px]"
            }`}
          >
            <div className="chat-app_toggle toggle">
              <div className="icon send" onClick={handleSendClick}>
                {/* send icon */}
                <BsSend />
              </div>
              <div className="icon open" onClick={() => setOpen(!open)}>
                <TbMessageCircle2 />
                {/* <FcSms /> */}
              </div>
            </div>
            <div className="chat-app_box h-[75svh]">
              <div className="chat-app_header">
                <div
                  className="close"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
                <div className="branding">
                  <div className="avatar is-online">
                    <img src="profile.png" alt="User" />
                  </div>
                  <div className="content">
                    <p className="title">Rifadul Islam</p>
                    <p className="subtitle">rfrifat6344@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="chat-app_content">
                <div className="messages">
                  <div className="message reply">
                    <p className="text"> How can i help you today ?</p>
                  </div>

                  {chat.map((message) => (
                    <Fragment key={message.id}>
                      <div className={message?.send && "message"}>
                        <p className={message?.send && "text"}>
                          {message?.send}
                        </p>
                      </div>
                      <div className={message?.reply && "message reply"}>
                        <p className={message?.send && "text"}>
                          {message?.reply}
                        </p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="chat-app_footer">
                <div className="tools">
                  <a className="button-icon">
                    <MdOutlineAddReaction className="h-5 w-5 hover:text-green-700" />
                  </a>
                  <a className="button-icon">
                    <HiOutlinePaperClip className="h-5 w-5 icon !hover:text-white" />
                  </a>
                  <a className="copyright">Talk With Manager</a>
                </div>
                <input
                //   onChange={handleInputChange}
                  value={inputValue}
                  className="chat-input"
                  type="text"
                  placeholder="Type..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
