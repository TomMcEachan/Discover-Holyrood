"use client";

import { useContext } from "react";
import { ThemeContext } from "@/utils/providers/Theme";

export const useThemeToggle = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeToggle must be used within a ThemeProvider");
    }
    return context;
};

export default useThemeToggle;
