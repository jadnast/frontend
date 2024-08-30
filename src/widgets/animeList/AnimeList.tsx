import React, { FC, useEffect, useState } from 'react';
import { AnimeListProps, CardProps } from './AnimeList.types';
import { Card } from '@shared/ui/card';

import { getCookie } from 'cookies-next';
import { Locale, translations } from "@processes/i18n";

type IndexKeys = keyof typeof translations[Locale]['index'];

export const AnimeList: FC<AnimeListProps> = ({ cards, title, id }) => {
    const [activeLocale, setActiveLocale] = useState<Locale>(() => "ru_RU" as Locale);

    useEffect(() => {
      const locale = (getCookie("locale") || "ru_RU") as Locale;
      setActiveLocale(locale);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const getVisibleCards = () => {
        const endIndex = currentIndex + 7;
        if (endIndex <= cards.length) {
            return cards.slice(currentIndex, endIndex);
        } else {
            return [...cards.slice(currentIndex, cards.length), ...cards.slice(0, endIndex % cards.length)];
        }
    };

    return (
        <section className='flex gap-5 flex-col mb-9' id={id ?? 'id'}>
            <h2 className="text-3xl uppercase font-bold">{`${translations[activeLocale].index[id as IndexKeys]}`}</h2>
            <div className='grid items-center gap-5' style={{ gridTemplateColumns: 'repeat(3, auto)' }}>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg" id='prev-btn' onClick={handlePrev} className='hover:cursor-pointer text-white hover:text-primary transition-all duration-700'>
                    <path d="M-1.87959e-06 21.6C-2.91766e-06 9.72589 9.62587 0.100009 21.5 0.100008C33.3741 0.100007 43 9.72588 43 21.6C43 33.4741 33.3741 43.1 21.5 43.1C9.62588 43.1 -8.41521e-07 33.4741 -1.87959e-06 21.6Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M18.6704 21.7807L27.0559 13.3939C27.3195 13.1208 27.4654 12.7551 27.4621 12.3755C27.4588 11.9959 27.3066 11.6328 27.0382 11.3644C26.7698 11.096 26.4068 10.9437 26.0273 10.9404C25.6477 10.9371 25.2821 11.083 25.0091 11.3467L15.6003 20.7571C15.3289 21.0286 15.1765 21.3968 15.1765 21.7807C15.1765 22.1646 15.3289 22.5327 15.6003 22.8042L25.0091 32.2146C25.2821 32.4783 25.6477 32.6243 26.0273 32.621C26.4068 32.6177 26.7698 32.4654 27.0382 32.197C27.3066 31.9286 27.4588 31.5654 27.4621 31.1858C27.4654 30.8063 27.3195 30.4405 27.0559 30.1675L18.6704 21.7807Z" fill="currentColor" fillOpacity="0.7" />
                </svg>
                <div className='flex gap-5 w-full overflow-x-hidden'>
                    {getVisibleCards().map((card: CardProps, index: number) => (
                        <Card key={index} type={card.type} status={card.status} age={card.age}>{card.title}</Card>
                    ))}
                </div>
                <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-180 hover:cursor-pointer text-white hover:text-primary transition-all duration-700' id='next-btn' onClick={handleNext}>
                    <path d="M-1.87959e-06 21.6C-2.91766e-06 9.72589 9.62587 0.100009 21.5 0.100008C33.3741 0.100007 43 9.72588 43 21.6C43 33.4741 33.3741 43.1 21.5 43.1C9.62588 43.1 -8.41521e-07 33.4741 -1.87959e-06 21.6Z" fill="currentColor" fillOpacity="0.1" />
                    <path d="M18.6704 21.7807L27.0559 13.3939C27.3195 13.1208 27.4654 12.7551 27.4621 12.3755C27.4588 11.9959 27.3066 11.6328 27.0382 11.3644C26.7698 11.096 26.4068 10.9437 26.0273 10.9404C25.6477 10.9371 25.2821 11.083 25.0091 11.3467L15.6003 20.7571C15.3289 21.0286 15.1765 21.3968 15.1765 21.7807C15.1765 22.1646 15.3289 22.5327 15.6003 22.8042L25.0091 32.2146C25.2821 32.4783 25.6477 32.6243 26.0273 32.621C26.4068 32.6177 26.7698 32.4654 27.0382 32.197C27.3066 31.9286 27.4588 31.5654 27.4621 31.1858C27.4654 30.8063 27.3195 30.4405 27.0559 30.1675L18.6704 21.7807Z" fill="currentColor" fillOpacity="0.7" />
                </svg>
            </div>
        </section>
    );
};