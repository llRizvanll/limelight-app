"use client";
import styles from "./originStory.module.css";

const OriginStorySection = () => {
    return (
        <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>




            <div className={styles.container}>


                <div className={styles.firstSection}>
                </div>
                <div className={styles.secondSection}>

             
                    <div className={`${styles.titleHolder} '`}>
                       <p>
                        Our <span className={styles.nanoCoating}> origin </span> Story.</p>
                         </div>

             


                    <div className={`${styles.indicators}`}>
                    <p>
                    Quedee Services is more than a brand—it’s a legacy. Founded on the principles instilled by its patriarch, an architect who envisioned a future where design could be both timeless and transformative, Quedee has been shaped over three generations into a trusted leader in the industry. What began with SDA Designs, crafting iconic spaces across India and the UAE, has grown into Quedee Services, a company founded to push the boundaries of home and business care.
                    With a focus on innovation, Quedee is setting a new standard in the GCC through advanced nano-coating solutions, protecting and preserving interiors and furniture for years to come. In partnership with Vetro Power, Quedee aims to evolve from high-quality fit-outs to full-spectrum home care, offering solutions like deep cleaning and exterior protection. Anchored in heritage, yet looking to the future, Quedee Services brings an unparalleled commitment to enhancing the spaces where people live, work, and thrive.
                            </p>
                        {/* <div className={styles.indicators}>

                            <h3>30+</h3>
                            <p>
                                YEARS OF ENHANCING HOME INTERIORS
                            </p>
                        </div> */}
                        {/* <div className={styles.indicators}>
                            <h3>200</h3>
                            <p>
                                HOME SERVICES DELIVERED & COUNTING
                            </p>
                        </div> */}
                    </div>

                </div>

            </div>


        </div>
    );
};

export default OriginStorySection;
