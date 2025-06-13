'use client';

import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className={styles.aboutCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className={styles.aboutText}>
          I'm <strong>Edupalli Likhitha Sai</strong>, a passionate and results-driven <strong>Python Developer</strong> specializing in <strong>Artificial Intelligence</strong> and <strong>intelligent systems</strong>.
        I have a solid foundation in Python programming, machine learning, and cloud platforms like <strong>Microsoft Azure</strong>, holding the <strong>AI Fundamentals certification</strong>.
        <br /><br />
        I enjoy solving complex problems and building smart, scalable solutions that drive real impact.
          </p>
      </motion.div>
    </section>
  );
}
