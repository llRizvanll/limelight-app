"use client";
import { Constants } from "@/commonFunctions/Constants";
import ChatButton from "../Buttons/ChatButton";
// import styles from "../SplitSofaSection/SplitSofaSection.module.css";
import styles from "./contactCard.module.css";



export default function AboutBottomSection() {

    const handleEmailClick = () => {
        console.log("maill");
        window.location.href = Constants.MAIL_TO_;
      };
      
      const handlePhoneClick = () => {
        window.location.href = "tel:+971-581364466";
      };

    const tabs = [Constants.WHATSAPP_NUMBER, Constants.EMAIL_ID];
    return (
        <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>


            <div className={styles.splitSofaRoot}>
            

                <div className={styles.splitSofaBottom}>
                    <h3>
                    Turn your home space desires in to a reality, get in touch.
                    </h3>
                    <ChatButton number="+971-581364466" color="text-custom-blue" hoverolor='hover:bg-light-silver' bgColor="bg-light-silver" />
                </div>

                {/* <div className={styles.splitSofaBottomCard}> */}
                <div className="flex flex-col gap-[16px]">
            <div className={styles.contentaboutusBottom}> CONTACT US:</div>

             <div className="flex flex-row space-between justify-center">

             <div
          className={styles.tabs}
        >
          {tabs.map((tab) => (

            <div onClick={tab.includes("@") ? handleEmailClick:  handlePhoneClick} key={tab} className=" flex relative w-[191px] px-4 py-2 mx-1 cursor-pointer text-[#010FAD] bg-[#ebecfc] font-lato text-sm font-normal text-center border-none">
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

                 <div className="absolute left-0 top-0 w-[1px] h-[100%] bg-[#A6ABE2]"></div>  
                      <div className="absolute right-0 bottom-0 w-[1px] h-[100%] bg-[#A6ABE2]"></div> 
            </div>
          ))}
        </div>
            
   
     </div>
          </div>
 
        


            </div>
        </div>
    );
}






