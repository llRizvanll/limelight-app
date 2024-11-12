"use client";
import styles from "./BestInCompetition.module.css";

const BestInCompetition = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>
            We’re the <span>best </span> and <span>class apart </span>from
          </h2>
          <h2 className={styles.heading}>our competition.</h2>
        </div>
        <div style={{width:"100%"}}>
          <div className={styles.comparisonTable}>
            <div className={`${styles.row} ${styles.header}`}>
              <div className={`${styles.cell} ${styles.title}`}>FEATURES</div>
              <div
                className={`${styles.cell} ${styles.title} ${styles.middleHeading}`}
              >
                QUDEE NANO-COATING
              </div>
              <div className={`${styles.cell} ${styles.title}`}>
                OTHER NANO-COATING
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Versatility</div>
              <div className={styles.cell}>
                Ideal for living rooms, sofas, rugs, entire villas, office
                spaces, bedrooms, and/or individual pieces
              </div>
              <div className={styles.cell}>
                Furniture pieces, offices, bed, etc.
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Eco-friendly coating solution</div>
              <div className={styles.cell}>✔</div>
              <div className={styles.cell}>–</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Odourless</div>
              <div className={styles.cell}>✔</div>
              <div className={styles.cell}>Not at all</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Antimicrobial</div>
              <div className={styles.cell}>✔</div>
              <div className={styles.cell}>No guarantee</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Long lasting</div>
              <div className={styles.cell}>Warranty up to 2 years</div>
              <div className={styles.cell}>6 months warranty only</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Professional team</div>
              <div className={styles.cell}>
                Each member of our fleet is a trained professional and
                well-versed with mannerism
              </div>
              <div className={styles.cell}>Maybe, maybe not</div>
            </div>
            <div className={styles.row}>
              <div className={styles.cell}>Cost effectiveness</div>
              <div className={styles.cell}>
                Services starting for as low as 99 AED
              </div>
              <div className={styles.cell}>Expensive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestInCompetition;
