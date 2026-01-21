/**
 * ExchangeRateChart.tsx
 *
 * Dashboard-ready exchange rate chart
 * - Supports time ranges (5D / 1M / 6M / YTD)
 * - Auto-sorts dates
 * - Safe date handling (no mutation bugs)
 * - Pure presentational component
 */

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

/* ---------------- REGISTER ---------------- */

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

/* ---------------- TYPES ---------------- */

export type TimeRange = "5D" | "1M" | "6M" | "YTD";

interface ExchangeRateChartProps {
    base: string;
    target: string;
    history: Record<string, number>;
    range?: TimeRange;
}

/* ---------------- HELPERS ---------------- */

function getCutoffDate(range: TimeRange): Date {
    const now = new Date();

    switch (range) {
        case "5D":
            return new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() - 5
            );
        case "6M":
            return new Date(
                now.getFullYear(),
                now.getMonth() - 6,
                now.getDate()
            );
        case "YTD":
            return new Date(now.getFullYear(), 0, 1);
        case "1M":
        default:
            return new Date(
                now.getFullYear(),
                now.getMonth() - 1,
                now.getDate()
            );
    }
}

function filterByRange(
    history: Record<string, number>,
    range: TimeRange
) {
    const cutoff = getCutoffDate(range);

    return Object.entries(history)
        .sort(
            ([a], [b]) =>
                new Date(a).getTime() - new Date(b).getTime()
        )
        .filter(([date]) => new Date(date) >= cutoff);
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
    });
}

/* ---------------- COMPONENT ---------------- */

function ExchangeRateChart({
                               base,
                               target,
                               history,
                               range = "1M",
                           }: ExchangeRateChartProps) {
    const filtered = filterByRange(history, range);

    if (filtered.length === 0) {
        return (
            <div
                style={{
                    height: "360px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9ca3af",
                    fontSize: "14px",
                }}
            >
                No chart data available
            </div>
        );
    }

    const labels = filtered.map(([date]) => formatDate(date));
    const values = filtered.map(([, value]) => value);

    const data = {
        labels,
        datasets: [
            {
                label: `${base} → ${target}`,
                data: values,
                borderColor: "#6366f1",
                backgroundColor: "rgba(99, 102, 241, 0.15)",
                fill: true,
                tension: 0.35,
                pointRadius: 2,
                pointHoverRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "index" as const,
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 6,
                    color: "#9ca3af",
                },
            },
            y: {
                grid: {
                    color: "rgba(0,0,0,0.05)",
                },
                ticks: {
                    color: "#9ca3af",
                    callback: (value: number) =>
                        value.toFixed(4),
                },
            },
        },
    };

    return (
        <div style={{ height: "360px", width: "100%" }}>
            <Line data={data} options={options} />
        </div>
    );
}

export default ExchangeRateChart;
