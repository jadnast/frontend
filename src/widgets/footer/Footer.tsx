import React, { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';
import { Logo } from '@shared/ui/logo';
import { Flag } from '@shared/ui/flag';

import { Link as SharedLink } from '@shared/ui/link';
import Link from "next/link";

import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"

export const Footer: FC<FooterProps> = ({disabled, country, className}) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale,
  );

  const { t: tFooter } = useTranslation('footer')
  const { t: tCommon } = useTranslation('common')

  return (
    <footer className={`${styles.footer} ${disabled ? styles['footer--disabled'] : ''} ${className}`}>
      <section className={`${styles.footer__section} ${styles['footer__section--1']}`}>
        <img src='/images/main/footer_ch.png' className='footer_ch'></img>
        <div className={`${styles['footer__section-item--1']}`}>
          <Logo width={150} href='/'></Logo>
          <p>{tFooter('spoiler')}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger style={{ textTransform: 'uppercase' }}>
            <SharedLink mode='list' country={activeLocale}>{tCommon(activeLocale)}</SharedLink>
          </DropdownMenuTrigger>
          <DropdownMenuContent>

              {otherLocales.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                  <DropdownMenuItem key={locale} className='gap-2'>
                    <Link href={{ pathname, query }} locale={locale} replace={true}
                    className='gap-2 relative flex cursor-default select-none items-center rounded-[6px] uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-border hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
                      <Flag country={locale}></Flag> {tCommon(locale)}</Link>
                  </DropdownMenuItem>
                );
              })}


          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <section className={`${styles['footer__section']} ${styles['footer__section--2']}`}>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--2']}`}>
          <p>{tFooter('about_us')}</p>
          <ul>
            <li>{tFooter('team')}</li>
            <li>{tFooter('career')}</li>
            <li>{tFooter('blog')}</li>
            <li>{tFooter('communities')}</li>
          </ul>
          <p>{tFooter('for_developers')}</p>
          <ul>
            <li>{tFooter('сontribution')}</li>
            <li>{tFooter('docs')}</li>
            <li>{tFooter('dashboard')}</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--3']}`}>
          <p>{tFooter('policy')}</p>
          <ul>
            <li>{tFooter('terms')}</li>
            <li>{tFooter('privacy')}</li>
            <li>{tFooter('public_offer')}</li>
            <li>{tFooter('cookie')}</li>
            <li>{tFooter('dmca')}</li>
            <li>{tFooter('brand')}</li>
          </ul>

          <p>{tFooter('another')}</p>
          <ul>
            <li>{tFooter('reporting')}</li>
            <li>{tFooter('security')}</li>
            <li>{tFooter('faq')}</li>
          </ul>
        </div>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--4']}`}>
          <p>Hikasami</p>
        </div>
      </section>
    </footer>
  );
};