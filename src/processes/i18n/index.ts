import ru_RU from './ru_RU';
import en_GB from './en_GB';

import be_BY from './be_BY';
import uk_UA from './uk_UA';
import pl_PL from './pl_PL';
import kk_KZ from './kk_KZ';

export enum Locale {
    ru = "ru_RU",
    en = "en_GB",
    be = "be_BY",
    uk = "uk_UA",
    pl = "pl_PL",
    kk = "kk_KZ"
}

export const DEFAULT_LOCALE = Locale.ru;

export const translations = {
    ru_RU: ru_RU,
    en_GB: en_GB,
    be_BY: be_BY,
    uk_UA: uk_UA,
    pl_PL: pl_PL,
    kk_KZ: kk_KZ,
};

export type TranslationKey = keyof (typeof translations)[Locale];