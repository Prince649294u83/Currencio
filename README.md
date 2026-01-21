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

Currencio/
│
├── currency-backend/
│ ├── src/main/java/com/example/currency
│ │ ├── controller/
│ │ │ ├── CurrencyController.java
│ │ │ └── HealthController.java
│ │ ├── service/
│ │ │ └── CurrencyService.java
│ │ ├── client/
│ │ │ └── ExchangeRateClient.java
│ │ └── CurrencyApplication.java
│ └── pom.xml
│
├── currency-frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └── currencyApi.ts
│ │ ├── components/
│ │ │ ├── ExchangeRateChart.tsx
│ │ │ └── LanguageSwitcher.tsx
│ │ ├── i18n/
│ │ │ ├── translations.ts
│ │ │ └── useTranslate.ts
│ │ ├── pages/
│ │ │ └── CurrencyConverterPage.tsx
│ │ ├── styles/
│ │ │ ├── app.css
│ │ │ ├── converter.css
│ │ │ └── theme.css
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── package.json
│ └── vite.config.ts
│
├── RUN_PROJECT.md
└── README.md

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
