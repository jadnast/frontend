"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './Auth.module.scss';
import {AuthProps} from './Auth.types';

import {getCookie} from 'cookies-next';
import {Locale, translations} from "@processes/i18n";
import { Input } from '@/shared/ui/input';

import Link from 'next/link';

export const Register: FC<AuthProps> = ({disabled, className}) => {
    const [activeLocale, setActiveLocale] = useState<Locale>(() => Locale.ru);

    useEffect(() => {
        const locale = (getCookie("locale") || Locale.ru) as Locale;
        setActiveLocale(locale);
    }, []);

    return (
        <form method='POST' className={`${styles.form} ${disabled ? styles['footer--disabled'] : ''} ${className}`}>
            <p className={`${styles.form_title}`}>Создание учетной записи</p>
            <Input name='user_login' showLabel={true} label='Логин' required={true}>Введите свой логин</Input>
            <Input name='user_email' showLabel={true} label='Почта' required={true}>Введите свою почту</Input>
            <Input name='user_password' showLabel={true} label='Пароль' required={true}>Введите пароль</Input>
            <button type='submit' className={`${styles.form_btn}`}>Продолжить</button>
            <Link className={`${styles.form_subtitle}`} href='/auth/login' >Уже есть учетная запись? <span>Войти</span></Link>
        </form>
    );
};