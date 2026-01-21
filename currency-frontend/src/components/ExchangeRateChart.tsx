/**
 * ExchangeRateChart.tsx
 *
 * Dashboard-ready exchange rate chart
 * - Renders backend-provided time range correctly
 * - Auto-sorts dates
 * - No duplicate filtering (backend is source of truth)
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

interface ExchangeRateChartProps {
    base: string;
    target: string;
    history: Record<string, number>;
}

/* ---------------- HELPERS ---------------- */

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
                           }: ExchangeRateChartProps) {
    const sorted = Object.entries(history)
        .sort(
            ([a], [b]) =>
                new Date(a).getTime() - new Date(b).getTime()
        );

    if (sorted.length === 0) {
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

    const labels = sorted.map(([date]) => formatDate(date));
    const values = sorted.map(([, value]) => value);

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
