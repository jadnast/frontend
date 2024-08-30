import React, { FC } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip"

import Link from 'next/link';
import { Badge } from '@shared/ui/badge'

export const Card: FC<CardProps> = ({ children, disabled, type, status, age, poster }) => {
  return (
      <Link className={`${styles.anime__item}  ${disabled ? styles.anime__item_disabled : ''}`} href="#">
        <div className={`${styles.anime__item_image}`} style={poster ? { background: `url(${poster}) center center / cover no-repeat` } : undefined}>
          <TooltipProvider>
              <Tooltip>
                <TooltipTrigger><Badge mode='solid'>{type}</Badge></TooltipTrigger>
                <TooltipContent>
                  <p>Тип аниме</p>
                </TooltipContent>
              </Tooltip>
          </TooltipProvider>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger><Badge mode='gray'>{status}</Badge></TooltipTrigger>
                <TooltipContent>
                  <p>Выпускается - Онгоинг</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger><Badge mode='solid'>{age}</Badge></TooltipTrigger>
                <TooltipContent>
                  <p>Возрастное ограничение</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <h2 className={`${styles.anime__item_title}`}>{children}</h2>
      </Link>
  );
};