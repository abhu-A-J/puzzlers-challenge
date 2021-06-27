import React from 'react';
import classNames from 'classnames';

/* Styles */
import styles from './index.module.scss';

interface Props {
  href: string;
  children: React.ReactNode;
  type: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  className?: string;
}

const cx = classNames.bind(styles);

const CTAButton: React.FC<Props> = (props) => {
  const { children, type, href, size, className } = props;

  const ctaClassName = cx('base', styles[type], styles[size], className);

  return (
    <a href={href} className={ctaClassName}>
      {children}
    </a>
  );
};

export default CTAButton;
