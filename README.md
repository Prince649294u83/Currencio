# 🌍 Currencio — Full-Stack Currency Converter Dashboard

Currencio is a **production-ready, full-stack currency converter dashboard** built using **Java Spring Boot** for the backend and **React + TypeScript (Vite)** for the frontend.

It supports real-time currency conversion, historical trends, time-range analysis, conversion history, multi-language UI, and dark/light themes.

This file focuses on **what the project is**, **what it does**, and **how it is structured**.

---

## ✨ Key Features

### 💱 Currency Conversion
- Real-time conversion using ECB-backed rates
- Supports all major global currencies
- Input validation and error handling

### 📊 Exchange Rate Trends
- Interactive line chart (Chart.js)
- Time range selector:
  - **5D** – Last 5 days
  - **1M** – Last 1 month
  - **6M** – Last 6 months
  - **YTD** – Year to date

### 🧾 Conversion History
- Session-based conversion history table
- Displays:
  - Time of conversion
  - From → To currencies
  - Input amount
  - Converted amount

### 🌐 Internationalization (i18n)
- Supports **10 languages**:
  - English (en)
  - Hindi (hi)
  - French (fr)
  - Spanish (es)
  - German (de)
  - Italian (it)
  - Portuguese (pt)
  - Russian (ru)
  - Chinese (zh)
  - Arabic (ar)
- Language switcher in the dashboard top bar

### 🎨 UI / UX
- Modern dashboard-style layout
- Card-based design
- Responsive (desktop & mobile)
- Dark / Light theme toggle
- Clean and accessible UI

---

## 🧱 Architecture Overview

### Backend (Spring Boot)
- RESTful, stateless APIs
- Layered architecture:
  - Controller
  - Service
  - External API client
- Integrates with **Frankfurter Exchange Rate API**
- Handles:
  - Currency conversion
  - Historical rates
  - Currency symbols

### Frontend (React + TypeScript)
- Built with Vite
- Strong typing with TypeScript
- Modular component architecture
- Centralized i18n system
- Reusable chart component
- API abstraction layer

---

## 📁 Project Structure
```text

Currencio/
│
├── currency-backend/                         # Java Spring Boot backend
│   │
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/
│   │               └── example/
│   │                   └── currency/
│   │                       │
│   │                       ├── controller/  # REST API layer (HTTP endpoints)
│   │                       │   ├── CurrencyController.java
│   │                       │   │   └── Handles currency-related APIs
│   │                       │   │       (/convert, /currencies, /rates/history)
│   │                       │   │
│   │                       │   └── HealthController.java
│   │                       │       └── Health check endpoint (/api/health)
│   │                       │
│   │                       ├── service/     # Business logic layer
│   │                       │   └── CurrencyService.java
│   │                       │       └── Core logic for conversion, history,
│   │                       │           and currency data processing
│   │                       │
│   │                       ├── client/      # External API integration
│   │                       │   └── ExchangeRateClient.java
│   │                       │       └── Communicates with Frankfurter API
│   │                       │
│   │                       └── CurrencyApplication.java
│   │                           └── Spring Boot application entry point
│   │
│   └── pom.xml                               # Maven configuration
│       └── Defines dependencies, Java version,
│           Spring Boot plugins, and build config
│
├── currency-frontend/                        # React + TypeScript frontend
│   │
│   ├── src/
│   │   │
│   │   ├── api/                              # API communication layer
│   │   │   └── currencyApi.ts
│   │   │       └── Centralized backend API calls
│   │   │           (convert, currencies, history)
│   │   │
│   │   ├── components/                       # Reusable UI components
│   │   │   ├── ExchangeRateChart.tsx
│   │   │   │   └── Chart.js-based line chart
│   │   │   │       for exchange rate trends
│   │   │   │
│   │   │   └── LanguageSwitcher.tsx
│   │   │       └── Dropdown to change UI language (i18n)
│   │   │
│   │   ├── i18n/                             # Internationalization system
│   │   │   ├── translations.ts
│   │   │   │   └── All language dictionaries
│   │   │   │       (10 supported languages)
│   │   │   │
│   │   │   └── useTranslate.ts
│   │   │       └── Custom hook for translation access (t("key"))
│   │   │
│   │   ├── pages/                            # Page-level components
│   │   │   └── CurrencyConverterPage.tsx
│   │   │       └── Main dashboard page:
│   │   │           converter, chart,
│   │   │           time range selector,
│   │   │           conversion history
│   │   │
│   │   ├── styles/                           # Global & component styles
│   │   │   ├── app.css
│   │   │   │   └── Layout & dashboard styles
│   │   │   │
│   │   │   ├── converter.css
│   │   │   │   └── Currency converter card styling
│   │   │   │
│   │   │   └── theme.css
│   │   │       └── Light/Dark theme variables
│   │   │
│   │   ├── App.tsx                           # Root React component
│   │   │   └── App shell, top navbar,
│   │   │       language & theme toggle
│   │   │
│   │   └── main.tsx                          # Frontend entry point
│   │       └── Mounts React app to DOM
│   │
│   ├── package.json                          # Frontend dependencies & scripts
│   │   └── Defines React, Chart.js, Vite, etc.
│   │
│   └── vite.config.ts                        # Vite build & dev server config
│
├── README.md                                 # Project overview & documentation
│   └── Explains features, architecture,
│       and project structure
│
└── RUN_PROJECT.md                            # Step-by-step setup & run guide
    └── Installation requirements,
        commands, and troubleshooting

---

## 🌐 External API Used

**Frankfurter Exchange Rates API**
- Free
- No API key required
- ECB-based rates

https://www.frankfurter.app

---

---

## 🚀 Ideal For

- Academic projects
- Portfolio / resume
- Hackathons
- Real-world full-stack demonstrations

Currencio follows **industry-standard practices** and is easy to extend and maintain.
