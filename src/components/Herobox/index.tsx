import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

/* Styles */
import styles from './index.module.scss';

/* Assets */
import curveLineDesktop from '../../assets/svg/header-line-desktop.svg';
import curveLineMobile from '../../assets/svg/header-line-phone-portrait.svg';

/* Components */
import FocusImage from './FocusImage';
import TextContent from './TextContent';
import ThumbCard from '../ThumbCard';

const Herobox = () => {
  const showMobileHeaderLine = useMediaQuery({ query: '(max-width:649px)' });

  return (
    <header className={styles.herobox}>
      {/* Image Section  */}
      <div className={styles.heroboxImages}>
        <FocusImage />
        {/* Header curve  line */}
        <motion.img
          src={showMobileHeaderLine ? curveLineMobile : curveLineDesktop}
          alt="Desktop decoration curved line"
          className={
            showMobileHeaderLine
              ? styles.curveLineMobile
              : styles.curveLineDesktop
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeIn',
            duration: 1.6,
            delay: 1.5,
          }}
        />
      </div>

      {/* Content Section	 */}
      <div className={styles.heroboxContent}>
        <TextContent />
      </div>
    </header>
  );
};

export default Herobox;
