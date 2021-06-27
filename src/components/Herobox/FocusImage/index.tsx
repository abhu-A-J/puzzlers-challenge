import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimateSharedLayout } from 'framer-motion';

/* Styles */
import styles from './index.module.scss';

/* Asset */
import locationPin from '../../../assets/svg/pin-01.svg';
import secondLocationPin from '../../../assets/svg/pin-02.svg';
import focusImage from '../../../assets/images/header-img-florist.jpg';
import gardenerImage from '../../../assets/images/header-img-gardener.jpg';
import potteryImage from '../../../assets/images/header-img-pottery.jpg';
import baristaImage from '../../../assets/images/header-img-barista.jpg';

/* Components */
import ThumbCard from '../../ThumbCard';

const FocusImage = () => {
  const showLocationPins = useMediaQuery({ query: '(min-width:1200px' });
  const triggerMobileAnimation = useMediaQuery({ query: '(max-width:650px' });

  return (
    <div className={styles.focusImage}>
      {/* Loction Pin 1 */}
      {showLocationPins && (
        <motion.img
          src={secondLocationPin}
          alt="Locatin Pin"
          className={styles.locationPinOne}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeIn',
            duration: 1.6,
            delay: 1.5,
          }}
        />
      )}

      {/* Center focus hero image */}
      <motion.div
        className={styles.heroImage}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <img
          src={focusImage}
          alt="Florist in bankok"
          className={styles.heroImage__image}
        />
        <p className={styles.heroImage__caption}>
          <span>Hanging Garden</span> Florist in Bangkok
        </p>
      </motion.div>

      {/* Loction Pin 32 */}
      {showLocationPins && (
        <motion.img
          src={locationPin}
          alt="Locatin Pin"
          className={styles.locationPinSecond}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeIn',
            duration: 1.6,
            delay: 1.5,
          }}
        />
      )}

      {/* Floating thumbCards */}
      <>
        <ThumbCard
          className={styles.floatingCardOne}
          src={potteryImage}
          caption="Potject"
          desc="Pottery in Bangkok"
        />
        <ThumbCard
          className={styles.floatingCardTwo}
          src={gardenerImage}
          caption="GreenThumb"
          desc="Gardener in CheChe"
        />
        <ThumbCard
          className={styles.floatingCardThree}
          src={baristaImage}
          caption="Green Cafe"
          desc="Cafe in Bangkok"
        />
      </>
    </div>
  );
};

export default FocusImage;
