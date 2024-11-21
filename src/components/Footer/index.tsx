"use client";
import { IoLocationSharp } from "react-icons/io5";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
<footer className={`${styles.footer} font-lato`}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <img
              src="/Logo-Whitee.svg"
              alt="Limelight Logo"
              className={styles.logo}
            />
          </div>
        </div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              <li>Nano-coating</li>
              <li>Fit-outs</li>
              <li>About us</li>
              <li>FAQs</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <ul>
              <li>Contact us</li>
              <li>Terms of service</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 style={{ display: "flex", gap: "10px" }}>
            <IoLocationSharp size={30} />
            Reach us at
          </h3>
          <p>
            Green Tower - Deira - Riggat Al Buteen - Dubai - United Arab
            Emirates
          </p>
          <div
            style={{ border: "0.5px solid #DEDDDD", margin: "1rem 0rem" }}
          ></div>
          <p>+971-568384466</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div 
      className={`${styles.bottomSection} font-lato`}>
        <div className={styles.bottomSectionTextholder}>
          <p>Qudee maintenance & fitouts LLC 2024 ©</p>
          <p>All rights reserved</p>
        </div>
        <div className={styles.socialIcons}>
          <FaInstagram />
          <FaFacebook />
          <FaEnvelope />
        </div>
      </div>
    </footer>
  );
}
