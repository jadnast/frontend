import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  return (
    <div className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='solid' href='/'>Главная</Tap>
      <Tap mode='ghost' href='/explore'>Библиотека</Tap>
      <Tap mode='ghost' href='/search'>Поиск</Tap>
      <Tap mode='accent' href='/auth'>Войти</Tap>
    </div>
  );
};