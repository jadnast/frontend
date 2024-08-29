import ru_RU from './ru_RU';
import en_GB from './en_GB';
import ua_UA from './ua_UA';
import jp_JP from './jp_JP';

export enum Locale {
    ru = "ru_RU",
    en = "en_GB",
    ua = "ua_UA",
    jp = "jp_JP"
}

export const DEFAULT_LOCALE = Locale.ru;

export const translations = {
    ru_RU: ru_RU,
    en_GB: en_GB,
    ua_UA: ua_UA,
    jp_JP: jp_JP
};

export type TranslationKey = keyof (typeof translations)[Locale];