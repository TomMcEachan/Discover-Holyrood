"use client";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

const changeTheme = (state: any) => {
    return state.matches("Light");
};

type Props = {
    title: string;
    subtitle: string;
};

export const PageTitle = ({ title, subtitle }: Props) => {
    const global = useContext(GlobalStateContext);
    const isThemeChange = useSelector(global.colourModeMachine, changeTheme);

    return isThemeChange ? (
        <div id="page-title-content" className="pt-2">
            <h1
                className="text-4xl md:text-6xl font-bold text-black"
                id="page-title"
            >
                {title}
            </h1>
            <h2
                className="mt-1 text-lg md:text-xl text-black"
                id="page-subtitle"
            >
                {subtitle}
            </h2>
        </div>
    ) : (
        <div id="page-title-content" className="">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
                {title}
            </h1>
            <h2 className="mt-1 text-xl text-white">{subtitle}</h2>
        </div>
    );
};
