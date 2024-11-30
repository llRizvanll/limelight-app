import React from "react";
import styles from "./ProtectionSection.module.css";
import SecondSectionContainer from "./SectionCard";


const ProtectionSection = () => {

  const sectionData = [
    {
      imageSrc: "/hand.svg",
      altText: "Pet incurred spills",
      heading: "Healthier living spaces",
      content:
        "Our coatings create an invisible barrier that repels dust, allergens, and pollutants, contributing to a cleaner and healthier home.",
    },
    {
      imageSrc: "/longlasting.svg",
      altText: "Pet incurred spills",
      heading: "Long lasting protection",
      content:
        "Nano coatings shield your furniture and surfaces from daily wear, stains, and spills, ensuring they stay pristine for years.",
    },
    {
      imageSrc: "/peace.svg",
      altText: "Pet incurred spills",
      heading: "Peace of mind",
      content:
        "Say goodbye to constant cleaning. Nano coating reduces dirt build-up, making your surfaces easier to maintain with minimal effort.",
    },
  ];

  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      
      <div className={`${styles.container} 'mx-2 2xl:mx-32 !mt-[88px] border-t border-[#66656333] w-full 
      !pb-[88px] !mb-[88px] border-b w-full'`}>
      {/* <span className=" flex justify-center " /> */}
      <div className={styles.firstSection}>
        <h1 className={styles.highlight1}>
          Retain the <span className={styles.highlight}>original appeal</span>{" "}
          of your furnishing forever.
        </h1>
        <p className={styles.description}>
          Spotless furniture protection for all types of upholstery materials,
          achieved with our state-of-the-art professionalism and advanced
          practices.
        </p>
        <h3 className={styles.protectTitle}> PROTECT AGAINST:</h3>
        <div className={styles.protectList}>
          <div className={styles.protectItem}>
            <img
              src="/food.svg"
              alt="Food & beverage spills"
              className={styles.icon}
            />
            <p>Food & beverage spills</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.protectItem}>
            <img
              src="/accidental.svg"
              alt="Accidental spills"
              className={styles.icon}
            />
            <p>Accidental spills</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.protectItem}>
            <img
              src="/pet.svg"
              alt="Pet incurred spills"
              className={styles.icon}
            />
            <p>Pet incurred spills</p>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>

      {/* <div className={styles.secondSection}> */}
      {sectionData.map((item:any, index:any) => (
        <SecondSectionContainer
          key={index}
          imageSrc={item.imageSrc}
          altText={item.altText}
          heading={item.heading}
          content={item.content}
        />
      ))}


    {/* </div> */}

        {/* <div className={styles.secondSectionContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/hand.svg"
              alt="Pet incurred spills"
              className={styles.image}
            />
          </div>
          <div className={styles.livingSpace}>
            <h3>Healthier living spaces</h3>
            <p>
              Our coatings create an invisible barrier that repels dust,
              allergens, and pollutants, contributing to a cleaner and healthier
              home.
            </p>
          </div>
        </div>

        <div className={styles.secondSectionContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/longlasting.svg"
              alt="Pet incurred spills"
              className={styles.image}
            />
          </div>
          <div className={styles.livingSpace}>
            <h3>Long lasting protection</h3>
            <p>
              Nano coatings shield your furniture and surfaces from daily wear,
              stains, and spills, ensuring they stay pristine for years.
            </p>
          </div>
        </div>

        <div className={styles.secondSectionContainer}>
          <div className={styles.imageContainer}>
            <img
              src="/peace.svg"
              alt="Pet incurred spills"
              className={styles.image}
            />
          </div>
          <div className={styles.livingSpace}>
            <h3>Peace of mind</h3>
            <p>
              Say goodbye to constant cleaning. Nano coating reduces dirt
              build-up, making your surfaces easier to maintain with minimal
              effort.
            </p>
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default ProtectionSection;
