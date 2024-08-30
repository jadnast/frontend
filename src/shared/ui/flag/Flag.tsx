import React, { FC } from 'react';
import styles from './Flag.module.scss';

import { FlagProps } from './Flag.types';

const flags = {
  ru_RU: require('./flags/ru_RU.svg').default.src,
  en_GB: require('./flags/en_GB.svg').default.src,
  kk_KZ: require('./flags/kk_KZ.svg').default.src,
  uk_UA: require('./flags/uk_UA.svg').default.src,
  ja_JP: require('./flags/ja_JP.svg').default.src,
  be_BY: require('./flags/be_BY.svg').default.src,
  pl_PL: require('./flags/pl_PL.svg').default.src
}

export const Flag: FC<FlagProps> = ({country, disabled }) => {
  return (
    <img 
      className={`${styles.flag} ${styles[`flag_${country}`]} ${disabled ? styles[`flag_disabled`] : ''}`}
      src={flags[country ?? 'ru_RU']}
    ></img>
  );
};