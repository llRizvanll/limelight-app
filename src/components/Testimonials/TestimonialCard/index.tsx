import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ name, location, imageSrc, title, review }:any) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img
          src={imageSrc || "/user.svg"} // Fallback to default image if no imageSrc is provided
          alt={name}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
