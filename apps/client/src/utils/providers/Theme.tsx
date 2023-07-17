"use client";
import { Theme } from "react-daisyui";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

const changeTheme = (state: any) => {
    return state.matches("Light");
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    return isThemeChange ? (
        <>
            <Theme dataTheme="parliamentStylesLight">{children}</Theme>
        </>
    ) : (
        <>
            <Theme dataTheme="parliamentStylesDark">{children}</Theme>
        </>
    );
};
