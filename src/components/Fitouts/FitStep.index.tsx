"use client";
import React from "react";
import styles from "./FitStepCard.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import ChatButton from "../Buttons/ChatButton";
import FitStepCard from "./FitStepCard";
import useScreenType from "@/commonFunctions/useWindowSize";
// import StepCard from "./StepCard";

const FitSteps = () => {
    const steps = [
        {
            stepNumber: 1,
            title: "Interior design",
            description:
                "Our interior designers bring an eye for detail and a passion for creating inspiring spaces. We offer personalized designs tailored to your style, whether modern, contemporary, or traditional.",
            showArrow: true,
        },
        {
            stepNumber: 2,
            title: "Space Planning",
            description:
                "We prioritize maximizing your space's functionality and efficiency. Our experts excel in planning, considering traffic flow, furniture placement, and lighting to create practical, visually appealing spaces.",
            showArrow: true,
        },
    
    ];

     const steps2 = [ 
      {
            stepNumber: 3,
            title: "Renovation and Remodeling",
            description:
                "Our renovation and remodeling services bring new life to your space. We work closely with you to understand your goals and create something fresh and exciting.",
            showArrow: false,
        },
        {
            stepNumber: 4,
            title: "Custom Joinery",
            description:
                "Our joinery team crafts custom furniture and fixtures tailored to your space, using quality materials and expert craftsmanship for lasting beauty and function.",
            showArrow: true,
        },
        {
            stepNumber: 5,
            title: "Professional Tile Installers",
            description:
                "Expert tile installations that enhance style and function, with precision craftsmanship in ceramic, porcelain, marble, and granite.",
            showArrow: false,
        },]

   const screenType  = useScreenType()
    const isMobile = screenType === "MOBILE"

    return (

        <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
            <div className={`${styles.container} '!pt-[88px] !mt-[88px]'`}>
                {/* <div className={styles.container}> */}
                <div className={styles.headingholder}>
                    <div className={styles.containerh2} >
                        Fit-out
                        <span className={styles.containerh3}> services </span> we offer. </div>

                </div>

<div className={styles.stepsContainer2}>
  {/* First line: Steps */}
  <div className={`${styles.stepSection} ${styles.steps}`}>
    {steps?.map((step) => (
      <FitStepCard
        key={step.stepNumber}
        stepNumber={step.stepNumber}
        title={step.title}
        description={step.description}
        showArrow={step.showArrow}
      />
    ))}
  </div>

  {/* Second line: Steps2 */}
  <div className={`${styles.stepSection} ${styles.stepCardweb}`}>
    {steps2?.map((step) => (
      <FitStepCard
        key={step.stepNumber}
        stepNumber={step.stepNumber}
        title={step.title}
        description={step.description}
        showArrow={step.showArrow}
        nextLine={true}
      />
    ))}
  </div>
</div>




            </div>

        </div>

    );
};

export default FitSteps;
