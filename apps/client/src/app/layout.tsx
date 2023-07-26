// Import Styles
import "./globals.css";
import { ThemeProvider } from "@/utils/providers/Theme";

// Import Components
import { AppBar } from "@/components/ServerComponents/AppBar/AppBar";
import { Sidebar } from "@/components/ClientComponents/Sidebar/Sidebar";
import { Navbar } from "@/components/ClientComponents/NavBar/NavBar";
import { GlobalSearchModal } from "@/components/Search/Global/GlobalSearchModal";

// Import Global State
import { GlobalStateProvider } from "@/utils/providers/GlobalState";

// Analytics
import { Analytics } from "@vercel/analytics/react";

//Import Metadata Type
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
    title: {
        template: "Discover Holyrood | %s",
        default: "Discover Holyrood",
    },
    description:
        "Discover Holyrood helps you learn about the Scottish Parliament and how you can get involved.",
    keywords: [
        "Scottish Parliament",
        "Holyrood",
        "Scotland",
        "Government",
        "Politics",
    ],
    applicationName: "Discover Holyrood",
    appleWebApp: {
        capable: true,
        title: "Discover Holyrood",
        statusBarStyle: "black-translucent",
    },
    themeColor: "#ffffff",
    viewport:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <GlobalStateProvider>
                    <ThemeProvider>
                        <Navbar />
                        <GlobalSearchModal />
                        <div
                            id="content-section"
                            className="min-w-screen top-10 mx-4 mt-20 min-h-full pt-10"
                        >
                            {children}
                        </div>
                        <AppBar />
                        <Sidebar />
                    </ThemeProvider>
                </GlobalStateProvider>
                <Analytics />
            </body>
        </html>
    );
}
