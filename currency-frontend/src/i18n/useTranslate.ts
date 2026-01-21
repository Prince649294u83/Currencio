import { useCallback, useSyncExternalStore } from "react";
import { translations, type Language } from "./translations";

/* ------------------ GLOBAL STORE ------------------ */

let currentLanguage: Language =
    (localStorage.getItem("language") as Language) || "en";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getSnapshot() {
    return currentLanguage;
}

function setLanguage(lang: Language) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    listeners.forEach((l) => l());
}

/* ------------------ HOOK ------------------ */

export function useTranslate() {
    const language = useSyncExternalStore(
        subscribe,
        getSnapshot
    );

    const t = useCallback(
        (key: string) => {
            const keys = key.split(".");
            let value: any = translations[language];

            for (const k of keys) {
                value = value?.[k];
                if (!value) return key;
            }

            return value;
        },
        [language]
    );

    return {
        language,
        changeLanguage: setLanguage,
        t,
    };
}
