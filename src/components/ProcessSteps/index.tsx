import React from "react";
import styles from "./ProcessSteps.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import ChatButton from "../Buttons/ChatButton";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Preparation and Cleaning",
      description:
        "Performing thorough preparation and cleaning to ensure optimal results. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      number: "2",
      title: "Nano Coating Application",
      description:
        "Applying the nano coating with precision for maximum effectiveness. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      number: "3",
      title: "Curing and Quality Checks",
      description:
        "Curing the coating and conducting rigorous quality checks. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (

    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div className={`${styles.container} '!pt-[88px] !mt-[88px]'`}>
    {/* <div className={styles.container}> */}
      <div className={styles.headingholder}>
       <div className={styles.containerh2} >Utmost care and protection in just a <span className={styles.containerh3}>simple steps.</span> </div>
        {/* <h2>Utmost care and protection in just a</h2>
        <h3>simple steps.</h3> */}
      </div>
      <div className={styles.stepsContainer}>
        <div className={styles.stepCard}>
          <div className={styles.stepCountShower}>1</div>
          <h4 className={styles.stepTitle}>Preparation and cleaning</h4>
          <p className={styles.stepDesc}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <div className={styles.arrow}>
            <IoIosArrowRoundForward className={styles.arrowIcon} size={25} />
          </div>
        </div>

        <div className={styles.stepCard}>
          <div className={styles.stepCountShower}>2</div>
          <h4 className={styles.stepTitle}>Nano coating application</h4>
          <p className={styles.stepDesc}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
          <div className={styles.arrow}>
            <IoIosArrowRoundForward className={styles.arrowIcon} size={25} />
          </div>
        </div>


        <div className={styles.stepCard}>
          <div className={styles.stepCountShower}>3</div>
          <h4 className={styles.stepTitle}>Curing and quality checks</h4>
          <p className={styles.stepDesc}>
            imply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>

      
      <div className={styles.stepFooter}>

      <h5 className={styles.bottomTitle}>Take a step towards elevating the durability of your furnishings.</h5>
      <ChatButton color="text-white" bgColor="bg-custom-blue" />
      </div>

      {/* {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={styles.step}>
            <div className={styles.circle}>{step.number}</div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </React.Fragment>
      ))} */}
    </div>

    </div>

  );
};

export default ProcessSteps;
