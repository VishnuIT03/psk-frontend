import React from 'react';
import styles from './AboutUs.module.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import PskOwnerImage from './PskOwner.jpg';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={PskOwnerImage} alt="PSK Owner" className={styles.ownerImage} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>About PSK Traders</h2>
        <p className={styles.description}>
          PSK Traders, founded on October 23, 2003, by R. Mohankumar in the name of Pradeepraja Agencies, later changed to PSK Traders, is renowned in Namakkal for selling high-quality poultry raw materials. Specializing in selling dry fish, grains, soya, and other de-oiled cakes, PSK Traders is committed to providing premium products to its customers.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <span>9080168896</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <span>psktradersnkl@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
