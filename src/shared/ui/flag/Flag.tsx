import React, { FC } from 'react';
import styles from './Flag.module.scss';

import { FlagProps } from './Flag.types';
import Image from "next/image";

const flags = {
  ru_RU: require('./flags/ru_RU.svg').default.src,
  en_GB: require('./flags/en_GB.svg').default.src,
  kk_KZ: require('./flags/kk_KZ.svg').default.src,
  uk_UA: require('./flags/uk_UA.svg').default.src,
  ja_JP: require('./flags/ja_JP.svg').default.src,
  be_BY: require('./flags/be_BY.svg').default.src,
  pl_PL: require('./flags/pl_PL.svg').default.src
}

const altTexts  = {
  ru_RU: 'Russian Flag',
  en_GB: 'British Flag',
  kk_KZ: 'Kazakhstan Flag',
  uk_UA: 'Ukrainian Flag',
  ja_JP: 'Japanese Flag',
  be_BY: 'Belarusian Flag',
  pl_PL: 'Polish Flag',
};


export const Flag: FC<FlagProps> = ({country, disabled }) => {
  const altText = altTexts[country ?? 'ru_RU'];
  return (
      <Image
          className={`${styles.flag} ${styles[`flag_${country}`]} ${disabled ? styles[`flag_disabled`] : ''}`}
          src={flags[country ?? 'ru_RU']} alt={altText} width={21} height={15}/>
  );
};
