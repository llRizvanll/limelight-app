"use client";
import styles from "./BestInClass.module.css";

const BestInclass = () => {
  return (
    <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.firstSection}>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.titleHolder}>
          <h2>
            Best in class{" "}
            <span className={styles.nanoCoating}>nano coating service </span>for
            furniture and upholstery in the country.
          </h2>
        </div>
        <div className={styles.indicatorsContainer}>
          <div className={styles.indicators}>
            <h3>30+</h3>
            <p>years of enhancing home interiors</p>
          </div>
          <div className={styles.indicators}>
            <h3>200</h3>
            <p>home services delivered & counting</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BestInclass;
