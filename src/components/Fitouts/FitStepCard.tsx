import React from "react";
import styles from "./FitStepCard.module.css";
import useScreenType from "@/commonFunctions/useWindowSize";

interface FitStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  showArrow?: boolean;
  nextLine?: boolean; // Indicates if this card should use stepCard3
}

const FitStepCard: React.FC<FitStepCardProps> = ({
  stepNumber,
  title,
  description,
  showArrow = false,
  nextLine = false,
}) => {
  const screenType = useScreenType();
  const isMobile = screenType === "MOBILE";

  if (!isMobile && nextLine) {
    return (
      <div className={styles.stepCard3}>
        <div className={styles.stepCountShower}>{stepNumber}</div>
        <h4 className={styles.stepTitle}>{title}</h4>
        <p className={styles.stepDesc}>{description}</p>
      </div>
    );
  }

  return isMobile ? (
    <div className={styles.stepCard}>
      <div className={styles.stepCountShower}>{stepNumber}</div>
      <h4 className={styles.stepTitle}>{title}</h4>
      <p className={styles.stepDesc}>{description}</p>
    </div>
  ) : (
    <div className={styles.stepCard2}>
      <div className={styles.stepCountShower}>{stepNumber}</div>
      <h4 className={styles.stepTitle}>{title}</h4>
      <p className={styles.stepDesc}>{description}</p>
    </div>
  );
};

export default FitStepCard;
