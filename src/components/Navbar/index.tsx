"use client";
import React from "react";

import { IoChevronDownSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons
import { SwipeableDrawer } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { smoothScroll } from "@/commonFunctions/Constants";
// import  useRouter  from 'next/router';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
export default function NavBar() {
  // const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      // Prevent toggling for certain key events like tab or shift
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(isOpen);
    };

  // Track scroll direction to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the navbar if scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide the navbar if scrolling down
        setIsNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  

  // const navigateToHome = () => {
  //   router.push('/');
  // };

  // const navigateToFitouts = () => {
  //   router.push('/fitouts');
  // };

  return (
    <nav
      className={`${styles.navbar} ${
        isNavbarVisible ? styles.visible : styles.hidden
      } flex items-center justify-between my-[29px] mx-[24px] px-[20px] py-[14px] shadow-custom rounded-[12px]
    md:my-0 md:mx-0 md:px-0 md:py-0 md:shadow-none md:pt-[32px] md:pr-[80px] md:pb-[24px] md:pl-[120px]`}
      onClick={isDrawerOpen ? () => setIsDrawerOpen(false) : undefined}
    >
      <div className={styles.logo}>
        {/* <!-- Image for small screens (sm) --> */}
        <Link href="/">
          <img src="/mobileLogo.svg" alt="Logo" className="block sm:hidden" />
        </Link>

        {/* <!-- Image for medium (md) and large (lg) screens --> */}

        <Link href="/">
          <img
            src="/Logo-Blue.svg"
            alt="Logo"
            className="hidden sm:block md:block"
          />
        </Link>
      </div>

      <ul className="hidden md:flex items-center list-none gap-12 font-lato text-[18px] font-medium leading-6 tracking-[0.02em] text-left">
        {/* <li className="relative cursor-pointer text-[#3B3A37]">Nano coating</li> */}
        <Link href="/">
          <li className="relative cursor-pointer text-[#3B3A37]">
            Nano coating
          </li>
        </Link>
        <Link href="/fitouts">
          <li className="relative flex items-center cursor-pointer group  text-[#3B3A37]">
            Fitouts
          </li>{" "}
        </Link>
        <Link href="/aboutus">
          <li className="relative cursor-pointer  text-[#3B3A37]">About us</li>
        </Link>
        {/* <li className="relative cursor-pointer  text-[#3B3A37]">FAQs</li> */}
        {/* <Link href="#faq-section">   <li className="relative cursor-pointer  text-[#3B3A37]">FAQs</li></Link> */}

        <li
          className="relative cursor-pointer text-[#3B3A37]"
          onClick={() => {
            const faqSection = document.getElementById("faq-section");
            if (faqSection) {
              smoothScroll(faqSection, 1000); // Scroll over 2 seconds
            }
          }}
        >
          FAQs
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleDrawer(true)}>
        {!isDrawerOpen && <FiMenu size={24} />}
      </div>

      {/* <div className={styles.hamburgerIconClose} onClick={toggleDrawer}>
        <FiX size={24} />
      </div> */}
      <SwipeableDrawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%", // Sets the drawer's width
          },
        }}
        anchor={"right"}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {" "}
        <ul className={styles.mobileMenu}>
          <li>
            {isDrawerOpen && (
              // <div className={styles.hamburgerIconClose} onClick={toggleDrawer}>

              <div className="flex items-center justify-between space-x-4">
                <img
                  src="/mobileLogo.svg"
                  alt="Logo"
                  className="block sm:hidden"
                />
                <FiX size={24} />
              </div>
            )}
          </li>

          <Link href="/">
            <li onClick={() => {}}>Nano coating</li>
          </Link>
          {/* <li onClick={() => { }}>Nano coating</li> */}
          <Link href="/fitouts">
            <li className={styles.dropdown}>
              Fitouts
              {/* <IoChevronDownSharp className={styles.icon} />
            <ul className={styles.dropdownMenu}>
              <li onClick={() => { }}>Service 1</li>
              <li onClick={() => { }}>Service 2</li>
            </ul> */}
            </li>
          </Link>
          <Link href="/aboutus">
            {" "}
            <li onClick={() => {}}>About us</li>
          </Link>
          {/* <li onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}>FAQs</li> */}
          <Link href="#faq-section">
            {" "}
            {/* <li onClick={() => {}}>FAQs</li> */}
            <li
              onClick={() => {
                const faqSection = document.getElementById("faq-section");
                if (faqSection) {
                  smoothScroll(faqSection, 2000); // Scroll over 2 seconds
                }
              }}
            >
              FAQs
            </li>
          </Link>
        </ul>
      </SwipeableDrawer>
    </nav>
  );
}
