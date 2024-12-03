"use client";
import ChatButton from "../Buttons/ChatButton";
// import styles from "../SplitSofaSection/SplitSofaSection.module.css";
import styles from "./Fitouts.module.css";
export default function FitoutBottomSection() {
    const tabs = ["+971-581364466", "MAIL@QUDEE.AE"];
  return (
    <div className={`${styles.rootSofa} 'mx-2 2xl:mx-32'`}>


    <div className={styles.splitSofaRoot}>



      <div className={styles.splitSofaBottom}>
      <div className={styles.content}>
          <p className={styles.descriptionBottom}>
          Transform your space with custom-fit solutions that blend practicality, design, and visual appeal.
          </p>
          <div className="flex flex-col gap-[16px] mt-[48px]">
            <div className={styles.contentaboutusBottom}> CONTACT US:</div>

             <div className="flex flex-row space-between justify-center">

             <div
          className={styles.tabs}
        >
          {tabs.map((tab) => (

            <div key={tab} className=" flex relative w-[191px] px-4 py-2 mx-1 cursor-pointer text-[#010FAD] bg-[#ebecfc] font-lato text-sm font-normal text-center border-none">
                {/* Icon Condition */}
          <div className="mr-2">
            {tab.includes("@") ? (
              <img src="./mail.svg" className="text-[#010FAD] text-lg w-[24px] h-[24px]" />
              
            ) : (
              <img src="./call.svg" className="text-[#010FAD] text-lg w-[24px] h-[24px]" />
            )}
          </div>
              {tab}
              <div className="absolute top-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div>  {/* Top border */}
              <div className="absolute bottom-0 left-[-2px] w-[calc(100%+4px)] h-[1px] bg-[#A6ABE2]"></div> {/* Bottom border */}
              <div className="absolute left-0 top-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div>  {/* Left border */}
              <div className="absolute right-0 bottom-[-2px] w-[1px] h-[calc(100%+4px)] bg-[#A6ABE2]"></div> {/* Right border */}
            </div>
          ))}
        </div>
            
   
     </div>
          </div>

     
          {/* <div className={styles.chatBtn}>
            <ChatButton color="text-white" />
          </div> */}
        </div>
      </div>


      </div>
    </div>
  );
}



