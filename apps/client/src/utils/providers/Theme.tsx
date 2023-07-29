"use client";
import { Theme } from "react-daisyui";
import { useState, useEffect, createContext } from "react";

export type Theme = "parliamentStylesLight" | "parliamentStylesDark";

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
    undefined,
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("parliamentStylesLight");

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storedTheme = localStorage.getItem("theme") as Theme;
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Theme dataTheme={theme}>{children}</Theme>
        </ThemeContext.Provider>
    );
};

export const toggleTheme = () => {
    if (typeof window !== "undefined") {
        const theme = localStorage.getItem("theme") as Theme;
        const newTheme =
            theme === "parliamentStylesLight"
                ? "parliamentStylesDark"
                : "parliamentStylesLight";

        localStorage.setItem("theme", newTheme);

        return newTheme;
    }
};
