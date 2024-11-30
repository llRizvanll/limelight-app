import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./ProcessSteps.module.css";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  showArrow?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description, showArrow = false }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepCountShower}>{stepNumber}</div>
      <h4 className={styles.stepTitle}>{title}</h4>
      <p className={styles.stepDesc}>{description}</p>
      {showArrow && (
        <div className={styles.arrow}>
          <IoIosArrowRoundForward className={styles.arrowIcon} size={25} />
        </div>
      )}
    </div>
  );
};

export default StepCard;
