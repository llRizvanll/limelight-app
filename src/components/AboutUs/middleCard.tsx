import React from "react";
import styles from "./card.module.css";

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, description }) => {
  return (
    <div className={styles.card}>
      {/* Icon */}
      <div className={styles.icon}>{icon}</div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Heading */}
      <h3 className={styles.heading}>{heading}</h3>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
