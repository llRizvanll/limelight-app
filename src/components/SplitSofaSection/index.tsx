"use client";
import ChatButton from "../Buttons/ChatButton";
import styles from "./SplitSofaSection.module.css";

export default function SplitSofaSection() {
  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>


    <div className={styles.splitSofaRoot}>

      
    <div className={styles.splitSofa}>

<div className={styles.textLeft}>
  <div className="font-playfair-display text-[22.88px] lg:text-[53.61px]  lg:leading-[64.33px] md:text-[53.61px]  md:leading-[64.33px] font-medium leading-[27.46px] tracking-[0.02em] text-left text-decoration-skip-ink-none">
<div>From</div>
<div>vulnerable to</div>
 </div>

</div>


<div className={styles.textRight}>
  <h2>spill resistant.</h2>
</div>
   </div>


      <div className={styles.splitSofaBottom}>
        <h3>
          Make your furnishing stain resistant and long lasting. See the
          difference everyday.
        </h3>
        <ChatButton  number="+971-581364466" color="text-custom-blue" hoverolor='hover:bg-light-silver' bgColor="bg-light-silver" />
      </div>


      </div>
    </div>
  );
}



