"use client";
import styles from "./BestInClass.module.css";

const BestInclass = () => {
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
    <div className={styles.container}>
      <div className={styles.firstSection}>
      </div>
      <div className={styles.secondSection}>
     
        {/* <div className={styles.titleHolder}> */}
        <div className={`${styles.titleHolder} 'md:w-[398px] md:h-[240px] lg:w-[398px] lg:h-[240px]'`}>
          <h2>
            Best in class{" "}
            <span className={styles.nanoCoating}>nano coating service </span>for
            furniture and upholstery in the country.
          </h2>
         

        </div>

        <span className="block border-b border-[#66656333]"></span>
     
    
        <div className={`${styles.indicatorsContainer}`}>
          <div className={styles.indicators}>
         
            <h3>30+</h3>
            <p>
              YEARS OF ENHANCING HOME INTERIORS
            </p>
          </div>
          <div className={styles.indicators}>
            <h3>200</h3>
            <p>
              HOME SERVICES DELIVERED & COUNTING
            </p>
          </div>
        </div>

      </div>

    </div>

   
    </div>
  );
};

export default BestInclass;
