import { useTranslate } from "../i18n/useTranslate";
import type { Language } from "../i18n/translations";

const languageOptions: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "zh", label: "中文" },
    { code: "ar", label: "العربية" },
];

function LanguageSwitcher() {
    const { language, changeLanguage } = useTranslate();

    return (
        <select
            value={language}
            onChange={(e) =>
                changeLanguage(e.target.value as Language)
            }
            style={{
                padding: "0.4rem 0.6rem",
                borderRadius: "6px",
                cursor: "pointer",
            }}
        >
            {languageOptions.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.label}
                </option>
            ))}
        </select>
    );
}

export default LanguageSwitcher;