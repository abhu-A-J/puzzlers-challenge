import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

/* Styles */
import styles from './index.module.scss';

interface Props {
  src: string;
  caption: string;
  desc: string;
  className?: string;
  variants?: any;
}
const ThumbCard: React.FC<Props> = (props) => {
  const { className, src, caption, desc, variants } = props;

  return (
    <motion.div
      className={`${styles.thumbCardWrapper} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1.5 }}
    >
      <motion.div className={styles.thumbImage}>
        <img src={src} alt={desc} />
      </motion.div>
      <motion.p className={styles.thumbDesc}>
        <span>{caption}</span>
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default ThumbCard;
