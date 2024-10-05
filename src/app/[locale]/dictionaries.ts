
const dictionaries = {
    en: () => import("@/utils/languageContent/en.json").then((module) => module.default),
    hi: () => import("@/utils/languageContent/hi.json").then((module) => module.default),
};

export const getDictionary = async (locale:any) => dictionaries[locale]();