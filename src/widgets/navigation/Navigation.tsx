import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';

import { useTranslation } from 'next-i18next';

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  const { t } = useTranslation('header')


  return (
    <nav className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='solid' href='/' fontSize={13}>{t('home')}</Tap>
      <Tap mode='ghost' href='/explore' fontSize={13}>{t('explore')}</Tap>
      <Tap mode='ghost' href='/search' fontSize={13}>{t('search')}</Tap>
      <Tap mode='accent' href='/auth' fontSize={13}>{t('auth')}</Tap>
    </nav>
  );
};