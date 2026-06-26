import { translations, type Language } from './translations';

export type { Language } from './translations';

export function getLanguageFromPath(pathname: string): Language {
  const match = pathname.match(/\/(en|es)(?:\/|$)/);
  return (match?.[1] as Language) || 'es';
}

export function t(lang: Language, key: string): any {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key itself if nothing found
        }
      }
      return value;
    }
  }
  
  return value;
}

export function getAlternateLanguageUrl(currentPath: string, targetLang: Language): string {
  const currentLang = getLanguageFromPath(currentPath);
  if (currentLang === targetLang) return currentPath;

  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  const segments = normalizedPath.split('/').filter(Boolean);
  const langIndex = segments.findIndex((segment) => isValidLanguage(segment));

  if (langIndex >= 0) {
    if (targetLang === 'es') {
      segments.splice(langIndex, 1);
    } else {
      segments[langIndex] = targetLang;
    }

    return segments.length > 0 ? `/${segments.join('/')}/` : '/';
  }

  if (targetLang === 'es') {
    return normalizedPath;
  }

  segments.push(targetLang);
  return `/${segments.join('/')}/`;
}

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es'];

export function isValidLanguage(lang: any): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang);
}
