import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

/* Styles */
import styles from './index.module.scss';

/* Assets */
import wiketLogo from '../../assets/svg/wiket-logo.svg';

/* Components */
import CTAButton from '../CTAButton';
import BurgerMenu from '../BurgerMenu';

interface IProps {}

const Navbar = () => {
  const isDesktopView = useMediaQuery({ query: '(min-width:850px)' });
  const triggerMobileAnimation = useMediaQuery({ query: '(max-width:650px' });

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: triggerMobileAnimation ? 1 : 2,
        delay: triggerMobileAnimation ? 0 : 1,
      }}
    >
      {/* Brand Logo */}
      <div className={styles.brandLogo}>
        <a href="/">
          <img
            src={wiketLogo}
            alt="Wiket Company Logo"
            width={isDesktopView ? '124px' : '100px'}
          />
        </a>
      </div>

      {/* Navbar links */}
      <ul className={styles.navLinksWrapper}>
        {isDesktopView && (
          <>
            <li className={styles.navLink}>
              <a href="#benefits">Benefits</a>
            </li>
            <li className={styles.navLink}>
              <a href="#profile">Your Profile</a>
            </li>
            <li className={styles.navLink}>
              <a href="#connections">Connections</a>
            </li>
            <li className={styles.navLink}>
              <a href="#pricing">Plans {'&'} Pricing</a>
            </li>
          </>
        )}
        <CTAButton
          type="primary"
          size={isDesktopView ? 'md' : 'sm'}
          href="/"
          className={styles.navbarCTA}
        >
          Get started
        </CTAButton>
        {!isDesktopView && <BurgerMenu />}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
