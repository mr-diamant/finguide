import ru from './ru';
import kz from './kz';
import en from './en';

export type Lang = 'RU' | 'KZ' | 'EN';
export type Translations = typeof ru;

export const translations: Record<Lang, Translations> = { RU: ru, KZ: kz, EN: en };
export const LANGS: Lang[] = ['RU', 'KZ', 'EN'];
