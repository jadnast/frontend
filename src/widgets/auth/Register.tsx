"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './Auth.module.scss';
import {AuthProps} from './Auth.types';

import {getCookie} from 'cookies-next';
import {Locale, translations} from "@processes/i18n";
import { Input } from '@/shared/ui/input';

import { registerUser } from '@features/auth';

import Link from 'next/link';

export const Register: FC<AuthProps> = ({disabled, className}) => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const credentials = { username, email, password };
        const result = await registerUser(credentials);

        if (result.statusCode === 200) {
            console.log('Регистрация успешна', result);
            window.location.replace('/auth/verify');
        } else {
            setError(result.message);
        }

        setLoading(false);
    };

    const [activeLocale, setActiveLocale] = useState<Locale>(() => Locale.ru);

    useEffect(() => {
        const locale = (getCookie("locale") || Locale.ru) as Locale;
        setActiveLocale(locale);
    }, []);

    return (
        <form method='POST' className={`${styles.form} ${disabled ? styles['footer--disabled'] : ''} ${className}`} onSubmit={handleSubmit}>
            <p className={`${styles.form_title}`}>Создание учетной записи</p>
            <Input name='user_username' showLabel={true} label='Логин' required={true} value={username} onChange={(e) => setUsername(e.target.value)}>Введите свой логин</Input>
            <Input name='user_email' showLabel={true} label='Почта' required={true} value={email} onChange={(e) => setEmail(e.target.value)}>Введите свою почту</Input>
            <Input type="password" name='user_password' showLabel={true} label='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} required={true}>Введите пароль</Input>
            <button type="submit" disabled={loading} className={`${styles.form_btn}`}>
                {loading ? 'Загрузка...' : 'Войти'}
            </button>
            {error && <p className={`${styles.form_subtitle}`} style={{ color: 'red' }}>{error}</p>}
            <Link className={`${styles.form_subtitle}`} href='/auth/login' >Уже есть учетная запись? <span>Войти</span></Link>
        </form>
    );
};