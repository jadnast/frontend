"use client";
import React, { FC, useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';

import { getCookie } from 'cookies-next';
import { Locale, translations } from "@processes/i18n";

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  const [activeLocale, setActiveLocale] = useState<Locale>(() => "ru_RU" as Locale);

  useEffect(() => {
    const locale = (getCookie("locale") || "ru_RU") as Locale;
    setActiveLocale(locale);
  }, []);

  return (
    <nav className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='solid' href='/' fontSize={13}>{translations[activeLocale].header.home}</Tap>
      <Tap mode='ghost' href='/explore' fontSize={13}>{translations[activeLocale].header.explore}</Tap>
      <Tap mode='ghost' href='/search' fontSize={13}>{translations[activeLocale].header.search}</Tap>
      <Tap mode='accent' href='/auth' fontSize={13}>{translations[activeLocale].header.auth}</Tap>
    </nav>
  );
};