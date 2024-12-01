// components/Banner.js
"use client"
import React, { useState } from "react";
import styles from "./header.module.css";
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




  
  
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className="container mx-auto text-center px-4 py-8 mt-[130px] relative sm:w-full md:w-4/5 grid gap-[32px]">
   

        {/* Banner content */}
        <div className={styles.content}>
          <h1 className="font-playfair-display  ">
          Experience rooted in  
            <span className="block">effortlessly

              <span className="text-[#4a5bc1] italic font-medium"> 30 years</span> of mastery.</span>
          </h1>
          {/* <p className={styles.description}>
            Experience our nano coating service that preserves and enhances your
            furniture and interiors for the long term.
          </p> */}
          {/* <div className={styles.chatBtn}>
            <ChatButton color="text-white" />
          </div> */}
        </div>
        {/* <div className={styles.qoutecontainer}>
          <p className={styles.get_your_qoute}>Get your qoute</p>
          <HiOutlineArrowNarrowRight size={30} color="#010fad" />
        </div> */}
      </div>
   {/* {    mt-[-30rem] w-full bg-cover bg-no-repeat h-[435px] md:h-[50rem]} */}
      <div className="mt-[-14rem] md:mt-[-30rem] lg:mt-[-30rem] w-full bg-cover bg-no-repeat h-[435px] md:h-[50rem] bg-[url('/aboutheader.png')] md:bg-[url('/aboutheader.png')]"
  // style={{ backgroundImage: "url('/banner.svg')" }}
    >
      </div>



    </div>
  );
};

export default Banner;
