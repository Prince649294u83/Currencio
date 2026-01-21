import "../styles/dashboard.css";

type Props = {
    top: React.ReactNode;
    leftTop: React.ReactNode;
    rightTop: React.ReactNode;
    leftBottom: React.ReactNode;
    rightBottom: React.ReactNode;
};

function DashboardLayout({
                             top,
                             leftTop,
                             rightTop,
                             leftBottom,
                             rightBottom,
                         }: Props) {
    return (
        <div className="dashboard-page">
            {top}

            <div className="dashboard-grid">
                <div>{leftTop}</div>
                <div>{rightTop}</div>
                <div>{leftBottom}</div>
                <div>{rightBottom}</div>
            </div>
        </div>
    );
}

export default DashboardLayout;
