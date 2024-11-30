'use client';
import styles from "./WellBeing.module.css";

const WellBeing = () => {
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
     
      <div className={`${styles.container} '!pb-[88px]'`}>
        <div className={`${styles.sectionFirst} ''`}>
          <h2>
            We care for your{" "}
            <span className={styles.wellBeing}>Well Being </span> and the
            earth’s.
          </h2>
          <p>
            Our compounds are safe, fume-free, and environmentally friendly,
            which is why we've partnered with the best to ensure the safety of
            your loved ones and the planet without compromise.
          </p>
        </div>
        <div className="flex justify-center items-center md:border-l md:border-[#dedddd] md:w-[70%] w-full">
          <div className={styles.gridContainer}>
            {/* <div className="flex flex-col items-center justify-center h-full border border-[#dedddd] gap-4 p-4"> */}
            <div className="flex flex-col items-center justify-center h-full gap-[16px] p-[64px] border-b border-r border-[#dedddd] font-lato"
            // border border-[#dedddd] border-t-0 border-b-0 gap-4 p-4 border-r-0 border-l-0"
            >
              <img src="/leaf.svg" alt="Leaf" />
              <p>Organic</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-[16px] p-[64px] border-b border-[#dedddd] font-lato">
            {/* <div className="flex flex-col items-center justify-center h-full border border-[#dedddd] border-t-0 border-b-0 gap-4 p-4"> */}
              <img src="/check.svg" alt="Premium" />
              <p>Premium</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-[16px] p-[64px] border-r border-[#dedddd] font-lato">
            {/* <div className="flex flex-col items-center justify-center h-full border border-[#dedddd] border-b-0 gap-[16px] p-4"> */}
              <img src="/odourless.svg" alt="odourless" />
              <p>Odourless</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-[16px] p-[64px] font-lato">
            {/* <div className="flex flex-col items-center justify-center h-full border border-[#dedddd] border-b-0 gap-4 p-4"> */}
              <img src="/safe.svg" alt="Safe" />
              <p>Safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellBeing;
