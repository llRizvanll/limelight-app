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
      answer: "Explanation about furniture compatibility.",
    },
    {
      question: "Will nano-coating affect the look or feel of my furniture?",
      answer: "Details about any possible effects.",
    },
    {
      question:
        "How does nano-coating compare to traditional protective sprays?",
      answer: "Comparison information here.",
    },
    {
      question: "Is nano-coating safe for children and pets?",
      answer: "Details about safety considerations.",
    },
    {
      question: "How much does nano-coating cost?",
      answer: "Pricing-related information.",
    },
    {
      question: "Can I remove nano-coating if I change my mind?",
      answer: "Explanation about removal options.",
    },
    {
      question: "Does nano-coating require special maintenance?",
      answer: "Maintenance requirements.",
    },
  ];

  const toggleAnswer = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
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
