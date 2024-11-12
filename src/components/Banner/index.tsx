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
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <div key={tab} className={`${styles.tabButton}`}>
              {tab}
            </div>
          ))}
        </div>

        {/* Banner content */}
        <div className={styles.content}>
          <h1>
            Elegant furniture,
            <span className={styles.highlight}>effortlessly preserved</span> for
            life.
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
