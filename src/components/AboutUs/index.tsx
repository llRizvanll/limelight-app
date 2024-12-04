

"use client"
import React from "react";
// import Card from "./Card";
import { FiCoffee, FiAirplay, FiAnchor } from "react-icons/fi";
import Card from "./middleCard";
import styles from "./card.module.css";
import OriginStorySection from "./Originstory";

const AboutUsSecondCard: React.FC = () => {
    const cards = [
        {
            icon: "/Vector-4.svg",
            iconCell: "/Vector-5.svg",
            heading: "Excellence in detail",
            description: "We believe that quality isn’t just a goal; it’s a commitment seen in every surface we protect.",
        },
        {
            icon: "/Vector-3.svg",
            iconCell: "/Vector-7.svg",
            heading: "Integrity in service",
            description: "Our promise is transparency and honesty, so you can trust every step we take together.",
        },
        {
            icon: "/arm.svg",
            iconCell: "/Vector-6.svg",
            heading: "Customer centricity",
            description: "Your satisfaction and peace of mind drive our dedication to create tailored, effective solutions.",
        },
    ];

    return (
        <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>


            <div className={styles.container}>

                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        iconCell={card.iconCell}
                        heading={card.heading}
                        description={card.description}
                    />
                ))}


                <div className={styles.divider}></div>
    
            </div>

        </div>
    );
};

export default AboutUsSecondCard;

