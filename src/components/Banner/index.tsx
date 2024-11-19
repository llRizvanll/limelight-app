// components/Banner.js

import React from "react";
import styles from "./Banner.module.css";
import ChatButton from "../Buttons/ChatButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  const tabs = ["SOFA SETS", "CARPETS", "DRAPES", "UPHOLSTERY"];

  return (
    <div className={styles.root}>
      <div className={styles.container}>
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
            
            <span className={styles.highlight}> preserved</span> for
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
        <img src="./frame2.png" className={styles.frameItem} />
        <img src="./frame2.png" className={styles.frameItem} />
      </div>
    </div>
  );
};

export default Banner;
