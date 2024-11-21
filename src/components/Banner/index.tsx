// components/Banner.js
"use client" 
import React, { useState } from "react";
import styles from "./Banner.module.css";
import ChatButton from "../Buttons/ChatButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
// import Modal from "react-modal";
import Modal from "react-modal";

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
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className="container mx-auto text-center px-4 py-8 mt-0 relative sm:w-full md:w-4/5">
        <div
          className={styles.tabs}
        >
          {tabs.map((tab) => (

            <div key={tab} className="relative w-[120px] px-4 py-2 mx-1 cursor-pointer text-[#010FAD] bg-[#ebecfc] font-Lato text-sm font-normal text-center border-none">
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
            <ChatButton color="text-white" bgColor="bg-custom-blue" />
          </div>
        </div>
        <div className={styles.qoutecontainer}>
          <p className={styles.get_your_qoute}>Get your qoute</p>
          <HiOutlineArrowNarrowRight size={30} color="#010fad" />
        </div>
      </div>
      <div className={styles.bannerImage}>
      </div>

      <div className={styles.frameHolder}>
      <img src="./frame.png" className={styles.frameItem} />
      
      {/* Video Thumbnail with Play Button */}
      <div
        className={`${styles.frameItem} ${styles.videoThumbnail}`}
        onClick={openModal}
      >
        <video
          src="./screen.mp4"
          muted
          loop
          className={styles.videoPreview}
        ></video>
        <FaPlay className={styles.playButton} />
      </div>

      <img src="./frame2.png" className={styles.frameItem} />
      
      {/* Modal with Fullscreen Video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            position: "fixed", // Ensure overlay covers the entire viewport
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000, // Ensure overlay is on top
          },
          content: {
            width: "80%",
            maxWidth: "800px",
            margin: "auto",
            background: "black",
            border: "none",
            padding: 0,
            position: "relative", // Ensure content is positioned correctly
            zIndex: 1001, // Ensure content is on top of the overlay
          },
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Fullscreen Video */}
        <video
          src="./screen.mp4"
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
