"use client";
import React, {FC, useEffect, useState} from 'react';
import styles from './Auth.module.scss';
import {AuthProps} from './Auth.types';

import {getCookie} from 'cookies-next';
import {Locale, translations} from "@processes/i18n";
import { Input } from '@/shared/ui/input';

import { loginUser } from '@features/auth';

import Link from 'next/link';

export const Login: FC<AuthProps> = ({disabled, className}) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const credentials = { login, password };
        const result = await loginUser(credentials);

        if (result.statusCode === 200) {
            console.log('Авторизация успешна', result);
            window.location.replace('/');
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
            <p className={`${styles.form_title}`}>Авторизация в учетную запись</p>
            <Input name='user_login' showLabel={true} label='Логин' required={true} value={login} onChange={(e) => setLogin(e.target.value)}>Введите свой логин</Input>
            <Input type="password" name='user_password' showLabel={true} label='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} showSecondaryLabel={true} secondaryLabel='Забыли пароль?' required={true}>Введите пароль</Input>
            <button type="submit" disabled={loading} className={`${styles.form_btn}`}>
                {loading ? 'Загрузка...' : 'Войти'}
            </button>
            {error && <p className={`${styles.form_subtitle}`} style={{ color: 'red' }}>{error}</p>}
            <Link className={`${styles.form_subtitle}`} href='/auth/register' >Нет учетной записи? <span>Создать</span></Link>
        </form>
    );
};