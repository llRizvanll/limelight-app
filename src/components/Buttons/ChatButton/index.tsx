"use client";

import styles from "./ChatButton.module.css";

interface IProps {
  color: string;
  bgColor?: string;
  hoverolor?: string;
  number?: string;
}

const ChatButton = ({ color, bgColor, hoverolor, number }: IProps) => {
  const whatsappNumber = number;

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const sendMessage = () => {
    let url = 'whatsapp://send?text=Hello&phone='+{whatsappNumber};
    window.open(url, '_blank'); 
  };

  

  return (
    <div className={styles.chatButtonContainer}>
      {/* <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> */}
        <button
          className={`${styles.chatButton} ${color} ${
            bgColor || "bg-custom-blue"
          } ${hoverolor || "hover:bg-black"} ${hoverolor ? "p-0" : "p-[14px]"}`}
          style={{
            backgroundColor: bgColor, // Inline style for bgColor if needed
          }}
          onClick={sendMessage}
        >
          Chat on WhatsApp
        </button>
      {/* </a> */}
    </div>
  );
};

export default ChatButton;
