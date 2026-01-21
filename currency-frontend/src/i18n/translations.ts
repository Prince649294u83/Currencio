export type Language =
    | "en"
    | "hi"
    | "fr"
    | "es"
    | "de"
    | "it"
    | "pt"
    | "ru"
    | "zh"
    | "ar";

export const translations: Record<Language, any> = {
    en: {
        title: {
            currencyConverter: "Currency Converter",
        },
        actions: {
            convert: "Convert",
            converting: "Converting…",
            swap: "Swap currencies",
        },
        labels: {
            amount: "Amount",
            convertedAmount: "Converted Amount",
            rate: "Rate",
            date: "Date",
            trendTitle: "Exchange Rate Trend",
            noData: "No data available",

            /* NEW */
            conversionHistory: "Conversion History",
            time: "Time",
            fromTo: "From → To",
        },
        errors: {
            loadCurrencies: "Failed to load currencies",
            invalidAmount: "Amount must be greater than 0",
            sameCurrency: "Please select two different currencies",
            conversionFailed: "Conversion failed",
        },
    },

    hi: {
        title: { currencyConverter: "मुद्रा परिवर्तक" },
        actions: {
            convert: "परिवर्तित करें",
            converting: "परिवर्तित हो रहा है…",
            swap: "मुद्राएँ बदलें",
        },
        labels: {
            amount: "राशि",
            convertedAmount: "परिवर्तित राशि",
            rate: "दर",
            date: "तारीख",
            trendTitle: "विनिमय दर रुझान",
            noData: "कोई डेटा उपलब्ध नहीं",

            conversionHistory: "परिवर्तन इतिहास",
            time: "समय",
            fromTo: "से → तक",
        },
        errors: {
            loadCurrencies: "मुद्राएँ लोड नहीं हो सकीं",
            invalidAmount: "राशि 0 से अधिक होनी चाहिए",
            sameCurrency: "दो अलग-अलग मुद्राएँ चुनें",
            conversionFailed: "परिवर्तन विफल",
        },
    },

    fr: {
        title: { currencyConverter: "Convertisseur de devises" },
        actions: {
            convert: "Convertir",
            converting: "Conversion…",
            swap: "Échanger les devises",
        },
        labels: {
            amount: "Montant",
            convertedAmount: "Montant converti",
            rate: "Taux",
            date: "Date",
            trendTitle: "Tendance du taux",
            noData: "Aucune donnée disponible",

            conversionHistory: "Historique des conversions",
            time: "Heure",
            fromTo: "De → À",
        },
        errors: {
            loadCurrencies: "Échec du chargement des devises",
            invalidAmount: "Le montant doit être supérieur à 0",
            sameCurrency: "Sélectionnez deux devises différentes",
            conversionFailed: "Échec de la conversion",
        },
    },

    es: {
        title: { currencyConverter: "Convertidor de divisas" },
        actions: {
            convert: "Convertir",
            converting: "Convirtiendo…",
            swap: "Intercambiar monedas",
        },
        labels: {
            amount: "Cantidad",
            convertedAmount: "Cantidad convertida",
            rate: "Tasa",
            date: "Fecha",
            trendTitle: "Tendencia del tipo de cambio",
            noData: "No hay datos disponibles",

            conversionHistory: "Historial de conversiones",
            time: "Hora",
            fromTo: "De → A",
        },
        errors: {
            loadCurrencies: "Error al cargar monedas",
            invalidAmount: "El monto debe ser mayor que 0",
            sameCurrency: "Seleccione dos monedas diferentes",
            conversionFailed: "Error en la conversión",
        },
    },

    de: {
        title: { currencyConverter: "Währungsrechner" },
        actions: {
            convert: "Umrechnen",
            converting: "Wird umgerechnet…",
            swap: "Währungen tauschen",
        },
        labels: {
            amount: "Betrag",
            convertedAmount: "Umgerechneter Betrag",
            rate: "Kurs",
            date: "Datum",
            trendTitle: "Wechselkursverlauf",
            noData: "Keine Daten verfügbar",

            conversionHistory: "Umrechnungshistorie",
            time: "Zeit",
            fromTo: "Von → Zu",
        },
        errors: {
            loadCurrencies: "Währungen konnten nicht geladen werden",
            invalidAmount: "Betrag muss größer als 0 sein",
            sameCurrency: "Bitte zwei verschiedene Währungen wählen",
            conversionFailed: "Umrechnung fehlgeschlagen",
        },
    },

    it: {
        title: { currencyConverter: "Convertitore di valuta" },
        actions: {
            convert: "Converti",
            converting: "Conversione…",
            swap: "Scambia valute",
        },
        labels: {
            amount: "Importo",
            convertedAmount: "Importo convertito",
            rate: "Tasso",
            date: "Data",
            trendTitle: "Andamento del cambio",
            noData: "Nessun dato disponibile",

            conversionHistory: "Storico conversioni",
            time: "Ora",
            fromTo: "Da → A",
        },
        errors: {
            loadCurrencies: "Errore nel caricamento valute",
            invalidAmount: "L'importo deve essere maggiore di 0",
            sameCurrency: "Seleziona due valute diverse",
            conversionFailed: "Conversione fallita",
        },
    },

    pt: {
        title: { currencyConverter: "Conversor de moedas" },
        actions: {
            convert: "Converter",
            converting: "Convertendo…",
            swap: "Trocar moedas",
        },
        labels: {
            amount: "Valor",
            convertedAmount: "Valor convertido",
            rate: "Taxa",
            date: "Data",
            trendTitle: "Tendência da taxa",
            noData: "Nenhum dado disponível",

            conversionHistory: "Histórico de conversões",
            time: "Hora",
            fromTo: "De → Para",
        },
        errors: {
            loadCurrencies: "Falha ao carregar moedas",
            invalidAmount: "O valor deve ser maior que 0",
            sameCurrency: "Selecione duas moedas diferentes",
            conversionFailed: "Falha na conversão",
        },
    },

    ru: {
        title: { currencyConverter: "Конвертер валют" },
        actions: {
            convert: "Конвертировать",
            converting: "Конвертация…",
            swap: "Поменять валюты",
        },
        labels: {
            amount: "Сумма",
            convertedAmount: "Конвертированная сумма",
            rate: "Курс",
            date: "Дата",
            trendTitle: "Динамика курса",
            noData: "Нет данных",

            conversionHistory: "История конверсий",
            time: "Время",
            fromTo: "Из → В",
        },
        errors: {
            loadCurrencies: "Не удалось загрузить валюты",
            invalidAmount: "Сумма должна быть больше 0",
            sameCurrency: "Выберите разные валюты",
            conversionFailed: "Ошибка конвертации",
        },
    },

    zh: {
        title: { currencyConverter: "货币转换器" },
        actions: {
            convert: "转换",
            converting: "转换中…",
            swap: "交换货币",
        },
        labels: {
            amount: "金额",
            convertedAmount: "转换后金额",
            rate: "汇率",
            date: "日期",
            trendTitle: "汇率趋势",
            noData: "暂无数据",

            conversionHistory: "转换历史",
            time: "时间",
            fromTo: "从 → 到",
        },
        errors: {
            loadCurrencies: "无法加载货币",
            invalidAmount: "金额必须大于0",
            sameCurrency: "请选择不同的货币",
            conversionFailed: "转换失败",
        },
    },

    ar: {
        title: { currencyConverter: "محول العملات" },
        actions: {
            convert: "تحويل",
            converting: "جاري التحويل…",
            swap: "تبديل العملات",
        },
        labels: {
            amount: "المبلغ",
            convertedAmount: "المبلغ المحول",
            rate: "السعر",
            date: "التاريخ",
            trendTitle: "اتجاه سعر الصرف",
            noData: "لا توجد بيانات",

            conversionHistory: "سجل التحويلات",
            time: "الوقت",
            fromTo: "من → إلى",
        },
        errors: {
            loadCurrencies: "فشل تحميل العملات",
            invalidAmount: "يجب أن يكون المبلغ أكبر من 0",
            sameCurrency: "يرجى اختيار عملتين مختلفتين",
            conversionFailed: "فشل التحويل",
        },
    },
};
