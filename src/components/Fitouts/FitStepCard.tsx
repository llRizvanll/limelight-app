import React from "react";
// import { useWindowSize } from "@/hooks/useWindowSize";
import styles from "./FitStepCard.module.css";
import { useWindowSize } from "@/commonFunctions/useWindowSize";

interface FitStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  showArrow?: boolean;
}

const FitStepCard: React.FC<FitStepCardProps> = ({ stepNumber, title, description, showArrow = false }) => {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;

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
