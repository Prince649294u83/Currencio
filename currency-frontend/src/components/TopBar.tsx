import LanguageSwitcher from "./LanguageSwitcher";

function TopBar() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            background: "var(--card)",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#2563eb",
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700
                }}>
                    C
                </div>
                <h2 style={{ margin: 0 }}>Currencio</h2>
            </div>

            <LanguageSwitcher />
        </div>
    );
}

export default TopBar;
