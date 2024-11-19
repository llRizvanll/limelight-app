'use client'
// import { useState } from 'react';
// import Link from 'next/link';
import { IoChevronDownSharp } from 'react-icons/io5';
// import styles from './Navbar.module.css';

// const NavBar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>
//         <img src="/Logo.svg" alt="Logo" />
//       </div>
//       <ul className={styles.menu}>
//         <li><Link href="/nano-coating">Nano Coating</Link></li>
//         <li className={styles.dropdown} onClick={toggleDropdown}>
//           Services
//           <IoChevronDownSharp className={styles.icon} />
//           {isDropdownOpen && (
//             <ul className={styles.dropdownMenu}>
//               <li><Link href="/service1">Service 1</Link></li>
//               <li><Link href="/service2">Service 2</Link></li>
//               <li><Link href="/service3">Service 3</Link></li>
//             </ul>
//           )}
//         </li>
//         <li><Link href="/about-us">About Us</Link></li>
//         <li><Link href="/faqs">FAQs</Link></li>
//       </ul>
//     </nav>
//   );
// };


// export default NavBar;

import { useState } from "react";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons from react-icons

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav 
    // className={styles.nav }
    className="flex items-center justify-between py-[32px] px-16"
    >
      <div className={styles.logo}>
        <img src="/Logo-Blue.svg" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      {/* <ul 
      className={`${styles.menu} ${styles.desktopMenu}`}
      // className="hidden md:flex items-center list-none gap-12 font-lato text-[18px] font-medium leading-6 tracking-[0.02em] text-left"

       >
        <li>Nano coating</li>
        <li className={styles.dropdown}>
          Fitouts <IoChevronDownSharp className={styles.icon} />
          <ul className={styles.dropdownMenu}>
            <li>Service 1</li>
            <li>Service 2</li>
          </ul>
        </li>
        <li>About us</li>
        <li>FAQs</li>
      </ul> */}
      <ul 
  className="hidden md:flex items-center list-none gap-12 font-lato text-[18px] font-medium leading-6 tracking-[0.02em] text-left"
>
  <li className="relative cursor-pointer">Nano coating</li>
  <li className="relative flex items-center cursor-pointer group">
    Fitouts 
    {/* <IoChevronDownSharp className="ml-[7px] mt-[2px]" />
    <ul className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-300 list-none py-2 min-w-[150px] font-lato text-[18px] font-medium leading-6 tracking-[0.02em] z-10 rounded-md shadow-lg">
      <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Service 1</li>
      <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">Service 2</li>
    </ul> */}
  </li>
  <li className="relative cursor-pointer">About us</li>
  <li className="relative cursor-pointer">FAQs</li>
</ul>


      {/* Mobile Menu Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleDrawer}>
        {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
        <ul className={styles.mobileMenu}>
          <li onClick={toggleDrawer}>Nano coating</li>
          <li className={styles.dropdown}>
          Services <IoChevronDownSharp className={styles.icon} />
            <ul className={styles.dropdownMenu}>
              <li onClick={toggleDrawer}>Service 1</li>
              <li onClick={toggleDrawer}>Service 2</li>
            </ul>
          </li>
          <li onClick={toggleDrawer}>About us</li>
          <li onClick={toggleDrawer}>FAQs</li>
        </ul>
      </div>
    </nav>
  );
}

