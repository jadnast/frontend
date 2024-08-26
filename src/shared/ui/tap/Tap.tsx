import React, { FC } from 'react';
import styles from './Tap.module.scss';
import { TapProps } from './Tap.types';

import Link from 'next/link';

export const Tap: FC<TapProps> = ({ children, mode, disabled, fontSize, href }) => {
  return (
    <Link href={href || '#'}
        className={`${styles.tap} ${styles[`tap_${mode}`]} ${disabled ? styles[`tap_disabled`] : ''}`}
        style={{ '--font-size': fontSize ? fontSize + 'px' : '15px' } as React.CSSProperties}
    >
      {children}
    </Link>
  );
};