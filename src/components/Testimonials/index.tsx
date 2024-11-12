"use client";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ReactSimplyCarousel from "react-simply-carousel";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.carouselContainer}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            People <span className={styles.highlight}>love</span> us for our
            services.
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div
              onClick={() =>
                setActiveSlideIndex((prev) => Math.max(prev - 1, 0))
              }
              className={styles.backBtn}
            >
              <IoIosArrowRoundBack size={32} className={styles.arrowbtn} />
            </div>
            <div
              onClick={() =>
                setActiveSlideIndex((prev) =>
                  Math.min(prev + 1, testimonials.length - 1)
                )
              }
              className={styles.forwardBtn}
            >
              <IoIosArrowRoundForward className={styles.arrowbtn} size={32} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={2}
            itemsToScroll={2}
            forwardBtnProps={{
              style: { display: "none" },
              children: null,
            }}
            backwardBtnProps={{
              style: { display: "none" },
              children: null,
            }}
            responsiveProps={[
              {
                itemsToShow: 1,
                itemsToScroll: 1,
                maxWidth: 1080,

              },
              {
                itemsToShow: 2,
                itemsToScroll: 2,
                minWidth: 768,

              },
            ]}
            speed={400}
            easing="linear"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  imageSrc={testimonial.image}
                  title={testimonial.title}
                  review={testimonial.review}
                />
              </div>
            ))}
          </ReactSimplyCarousel>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Don Draper",
    location: "Palm Jumeirah, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    name: "Peggy Olson",
    location: "Bur Dubai, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    name: "Peggy Olson",
    location: "Bur Dubai, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    name: "Peggy Olson",
    location: "Bur Dubai, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    name: "Peggy Olson",
    location: "Bur Dubai, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    name: "Peggy Olson",
    location: "Bur Dubai, Dubai",
    image: "/user.svg",
    title: "Absolutely Immaculate and professional service",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
];
