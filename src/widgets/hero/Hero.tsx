"use client";
import React, { FC, useEffect, useState } from 'react';
import { HeroProps } from './Hero.types';
import Image from "next/image";
import { getCookie } from 'cookies-next';

import { Locale, translations } from "@processes/i18n";

export const Hero: FC<HeroProps> = ({disabled}) => {
    const [activeLocale, setActiveLocale] = useState<Locale>(() => Locale.ru);

    useEffect(() => {
      const locale = (getCookie("locale") || Locale.ru) as Locale;
      setActiveLocale(locale);
    }, []);

    return (
      <div id="hero" className="w-full h-[962px] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-3.5 inline-flex">
            <h1 className="self-stretch lg:h-6 h-4 text-center text-neutral-400 font-normal leading-snug uppercase">{translations[activeLocale].hero.sub}</h1>
            <div className="self-stretch h-32 flex-col justify-start items-center gap-1 flex">
              <div className="self-stretch text-center text-white lg:text-4xl text-2xl font-bold uppercase tracking-widest">{translations[activeLocale].hero.title}</div>
              <div className="hero_button bg-gradient-to-b from-rose-500 to-rose-600 shadow" style={{ boxShadow: "0px 0px 50px rgba(235, 0, 82, 0.30)" }}>
                  <div className="text-center text-white lg:text-4xl text-3xl font-bold uppercase tracking-widest italic">{translations[activeLocale].hero.btn_title}</div>
              </div>
            </div>
          </div>
    
          <div className="hero_ch1 lg:block hidden" style={{ position: 'absolute', left: '-1%' }}>
              <Image src="/images/main/ch1.png" alt={'anime hero'} width={532} height={962}/>
          </div>
    
          <div className="hero_ch2 lg:block hidden" style={{ position: 'absolute', right: '-1%' }}>
              <Image src="/images/main/ch2.png" alt={'anime hero'} width={534} height={962}/>
          </div>
      </div>
    );
};