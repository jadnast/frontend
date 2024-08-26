import React, { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';
import { Navigation } from '@widgets/navigation';
import { Logo } from '@shared/ui/logo';

export const Header: FC<HeaderProps> = ({disabled}) => {
  return (
    <div className={`${styles.header} ${disabled ? styles[`header_disabled`] : ''}`}>
      <Logo/>
      <Navigation/>
    </div>
  );
};