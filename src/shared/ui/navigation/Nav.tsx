import React, { FC } from 'react';
import styles from './Nav.module.scss';
import { NavProps } from './Nav.types';
import { Tap } from '@shared/ui/tap';

export const Nav: FC<NavProps> = ({disabled}) => {
  return (
    <div className={`${styles.nav} ${disabled ? styles[`nav_disabled`] : ''}`}>
      <Tap mode='solid' href='/'>Главная</Tap>
      <Tap mode='ghost' href='/explore'>Библиотека</Tap>
      <Tap mode='ghost' href='/search'>Поиск</Tap>
      <Tap mode='accent' href='/auth'>Войти</Tap>
    </div>
  );
};