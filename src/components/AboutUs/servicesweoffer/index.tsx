"use client";
import React from "react";
import styles from "./offer.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
// import ChatButton from "../Buttons/ChatButton";
// import FitStepCard from "./FitStepCard";
import useScreenType from "@/commonFunctions/useWindowSize";
import ServiceOfferCard from "./ServiceOfferCard";
// import StepCard from "./StepCard";

const ServiceOfferSection = () => {
    const steps = [
        {
            imageSrc: "/offer1.svg",
            imageSrcWeb: "/offer2web.svg",
            stepNumber: 1,
            title: "Interior design",
            description:
                "Our interior designers bring an eye for detail and a passion for creating inspiring spaces. We offer personalized designs tailored to your style, whether modern, contemporary, or traditional.",
            showArrow: true,
        },
        {
            imageSrc: "/Layer_2.svg",
            imageSrcWeb: "/offer1web.svg",
            stepNumber: 2,
            title: "Space Planning",
            description:
                "We prioritize maximizing your space's functionality and efficiency. Our experts excel in planning, considering traffic flow, furniture placement, and lighting to create practical, visually appealing spaces.",
            showArrow: true,
        },
    
    ];


    return (
        // !pt-[88px] !mt-[88px]
        <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
            <div className={`${styles.container} ''`}>
           
                <div className={styles.headingholder}>
                    <div className={styles.containerh2}>   
                        <span className={styles.containerh3}> Services </span> we offer. </div>

                </div>


            
<div className={styles.stepsContainer2}>

    {steps?.map((step) => (
      <ServiceOfferCard
        key={step.stepNumber}
        stepNumber={step.stepNumber}
        title={step.title}
        description={step.description}
        showArrow={step.showArrow}
        imageSrc={step?.imageSrc}
        imageSrcWeb={step?.imageSrcWeb}
      />
    ))}
</div>




            </div>

        </div>

    );
};

export default ServiceOfferSection;
