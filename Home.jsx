'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Use default image from public/images
  const [image, setImage] = useState('/images/Portfolio.jpeg');

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className={styles.homeSection}>
      <div className={styles.gap} />

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(100, 0, 200, 0.2)' }}
        whileTap={{ scale: 0.98, backgroundColor: '#f3e5ff' }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
      >
        <div className={styles.avatarContainer}>
          <label htmlFor="avatar-upload" className={styles.frame}>
            <img src={image} alt="Avatar" className={styles.avatar} />
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </div>

        <h2 className={styles.subtitle}>
          Python Developer | AI Enthusiast | Azure Certified
        </h2>

        <p className={styles.description}>
          Building smart, scalable solutions using Python, machine learning, and Microsoft Azure. I'm also passionate about developing responsive and engaging web applications.
        </p>
      </motion.div>
    </section>
  );
}
