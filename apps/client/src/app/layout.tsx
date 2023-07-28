// Import Styles
import "./globals.css";
import { ThemeProvider } from "@/utils/providers/Theme";

// Import Components
import { AppBar } from "@/components/AppBar/AppBar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Navbar } from "@/components/NavBar/NavBar";
import { GlobalSearchModal } from "@/components/Search/Global/GlobalSearchModal";
import { FloatingButtons } from "@/components/Buttons/FloatingButtons/FloatingButtons";

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
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, maximum-scale=1",
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
                            className="min-w-screen top-10 mx-4 mt-10 min-h-full pt-10"
                        >
                            {children}
                        </div>
                        <FloatingButtons />
                        {/* <AppBar />  */}
                        <Sidebar />
                    </ThemeProvider>
                </GlobalStateProvider>
                <Analytics />
            </body>
        </html>
    );
}
