"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './Footer.module.scss';
import {FooterProps} from './Footer.types';
import {Logo} from '@shared/ui/logo';
import {Flag} from '@shared/ui/flag';
import {Link} from '@shared/ui/link';
import Image from "next/image";

import {getCookie, setCookie} from 'cookies-next';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/shared/ui/dropdown-menu"

import {Locale, translations} from "@processes/i18n";

export const Footer: FC<FooterProps> = ({disabled, country, className}) => {
    const [activeLocale, setActiveLocale] = useState<Locale>(() => "ru_RU" as Locale);

    useEffect(() => {
        const locale = (getCookie("locale") || "ru_RU") as Locale;
        setActiveLocale(locale);
    }, []);

    // Получение списка всех локалей
    const locales = Object.keys(translations); // Предполагается, что translations содержит все локали
    const otherLocales = locales.filter((locale) => locale !== activeLocale); // Фильтрация активной локали

    const otherLocalesDropdownItems = otherLocales.map((locale) => {
        return (
            <DropdownMenuItem key={locale} className='gap-2'>
                <div onClick={() => {
                    setCookie('locale', locale);
                    window.location.reload(); // Обновление страницы
                }}
                     className='gap-2 relative flex cursor-default select-none items-center rounded-[6px] uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-border hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
                    <Flag country={locale as Locale}></Flag>{translations[activeLocale].common[locale as Locale]}
                </div>
            </DropdownMenuItem>
        );
    });

    return (
        <footer className={`${styles.footer} ${disabled ? styles['footer--disabled'] : ''} ${className}`}>
            <section className={`${styles.footer__section} ${styles['footer__section--1']}`}>
                <Image src='/images/main/footer_ch.png'
                       className='footer_ch' alt={'anime girl'}
                       width={210} height={220}
                       style={{
                           position: 'absolute',
                           right: 0,
                           bottom: 0,
                       }}/>
                <div className={`${styles['footer__section-item--1']}`}>
                    <Logo width={150} href='/'></Logo>
                    <p>{translations[activeLocale].footer.spoiler}</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger style={{textTransform: 'uppercase'}}>
                        <Link mode='list'
                              country={activeLocale}>{translations[activeLocale].common[`${activeLocale}`]}</Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {otherLocalesDropdownItems}
                    </DropdownMenuContent>
                </DropdownMenu>
            </section>
            <section className={`${styles['footer__section']} ${styles['footer__section--2']}`}>
                <div className={`${styles['footer__section-item']} ${styles['footer__section-item--2']}`}>
                    <p>{translations[activeLocale].footer.about_us}</p>
                    <ul>
                        <li><a href='/team'>{translations[activeLocale].footer.team}</a></li>
                        <li><a href='/career'>{translations[activeLocale].footer.career}</a></li>
                        <li><a href='/blog'>{translations[activeLocale].footer.blog}</a></li>
                        <li><a href='#'>{translations[activeLocale].footer.communities}</a></li>
                    </ul>
                    <p>{translations[activeLocale].footer.for_developers}</p>
                    <ul>
                        <li><a href='/сontribution'>{translations[activeLocale].footer.сontribution}</a></li>
                        <li><a href='/dev/docs'>{translations[activeLocale].footer.docs}</a></li>
                        <li><a href='/dev/dashboard'>{translations[activeLocale].footer.dashboard}</a></li>
                        <li><a href='htpps://github.com/hikasami'>GitHub</a></li>
                    </ul>
                </div>
                <div className={`${styles['footer__section-item']} ${styles['footer__section-item--3']}`}>
                    <p>{translations[activeLocale].footer.policy}</p>
                    <ul>
                        <li><a href='/policy/terms'>{translations[activeLocale].footer.terms}</a></li>
                        <li><a href='/policy/privacy'>{translations[activeLocale].footer.privacy}</a></li>
                        <li><a href='/policy/public_offer'>{translations[activeLocale].footer.public_offer}</a></li>
                        <li><a href='/policy/cookie'>{translations[activeLocale].footer.cookie}</a></li>
                        <li><a href='/policy/dmca'>{translations[activeLocale].footer.dmca}</a></li>
                        <li><a href='/policy/brand'>{translations[activeLocale].footer.brand}</a></li>
                    </ul>

                    <p>{translations[activeLocale].footer.another}</p>
                    <ul>
                        <li><a href='/report'>{translations[activeLocale].footer.reporting}</a></li>
                        <li><a href='/security'>{translations[activeLocale].footer.security}</a></li>
                        <li><a href='/faq'>{translations[activeLocale].footer.faq}</a></li>
                    </ul>
                </div>
                <div className={`${styles['footer__section-item']} ${styles['footer__section-item--4']}`}>
                    <p>Hikasami</p>
                </div>
            </section>
        </footer>
    );
};