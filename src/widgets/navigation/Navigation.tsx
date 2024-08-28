import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  return (
    <nav className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='solid' href='/' fontSize={13}>Главная</Tap>
      <Tap mode='ghost' href='/explore' fontSize={13}>Библиотека</Tap>
      <Tap mode='ghost' href='/search' fontSize={13}>Поиск</Tap>
      <Tap mode='accent' href='/auth' fontSize={13}>Войти</Tap>
    </nav>
  );
};