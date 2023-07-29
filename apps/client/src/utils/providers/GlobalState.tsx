"use client";

import { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { HamburgerOpenClose } from "@/utils/state/HamburgerOpenClose";
import { GlobalSearchOpenClose } from "@/utils/state/GlobalSearchOpenClose";

export const GlobalStateContext = createContext({
    hamburgerMachine: {} as any,

    globalSearchMachine: {} as any,
});

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const hamburgerMachine = useInterpret(HamburgerOpenClose);

    const globalSearchMachine = useInterpret(GlobalSearchOpenClose);

    return (
        <GlobalStateContext.Provider
            value={{
                hamburgerMachine,

                globalSearchMachine,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const changeTheme = (state: any) => {
    return state.matches("Light");
};
