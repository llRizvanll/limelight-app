"use client"
import React from "react";
import styles from "./card.module.css";
import useScreenType from "@/commonFunctions/useWindowSize";

interface CardProps {
  icon:string;
  heading: string;
  description: string;
  iconCell?:string;
}

const Card: React.FC<CardProps> = ({ icon, heading, description , iconCell }) => {
    const screenType  = useScreenType();

    const isMobile = screenType === "MOBILE";
    console.log(isMobile , "isMobile")
  return (
    <div className={styles.card}>

      <div className={styles.iconContainer}>
      <img src={ isMobile ? iconCell : icon} alt="Vector" className={styles.vectorimg} />
    </div>


      <div className={styles.divider}></div>


      <h3 className={styles.heading}>{heading}</h3>


      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
