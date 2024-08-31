"use client";
import React, { FC, useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';

import { User, Auth } from '@entities/user';

import { getCookie } from 'cookies-next';
import { Locale, translations } from "@processes/i18n";

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  const [activeLocale, setActiveLocale] = useState<Locale>(() => Locale.ru);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const locale = (getCookie("locale") || Locale.ru) as Locale;
    setActiveLocale(locale);
    setIsMounted(true);
  }, []);

  return (
    <nav className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='ghost' href='/' fontSize={13}>{translations[activeLocale].header.home}</Tap>
      <Tap mode='ghost' href='/explore' fontSize={13}>{translations[activeLocale].header.explore}</Tap>
      <Tap mode='ghost' href='/search' fontSize={13}>{translations[activeLocale].header.search}</Tap>
      {isMounted && Auth && User ? (
        <Tap mode='accent' href='/auth' fontSize={13}>{User.username}</Tap>
      ) : (
        <Tap mode='accent' href='/auth' fontSize={13}>{translations[activeLocale].header.auth}</Tap>
      )}
    </nav>
  );
};