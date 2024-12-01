"use client";
import styles from "./BestInCompetition.module.css";
import DoneIcon from '@mui/icons-material/Done';
const BestInCompetition = () => {
  // background: #3B3A37;

  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
            <div className={`${styles.container} '!pt-[88px] !mt-[88px] border-t border-[#66656333] w-full'`}>
      {/* <div className={styles.container}> */}
        <div>
          <h2 className={styles.heading}>
            We’re the <span>best </span> and <span>class apart </span>from
          </h2>
          <h2 className={styles.heading}>our competition.</h2>
        </div>
        {/* <div style={{width:"100%"}} className="overflow-x-auto touch-auto">
          <div className={styles.comparisonTable}> */}
    <div className="w-full overflow-x-hidden">
  {/* <!-- This div is the outer wrapper to prevent scrolling for the entire page --> */}
  <div className="overflow-x-auto sm:overflow-x-auto">
    <div className="comparisonTable min-w-[1000px]">
      <div className={`${styles.row} ${styles.header}`}>
        <div className={`${styles.cell} ${styles.title}font-bold text-[#666563]`}>FEATURES</div>
        <div className={`${styles.cell} ${styles.title} ${styles.middleHeading}font-bold text-[#010FAD]`}>
          QUDEE NANO-COATING
        </div>
        <div className={`${styles.cell} ${styles.title}font-bold text-[#666563]`}>
          OTHER NANO-COATING
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell}font-normal text-[#3B3A37]`}>Versatility</div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>
          Ideal for living rooms, sofas, rugs, entire villas, office spaces, bedrooms, and/or individual pieces
        </div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>
          Furniture pieces, offices, bed, etc.
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Eco-friendly coating solution</div>
        <div className={`${styles.cell}`}><DoneIcon /></div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>–</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Odourless</div>
        <div className={`${styles.cell}`}><DoneIcon /></div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Not at all</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Antimicrobial</div>
        <div className={`${styles.cell}`}><DoneIcon /></div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>No guarantee</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Long lasting</div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Warranty up to 2 years</div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>6 months warranty only</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Professional team</div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>
          Each member of our fleet is a trained professional and well-versed with mannerism
        </div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Maybe, maybe not</div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>Cost effectiveness</div>
        <div className={`${styles.cell} font-normal text-[#3B3A37]`}>
          Services starting for as low as 99 AED
        </div>
        <div className={styles.cell}>Expensive</div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default BestInCompetition;
