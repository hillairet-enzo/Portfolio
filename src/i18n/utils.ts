import en from './en.json';
import fr from './fr.json';

export const languages = ['en', 'fr'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

const dictionaries = { en, fr };

// Lit la langue dans l'adresse : /fr/... → français, sinon anglais.
export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	return first === 'fr' ? 'fr' : 'en';
}

// Renvoie tous les textes de la langue demandée.
export function useTranslations(lang: Lang) {
	return dictionaries[lang];
}

// Ajoute /fr devant une adresse du site si la langue est le français.
export function localePath(lang: Lang, path: string): string {
	return lang === 'fr' ? `/fr${path}` : path;
}

// Donne l'adresse de la même page dans une autre langue.
export function getPathForLang(url: URL, lang: Lang): string {
	const withoutLang = url.pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
	return lang === 'fr' ? `/fr${withoutLang}` : withoutLang;
}
