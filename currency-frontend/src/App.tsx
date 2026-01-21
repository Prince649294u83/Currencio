import { useEffect, useState } from "react";
import CurrencyConverterPage from "./pages/CurrencyConverterPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./styles/theme.css";
import "./styles/app.css";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // -------------------- LOAD SAVED THEME --------------------
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;

        const initialTheme = savedTheme ?? "light";
        setTheme(initialTheme);
        document.body.className = initialTheme;
    }, []);

    // -------------------- TOGGLE THEME --------------------
    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
    }

    // -------------------- RENDER --------------------
    return (
        <div className="app-root">
            {/* TOP NAVBAR */}
            <header className="topbar">
                <div className="topbar-left">
                    <div className="logo">C</div>
                    <span className="app-name">Currencio</span>
                </div>

                <div className="topbar-right">
                    <LanguageSwitcher />

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                    >
                        {theme === "light"
                            ? "🌙 Dark Mode"
                            : "☀️ Light Mode"}
                    </button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="main-content">
                <CurrencyConverterPage />
            </main>
        </div>
    );
}

export default App;
