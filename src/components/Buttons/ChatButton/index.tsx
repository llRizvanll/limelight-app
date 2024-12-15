'use client';

import styles from './ChatButton.module.css';

interface IProps {
  color: string;
  bgColor?: string;
  hoverolor?:string;
  number?:string;
}

const ChatButton = ({ color, bgColor, hoverolor , number }: IProps) => {
  const whatsappNumber = number;

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className={styles.chatButtonContainer}>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button
          className={`${styles.chatButton} ${color} ${bgColor || 'bg-custom-blue'} ${hoverolor ||  'hover:bg-black'} ${hoverolor  ? 'p-0' : 'p-[14px]'}`}
          style={{
            backgroundColor: bgColor, // Inline style for bgColor if needed
          }}
        >
          Chat on WhatsApp
        </button>
      </a>
    </div>
  );
};

export default ChatButton;
