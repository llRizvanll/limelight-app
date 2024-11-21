"use client";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ReactSimplyCarousel from "react-simply-carousel";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Set initialized to true after the component mounts
  useEffect(() => {
    setInitialized(true);
  }, []);


  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      {/* <div className={styles.carouselContainer}> */}
      <div className={`${styles.carouselContainer} '!pt-[88px] !mt-[88px] border-t border-[#66656333] w-full'`}>
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
        <div className={`${styles.wrapper} 'mt-[88px]'`}>
          {/* <ReactSimplyCarousel
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
          </ReactSimplyCarousel> */}

<ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={2}  // Always show 2 cards in the carousel
      itemsToScroll={1}
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
      ]}
      speed={400}
      easing="linear"
    >
      {testimonials.map((testimonial, index) => {
        const isActiveCard = index === activeSlideIndex;
        const isNextCard = index === (activeSlideIndex + 1) % testimonials.length;


        const cardClassNames = `transition-all ease-in-out duration-300 ${
          isActiveCard ? 'opacity-100 h-[auto] scale-100' : ''
        } ${
          isNextCard
            ? `transform scale-90 opacity-50 w-[30%] h-[40%] transition-transform duration-300 ease-in-out`
            : ''
        } ${!isActiveCard && !isNextCard ? 'opacity-100 h-[auto]' : ''}`;
        
        

        return (
          <div key={index} className={cardClassNames}>
            <TestimonialCard
              name={testimonial.name}
              location={testimonial.location}
              imageSrc={testimonial.image}
              title={testimonial.title}
              review={testimonial.review}
            />
          </div>
        );
      })}
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
