type Props = {
    theme: "light" | "dark";
    onToggle: () => void;
};

function ThemeToggle({ theme, onToggle }: Props) {
    return (
        <button
            onClick={onToggle}
            title="Toggle theme"
            style={{
                width: "42px",
                fontSize: "18px",
            }}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}

export default ThemeToggle;
