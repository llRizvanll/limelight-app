"use client";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import styles from "./FAQs.module.css"; // Import the CSS module

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does nano-coating last on my furniture?",
      answer:
        "Nano-coating typically lasts between 12-24 months, depending on the type of surface and the level of use. For optimal protection, we recommend regular assessments to ensure lasting performance.",
    },
    {
      question: "Can nano-coating be applied to all types of furniture?",
      answer:
        "Yes, our nano-coating solutions are versatile and can be applied to a wide range of surfaces, including fabric, leather, wood, and glass. During your consultation, we assess which surfaces are best suited for coating.",
    },
    {
      question: "Will nano-coating affect the look or feel of my furniture?",
      answer:
        "No, nano-coating is transparent and does not alter the appearance or texture of your furniture. It enhances durability without compromising comfort or aesthetics.",
    },
    {
      question:
        "How does nano-coating compare to traditional protective sprays?",
      answer:
        "Unlike traditional sprays, nano-coating forms a stronger, long-lasting bond with surfaces, providing superior resistance to stains and damage. It requires fewer reapplications and offers more comprehensive protection.",
    },
    {
      question: "Is nano-coating safe for children and pets?",
      answer:
        "Yes, our nano-coating solutions are safe, non-toxic, and eco-friendly, making them ideal for households with children and pets.",
    },
    {
      question: "How much does nano-coating cost?",
      answer:
        "The cost of nano-coating varies based on the type and size of the surfaces being treated. For a custom quote, we recommend scheduling a consultation where we can discuss your specific needs.",
    },
    {
      question: "Can I remove nano-coating if I change my mind?",
      answer:
        "Nano-coating is designed to be durable but not permanent. If needed, surfaces can be professionally stripped and recoated or left to gradually wear off over time.",
    },
    {
      question: "Does nano-coating require special maintenance?",
      answer:
        "Nano-coated surfaces require less frequent cleaning, as they resist stains and dust accumulation. For best results, we’ll provide maintenance guidelines specific to each coated surface.",
    },
  ];

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      <div
        id="faq-section"
        className={`${styles.container} '!pt-[88px] !mt-[88px] border-t border-[#66656333] w-full'`}
      >
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItemContainer}>
              <div key={index} className={styles.faqItem}>
                <div
                  onClick={() => toggleAnswer(index)}
                  className={styles.question}
                >
                  {faq.question}
                  {openIndex !== index ? <BsPlusLg /> : <RiCloseLargeLine />}
                </div>
                {openIndex === index && (
                  <div className={styles.answer}>{faq.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
