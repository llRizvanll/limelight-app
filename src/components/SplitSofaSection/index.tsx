"use client";
import ChatButton from "../Buttons/ChatButton";
import styles from "./SplitSofaSection.module.css";

export default function SplitSofaSection() {
  return (
    <div className={styles.root}>
    <div className={styles.splitSofaRoot}>
      <div className={styles.splitSofa}>
        <div className={styles.textLeft}>
          <div>
            <h2>From</h2>
            <h2>vulnerable to</h2>
          </div>
        </div>
        <div className={styles.textRight}>
          <h2>spill resistant.</h2>
        </div>
      </div>
      <div className={styles.splitSofaBottom}>
        <h3>
          Make your furnishing stain resistant and long lasting. See the
          difference everyday.
        </h3>
        <ChatButton color="text-custom-blue" bgColor="bg-light-silver" />
      </div>
      </div>
    </div>
  );
}
