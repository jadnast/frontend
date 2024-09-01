"use client";
import React, { FC, useEffect, useState } from 'react';
import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';
import { Tap } from '@shared/ui/tap';
import Link from 'next/link';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator} from "@/shared/ui/dropdown-menu"

import { User, Auth } from '@entities/user';

import { getCookie, deleteCookie } from 'cookies-next';
import { Locale, translations } from "@processes/i18n";

export const Navigation: FC<NavigationProps> = ({disabled}) => {
  const [activeLocale, setActiveLocale] = useState<Locale>(() => Locale.ru);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const locale = (getCookie("locale") || Locale.ru) as Locale;
    setActiveLocale(locale);
    setIsMounted(true);
  }, []);

  console.log(User)

  return (
    <nav className={`${styles.navigation} ${disabled ? styles[`navigation_disabled`] : ''}`}>
      <Tap mode='ghost' href='/' fontSize={13}>{translations[activeLocale].header.home}</Tap>
      <Tap mode='ghost' href='/explore' fontSize={13}>{translations[activeLocale].header.explore}</Tap>
      <Tap mode='ghost' href='/search' fontSize={13}>{translations[activeLocale].header.search}</Tap>
      {isMounted && Auth && User ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Tap mode='accent' href='/auth' fontSize={13}>{User.username}</Tap>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mt-2'>
              <DropdownMenuItem className='flex flex-row gap-2'>
                <Link href="/profile" className='w-full cursor-pointer gap-2 relative flex select-none items-center rounded-[6px] uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-border hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 duration-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clipRule="evenodd"/></svg>
                Профиль
                </Link>
              </DropdownMenuItem>
              {User.type === 'SUPER_ADMIN' && 
                <DropdownMenuItem className='flex flex-row gap-2'>
                  <Link href="https://dashboard.hikasami.com/" className='cursor-pointer gap-2 relative flex select-none items-center rounded-[6px] uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-border hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 duration-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082m7.483 3.281l-.13.235c-.145.259-.217.388-.329.473s-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71c-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472s.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803s.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404s.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584s.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553c-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18s-.184-.214-.328-.473l-.131-.235C12.632 7.454 12.379 7 12 7s-.632.454-1.139 1.363" clipRule="evenodd"/></svg>
                    Панель управления
                  </Link>
                </DropdownMenuItem>
              }
              <DropdownMenuSeparator className='-mx-3 mb-2 mt-2'/>
              <DropdownMenuItem onClick={() => {deleteCookie('accessToken');deleteCookie('refreshToken');window.location.reload();}} className='gap-2 relative flex cursor-pointer select-none items-center rounded-[6px] uppercase px-2 py-1.5 text-sm outline-none transition-colors hover:bg-red-500 duration-500 hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"/></svg>
                Выйти
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


      ) : (
        <Tap mode='accent' href='/auth' fontSize={13}>{translations[activeLocale].header.auth}</Tap>
      )}
    </nav>
  );
};