import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

/* Styles */
import styles from './index.module.scss';

const TextContent = () => {
  const triggerMobileAnimation = useMediaQuery({ query: '(max-width:650px' });

  return (
    <>
      <motion.h1
        className={styles.heroText}
        initial={{ opacity: 0, y: triggerMobileAnimation ? 50 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1.2,
          delay: triggerMobileAnimation ? 0 : 1.5,
        }}
      >
        <span className={styles.subHeading}>Explore new opportunities.</span>
        <span className={styles.heading}>
          <span>Grow</span> your business.
        </span>
      </motion.h1>

      <motion.p
        className={styles.heroTagline}
        initial={{ opacity: 0, y: triggerMobileAnimation ? 50 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.8,
          delay: triggerMobileAnimation ? 0.5 : 1.5,
        }}
      >
        <span> Wiket is the first business to business network</span> which lets
        you connect to mind like people.
      </motion.p>
    </>
  );
};

export default TextContent;
