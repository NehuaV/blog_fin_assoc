import { defaultLang, ui, type Lang } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return value === "en" || value === "it";
}

export function useTranslations(lang: string | undefined) {
  const resolved: Lang = isLang(lang) ? lang : defaultLang;
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[resolved][key] ?? ui[defaultLang][key];
  };
}

export function dateLocale(lang: string | undefined): string {
  return isLang(lang) && lang === "it" ? "it-IT" : "en-GB";
}
