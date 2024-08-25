import React, { FC } from 'react';
import styles from './Tap.module.scss';
import { TapProps } from './Tap.types';

export const Tap: FC<TapProps> = ({ children, mode, disabled, fontSize }) => {
  return (
    <div 
        className={`${styles.tap} ${styles[`tap_${mode}`]} ${disabled ? styles[`tap_disabled`] : ''}`}
        style={{ '--font-size': fontSize ? fontSize + 'px' : '15px' } as React.CSSProperties}
    >
      {children}
    </div>
  );
};