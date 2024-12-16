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
      title: "Nano-coating service",
      description:
        "Long-lasting protection for your furniture and surfaces. Our advanced nano-coating technology shields against spills, stains, and wear, preserving the beauty of your interiors for years to come.",
      showArrow: true,
      link: "/",
      actionBtnTitle: "Go to nano-coating service",
    },
    {
      imageSrc: "/Layer_2.svg",
      imageSrcWeb: "/offer1web.svg",
      stepNumber: 2,
      title: "Fitout services",
      description:
        "Transform your spaces with precision and elegance. From concept to completion, we deliver bespoke fit-out solutions that combine functionality, style, and impeccable craftsmanship.",
      showArrow: true,
      link: "/fitouts",
      actionBtnTitle: "Go to fitout services",
    },
  ];

  return (
    // !pt-[88px] !mt-[88px]
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className={`${styles.container} ''`}>
        <div className={styles.headingholder}>
          <div className={styles.containerh2}>
            <span className={styles.containerh3}> Services </span> we offer.{" "}
          </div>
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
              link={step?.link}
              actionBtnTitle={step?.actionBtnTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferSection;
