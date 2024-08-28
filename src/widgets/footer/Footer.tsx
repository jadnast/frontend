import React, { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';
import { Logo } from '@shared/ui/logo';
import { Link } from '@shared/ui/link';

export const Footer: FC<FooterProps> = ({disabled, country}) => {
  const countrys = {
    ru_RU: 'РУССКИЙ',
    en_GB: 'РУССКИЙ'
  }

  return (
    <footer className={`${styles.footer} ${disabled ? styles['footer--disabled'] : ''}`}>
      <section className={`${styles.footer__section} ${styles['footer__section--1']}`}>
        <img src='/images/main/footer_ch.png' className='footer_ch'></img>
        <div className={`${styles['footer__section-item--1']}`}>
          <Logo width={150}></Logo>
          <p>Hikasami не связана и не поддерживается Sony Pictures Entertainment Music Publishing Inc или любым другим правообладателем. Все размещенные на данном ресурсе материалы принадлежат их соответствующим правообладателям и находятся в публичном доступе.</p>
        </div>
        <Link mode='list' country={country}>{countrys.ru_RU}</Link>
      </section>
      <section className={`${styles['footer__section']} ${styles['footer__section--2']}`}>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--2']}`}>
          <p>О нас</p>
          <ul>
            <li>Команда</li>
            <li>Вакансия</li>
            <li>Блог</li>
            <li>Сообщества</li>
          </ul>
          <p>Разработчикам</p>
          <ul>
            <li>Команда</li>
            <li>Вакансия</li>
            <li>Блог</li>
            <li>Сообщества</li>
          </ul>
        </div>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--3']}`}>
          <p>Политика</p>
          <ul>
            <li>Условия использования</li>
            <li>Конфиденциальность</li>
            <li>Публичная оферта</li>
            <li>cookie</li>
            <li>DMCA</li>
            <li>Бренд</li>
          </ul>

          <p>Другое</p>
          <ul>
            <li>Сообщение о проблемах</li>
            <li>Безопасность</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={`${styles['footer__section-item']} ${styles['footer__section-item--4']}`}>
          <p>Hikasami</p>
        </div>
      </section>
    </footer>
  );
};