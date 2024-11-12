'use client'
import styles from './ChatButton.module.css';
interface IProps{
    color:string;
    bgColor:string
}
const ChatButton = ({color,bgColor}:IProps

) => {
  const whatsappNumber = '11234567890'; 

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className={styles.chatButtonContainer}>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className={`${styles.chatButton} ${color} ${bgColor}` }>
          Chat on WhatsApp
        </button>
      </a>
    </div>
  );
};

export default ChatButton;
