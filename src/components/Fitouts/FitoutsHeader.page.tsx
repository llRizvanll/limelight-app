// components/Banner.js
"use client"
import React, { useState } from "react";
import styles from "./Fitouts.module.css";
import ChatButton from "../Buttons/ChatButton";
import Modal from "react-modal";
// Modal.setAppElement("#__next");




const FitoutHeader = () => {
  const tabs = ["+971-524349169", "MAIL@QUDEE.AE"];

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
    videoElement.src = "./screen.mp4";
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
  const handleEmailClick = () => {
    console.log("maill");
    window.location.href = "mailto:mail@qudee.ae";
  };
  
  const handlePhoneClick = () => {
    window.location.href = "tel:+971-524349169";
  };
  
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className="container mx-auto text-center px-4 py-8 mt-[130px] relative sm:w-full md:w-4/5 grid gap-[32px]">

        {/* Banner content */}
        <div className={styles.content}>
          <span className="font-playfair-display">
    
         
            <span  className={`${"block font-playfair-display"} ${styles.contenth1}`}
            >
            Fitouts
              <span className="text-[#4a5bc1] italic font-medium"> designed</span> for function, style and aesthetic appeal.</span>
          </span>
          <p className={styles.description}>
          From offices to homes, our fitout solutions are tailored to your needs, blending functionality with style that’s a comfort.
          </p>
          <div className="flex flex-col gap-[16px] mt-[48px]">


            <div className={styles.contentaboutus}> CONTACT US:</div>

             <div className="flex flex-row space-between justify-center">

             <div
          className={styles.tabs}
        >
          {tabs.map((tab) => (

            <div onClick={tab.includes("@") ? handleEmailClick :  handlePhoneClick} key={tab} className=" flex relative w-[191px] px-4 py-2 mx-1 cursor-pointer text-[#010FAD] bg-[#ebecfc] font-lato text-sm font-normal text-center border-none">
                {/* Icon Condition */}
          <div className="mr-2">
            {tab.includes("@") ? (
              <img src="./mail.svg" className="text-[#010FAD] text-lg w-[24px] h-[24px]" />
              
            ) : (
              <img src="./call.svg" className="text-[#010FAD] text-lg w-[24px] h-[24px]" />
            )}
          </div>
              {tab}
              <div className="absolute top-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div>  {/* Top border */}
              <div className="absolute bottom-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div> {/* Bottom border */}
              <div className="absolute left-0 top-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div>  {/* Left border */}
              <div className="absolute right-0 bottom-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div> {/* Right border */}
            </div>
          ))}
        </div>
            
   
     </div>
     </div>

     
          {/* <div className={styles.chatBtn}>
            <ChatButton color="text-white" />
          </div> */}
        </div>
        {/* <div className={styles.qoutecontainer}>
          <p className={styles.get_your_qoute}>Get your qoute</p>
          <HiOutlineArrowNarrowRight size={30} color="#010fad" />
        </div> */}
      </div>



   <div className={styles.firstSectionPic }>

<img src="./fitoutshome.png" className="bg-cover h-[289px] md:h-[564px] lg:h[564px] w-[1440px]"  />
      </div>
  


    </div>
  );
};

export default FitoutHeader;
