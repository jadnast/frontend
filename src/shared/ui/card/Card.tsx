import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

import Link from 'next/link';
import { Badge } from '@shared/ui/badge'

export const Card: FC<CardProps> = ({ children, disabled, type, status, age, poster }) => {
  return (
      <Link className={`${styles.anime__item}  ${disabled ? styles.anime__item_disabled : ''}`} href="#">
        <div className={`${styles.anime__item_image}`} style={poster ? { background: `url(${poster}) center center / cover no-repeat` } : undefined}>
          <Badge mode='solid'>{type}</Badge>
          <div>
            <Badge mode='gray'>{status}</Badge>
            <Badge mode='solid'>{age}</Badge>
          </div>
        </div>
        <h2 className={`${styles.anime__item_title}`}>{children}</h2>
      </Link>
  );
};