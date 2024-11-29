import React from "react";
import styles from "./ProtectionSection.module.css";

interface SecondSectionContainerProps {
  imageSrc: string;
  altText: string;
  heading: string;
  content: string;
}

const SecondSectionContainer: React.FC<SecondSectionContainerProps> = ({
  imageSrc,
  altText,
  heading,
  content,
}) => {
  return (
    <div className={styles.secondSectionContainer}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={altText} className={styles.image} />
      </div>
      <div className={styles.livingSpace}>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SecondSectionContainer;
