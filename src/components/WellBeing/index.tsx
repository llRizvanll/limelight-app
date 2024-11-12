import styles from "./WellBeing.module.css";

const WellBeing = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.sectionFirst}>
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
        <div className={styles.sectionSecond}>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <img src="/leaf.svg" alt="Leaf" />
              <p>Organic</p>
            </div>
            <div className={styles.card}>
              <img src="/check.svg" alt="Premium" />
              <p>Premium</p>
            </div>
            <div className={styles.card}>
              <img src="/odourless.svg" alt="odourless" />
              <p>Odourless</p>
            </div>
            <div className={styles.card}>
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
