import React, { FC } from 'react';
import styles from './Badge.module.scss';
import { BadgeProps } from './Badge.types';

export const Badge: FC<BadgeProps> = ({ children, mode, disabled, fontSize }) => {
  return (
    <div 
        className={`${styles.badge} ${styles[`badge_${mode}`]} ${disabled ? styles[`badge_disabled`] : ''}`}
        style={{ '--font-size': fontSize ? fontSize + 'px' : '11px' } as React.CSSProperties}
    >
      {children}
    </div>
  );
};