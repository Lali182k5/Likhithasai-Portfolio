'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isClient, setIsClient] = useState(false); // hydration guard

  useEffect(() => {
    // Hydration-safe mount check
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    emailjs
      .send(
        'service_99k0d2l', // ✅ Your EmailJS service ID
        'template_55chp98', // ✅ Your EmailJS template ID
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          message: formData.message,
        },
        '_ghtMYqJ7fc3vpgFL' // ✅ Your EmailJS public key
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' });
        setIsSending(false);
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again later.');
        setIsSending(false);
      });
  };

  if (!isClient) return null; // 🛑 Prevent SSR hydration error

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <div className={styles.container}>
        {/* Left side contact info can go here if needed */}

        <div className={styles.formWrapper}>
          <h3 className={styles.subHeading}>Send a Message</h3>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSending}
              autoComplete="off"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSending}
              autoComplete="off"
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              disabled={isSending}
              autoComplete="off"
            />

            <button type="submit" className={styles.button} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {status && (
            <motion.p
              className={styles.status}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
