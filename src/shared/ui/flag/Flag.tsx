import React, { FC } from 'react';
import styles from './Flag.module.scss';

import { FlagProps } from './Flag.types';

const flags = {
  ru_RU: require('./flags/ru_RU.svg').default.src,
  en_GB: require('./flags/en_GB.svg').default.src,
  kz_KZ: require('./flags/kz_KZ.svg').default.src,
  ua_UA: require('./flags/ua_UA.svg').default.src
}

export const Flag: FC<FlagProps> = ({country, disabled }) => {
  return (
    <img 
      className={`${styles.flag} ${styles[`flag_${country}`]} ${disabled ? styles[`flag_disabled`] : ''}`}
      src={flags[country ?? 'ru_RU']}
    ></img>
  );
};