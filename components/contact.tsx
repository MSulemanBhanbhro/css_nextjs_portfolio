// Contact.tsx
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { lusitana } from "@/components/fonts";
import styles from './Navbar.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h1 className={`${lusitana.className} ${styles.contactHeading}`}>
        Contact <span className={styles.contactHeadingAccent}>Me</span>
      </h1>

      <div className={styles.contactContainer}>
        {/* Email */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <MdEmail size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>ms5901562@gmail.com</h2>
        </div>

        {/* Phone */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <IoCallSharp size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>0342 - 0032995</h2>
        </div>

        {/* Location */}
        <div className={styles.contactItem}>
          <div className={styles.iconContainer}>
            <FaLocationDot size={38} />
          </div>
          <IoIosArrowForward size={30} className={styles.arrowIcon} />
          <h2 className={styles.contactInfo}>Naveed Arcade Saddar Karachi</h2>
        </div>

        <hr className={styles.separator} />

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <Link href={"https://www.facebook.com/profile.php?id=61553873587821&mibextid=ZbWKwL"} target="_blank">
            <div className={styles.socialLink}>
              <FaFacebook size={30} />
            </div>
          </Link>

          <Link href={"https://www.instagram.com/muhammadsuleman5526/profilecard/?igsh=a3ljYjIwdjRncml2"} target="_blank">
            <div className={styles.socialLink}>
              <FaInstagram size={30} />
            </div>
          </Link>

          <Link href={"https://www.linkedin.com/in/muhammad-suleman-2b58b9260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
            <div className={styles.socialLink}>
              <FaLinkedinIn size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
