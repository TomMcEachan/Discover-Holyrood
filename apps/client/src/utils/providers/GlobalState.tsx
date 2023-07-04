"use client";

import { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { HamburgerOpenClose } from "@/utils/state/HamburgerOpenClose";
import { ColorModeMachine } from "@/utils/state/ColorModeMachine";
import { GlobalSearchOpenClose } from "@/utils/state/GlobalSearchOpenClose";

export const GlobalStateContext = createContext({
    hamburgerMachine: {} as any,
    colourModeMachine: {} as any,
    globalSearchMachine: {} as any,
});

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const hamburgerMachine = useInterpret(HamburgerOpenClose);
    const colourModeMachine = useInterpret(ColorModeMachine);
    const globalSearchMachine = useInterpret(GlobalSearchOpenClose);

    return (
        <GlobalStateContext.Provider
            value={{
                hamburgerMachine,
                colourModeMachine,
                globalSearchMachine,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};
