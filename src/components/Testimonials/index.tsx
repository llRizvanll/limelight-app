"use client";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ReactSimplyCarousel from "react-simply-carousel";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import ChatButton from "../Buttons/ChatButton";
interface Testimonial {
  name?: boolean;
}

const Testimonials: React.FC<Testimonial> = ({ name }) => {



  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
const fitouts = true
  // Set initialized to true after the component mounts
  useEffect(() => {
    setInitialized(true);
  }, []);


  return (
    <div className={`${styles.root} 'mx-2 2xl:mx-32'`}>
      {/* <div className={styles.carouselContainer}> */}
      <div className={`${styles.carouselContainer} '!pt-[88px] !mt-[88px] border-t border-[#66656333] w-full'`}>
        {/* <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-[24px] md:mb-[80px] lg:mb-[80px] items-center ml-[25%] mr-[25%] md:ml-block md:mr-block lg:ml-block lg:mr-block"> */}
        <div className="flex flex-col ml-[25%] mr-[25%] md:flex-row lg:flex-row justify-between mb-[24px] md:mb-[80px] lg:mb-[80px] items-center md:ml-0 md:mr-0 lg:ml-0 lg:mr-0">

          <h2 className={styles.heading}>
            People <span className="text-[#414BC1] italic"> love </span> us for our services.
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
              className="border border-[#414BC1] h-[64px] w-[64px] rounded-full  justify-center items-center hidden sm:flex"
            >
              <IoIosArrowRoundBack size={32} className={styles.arrowbtn} />
            </div>
            <div
              onClick={() =>
                setActiveSlideIndex((prev) =>
                  Math.min(prev + 1, testimonialsData.length - 1)
                )
              }
               className="border border-[#414BC1] h-[64px] w-[64px] rounded-full justify-center items-center hidden sm:flex"
            >
              <IoIosArrowRoundForward className={styles.arrowbtn} size={32} />
            </div>
          </div>
        </div>
        <div className={`${styles.wrapper} 'mt-[88px]'`}>
  

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
      {testimonialsData.map((item, index) => {
        const isActiveCard = index === activeSlideIndex;
        const isNextCard = index === (activeSlideIndex + 1) % testimonialsData.length;


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
              name={item.name}
              location={item.location}
              imageSrc={item.image}
              title={item.title}
              review={item.review}
            />
          </div>
        );
      })}
    </ReactSimplyCarousel>


   

        </div>

        {name &&
        <div className={styles.splitSofaBottom}>
        <h3>
          Make your furnishing stain resistant and long lasting. See the
          difference everyday.
        </h3>
        <ChatButton number="+971-581364466" color="text-custom-blue" hoverolor='hover:bg-light-silver' bgColor="bg-light-silver" />
      </div>}





      </div>
     
    </div>
  );
}

export default Testimonials;

export const testimonialsData = [
  {
    name: "Yousef Imtiyaz",
    location: "Palm Jumerah, Dubai",
    image: "/image.svg",
    title: `“Practical and worth every Dirham!”`,
    review:
      `“Qudee's nano-coating has been a game-changer for my home. My furniture now stays spotless and protected, making maintenance effortless and preserving its elegance.“`,
  },
  {
    name: "Mohammed Rizzath",
    location: "Al Nahda, Sharjah",
    image: "/image-1.svg",
    title: `“Gave my interiors and polished look.”`,
    review:
      `“Thanks to Qudee’s nano-coating service, my interiors look flawless and stay that way even with heavy use. It’s the best decision I’ve made to keep my space looking pristine.“`,
  },
  {
    name: "Ziad Dardary",
    location: "Yas Island, Abu Dhabi",
    image: "/image-1.svg",
    title: `“Every detail was handled with professionalism.”`,
    review:
      `“The attention to detail in Qudee’s fit-out services is unmatched. Every element of my office space reflects style and sophistication, making it a pleasure to work in.“`,
  },
  {
    name: "Dalia Bahii",
    location: "Derra, Dubai",
    image: "/image-3.svg",
    title: `“My villa’s fit-out is now a masterpiece.”`,
    review:
      `“From start to finish, the Qudee team was professional and meticulous. The fit-out for my villa is not only functional but also stunningly designed—it’s become the centerpiece of my home.“`,
  },
  {
    name: "Mohamed Marfin",
    location: "Bur Dubai, Dubai",
    image: "/image-2.svg",
    title: `“Design blends functionality and Luxury perfectly.”`,
    review:
      `“Qudee transformed my apartment with their expert fit-out services. The design blends functionality and luxury perfectly, creating a space that feels both practical and sophisticated.“`,
  },
  // {
  //   name: "Peggy Olson",
  //   location: "Bur Dubai, Dubai",
  //   image: "/user.svg",
  //   title: `“Absolutely Immaculate and professional service”`,
  //   review:
  //     `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.“`,
  // },
];
