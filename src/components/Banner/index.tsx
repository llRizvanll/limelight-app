// components/Banner.js
"use client"
import React, { useState } from "react";
import styles from "./Banner.module.css";
import ChatButton from "../Buttons/ChatButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
// import Modal from "react-modal";
import Modal from "react-modal";
import { Constants } from "@/commonFunctions/Constants";
Modal.setAppElement("#__next");




const Banner = () => {
  const tabs = ["SOFA SETS", "CARPETS", "DRAPES", "UPHOLSTERY"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsVideoPlaying(true); // Set video to play when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false); // Stop video playback when modal closes
  };

  const playFullscreenVideo = () => {
    // Create video element
    const videoElement = document.createElement("video");
    videoElement.src = Constants.VID_FILE;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.style.position = "fixed";
    videoElement.style.top = "0";
    videoElement.style.left = "0";
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.zIndex = "1000";
    videoElement.style.backgroundColor = "black";
  
    // Create close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "✕";
    closeButton.style.position = "fixed";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.zIndex = "1100";
    closeButton.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.padding = "10px";
    closeButton.style.borderRadius = "50%";
    closeButton.style.fontSize = "24px";
    closeButton.style.cursor = "pointer";
  
    // Append video and close button to body
    document.body.appendChild(videoElement);
    document.body.appendChild(closeButton);
  
    // Function to cleanup
    const cleanup = () => {
      document.removeEventListener("keydown", handleKeyPress);
      videoElement.pause();
      videoElement.remove();
      closeButton.remove();
    };
  
    // Event listener to close on Escape key
    const handleKeyPress = (event:any) => {
      if (event.key === "Escape") cleanup();
    };
  
    // Add event listeners
    closeButton.addEventListener("click", cleanup);
    document.addEventListener("keydown", handleKeyPress);
  };
  
  
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className="container mx-auto text-center px-4 py-8 mt-[130px] relative sm:w-full md:w-4/5 grid gap-[32px]">
        <div
          className={styles.tabs}
        >
          {tabs.map((tab) => (

            <div key={tab} className="relative w-[120px] px-4 py-2 mx-1 cursor-pointer text-[#010FAD] bg-[#ebecfc] font-lato text-sm font-normal text-center border-none">
              {tab}
              <div className="absolute top-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div>  {/* Top border */}
              <div className="absolute bottom-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div> {/* Bottom border */}
              <div className="absolute left-0 top-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div>  {/* Left border */}
              <div className="absolute right-0 bottom-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div> {/* Right border */}
            </div>
          ))}
        </div>

        {/* Banner content */}
        <div className={styles.content}>
          <h1 className="font-playfair-display">
            Elegant furniture,
            <span className="block">effortlessly

              <span className="text-[#4a5bc1] italic font-medium"> preserved</span> for
              life.</span>
          </h1>
          <p className={styles.description}>
            Experience our nano coating service that preserves and enhances your
            furniture and interiors for the long term.
          </p>
          <div className={styles.chatBtn}>
            <ChatButton  number="+971-581364466" color="text-white" />
          </div>
        </div>
        {/* <div className={styles.qoutecontainer}>
          <p className={styles.get_your_qoute}>Get your qoute</p>
          <HiOutlineArrowNarrowRight size={30} color="#010fad" />
        </div> */}
      </div>
   {/* {    mt-[-30rem] w-full bg-cover bg-no-repeat h-[435px] md:h-[50rem]} */}
      <div className="mt-[-14rem] md:mt-[-30rem] lg:mt-[-30rem] w-full bg-cover bg-no-repeat h-[435px] md:h-[50rem] bg-[url('/Pattern.svg')] md:bg-[url('/banner.svg')]"
  // style={{ backgroundImage: "url('/banner.svg')" }}
    >
      </div>
      <div className="flex flex-col mt-[-7.5rem] md:flex-row lg:flex-row justify-between w-full bg-white z-[1] gap-[8px]">
        <img src={Constants.HERO_IMAGE_LEFT} className="md:w-[33%] lg:w-[33%]" />

        {/* Video Thumbnail with Play Button */}
        <div
          className={`${"md:w-[33%] lg:w-[33%]"} ${styles.videoThumbnail}`}
          onClick={playFullscreenVideo}
        >
          <video
            src={Constants.VID_FILE}
            muted
            loop
            className={styles.videoPreview}
          ></video>
          <img src="./playBtn.svg" alt="Play" className={styles.playButton} />
        </div>

        <img src={Constants.HERO_IMAGE_RIGHT} className="md:w-[33%] lg:w-[33%]" />

        {/* Modal with Fullscreen Video */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true} // Makes sure modal closes when clicking outside
          ariaHideApp={false} // Use this only if you want to prevent accessibility-related warnings in development
          contentLabel="Video Player"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1000,
            },
            content: {
              width: "80%",
              maxWidth: "800px",
              margin: "auto",
              background: "black",
              border: "none",
              padding: 0,
              position: "relative",
              zIndex: 1001,
            },
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => closeModal()}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 2000, // Increase z-index to ensure it's above other elements
            }}
          >
            ✕
          </button>


          {/* Fullscreen Video */}
          <video
            src={Constants.VID_FILE}
            controls
            autoPlay={isVideoPlaying} // Autoplay only when modal is open
            className={styles.modalVideo}
          />
        </Modal>


      </div>


    </div>
  );
};

export default Banner;
