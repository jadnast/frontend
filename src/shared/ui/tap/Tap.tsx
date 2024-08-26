import React, { FC } from 'react';
import styles from './Tap.module.scss';
import { TapProps } from './Tap.types';

import Link from 'next/link';
import { useRouter } from "next/router";

export const Tap: FC<TapProps> = ({ children, mode, disabled, fontSize, href }) => {
  const router = useRouter();
  const active = href && href === router.pathname;

  return (
    <Link href={href || '#'}
        className={`
          ${styles.tap} 
          ${styles[`tap_${mode}`]} 
          ${disabled ? styles[`tap_disabled`] : ''} 
          ${active ? styles[`tap_active`] : ''}
          `}
        style={{ '--font-size': fontSize ? fontSize + 'px' : '15px' } as React.CSSProperties}
    >
      {children}
    </Link>
  );
};