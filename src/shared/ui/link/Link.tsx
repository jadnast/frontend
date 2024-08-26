import React, { FC } from 'react';
import styles from './Link.module.scss';
import { LinkProps } from './Link.types';
import { Flag } from '@shared/ui/flag';

export const Link: FC<LinkProps> = ({ children, mode, disabled, fontSize, country }) => {
  return (
    <div  
      className={`${styles.link} ${styles[`link_${mode}`]} ${disabled ? styles[`link_disabled`] : ''}`} 
      style={{ '--font-size': fontSize ? fontSize + 'px' : '11px' } as React.CSSProperties}
    >
      {mode == 'list' && country ? <Flag country={country}></Flag> : ''}
      {children}
    </div>
  );
};