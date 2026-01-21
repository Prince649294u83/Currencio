/**
 * PageContainer.tsx
 *
 * Reusable layout wrapper
 * Keeps content centered and readable
 */

/**
 * PageContainer.tsx
 *
 * Reusable layout wrapper
 * Keeps content centered and readable
 */
import type {ReactNode} from "react";

interface PageContainerProps {
    children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "2rem",
                    boxShadow:
                        "0 10px 25px rgba(0,0,0,0.08)",
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default PageContainer;
