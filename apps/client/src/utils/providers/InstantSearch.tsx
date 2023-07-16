"use client";

import React from "react";
import {
    InstantSearchSSRProvider,
    InstantSearchServerState,
} from "react-instantsearch-hooks-web";

type InstantSearchProviderProps = {
    children: React.ReactNode;
    serverState?: InstantSearchServerState;
};

const InstantSearchProvider = ({
    children,
    serverState,
}: InstantSearchProviderProps) => {
    return (
        <InstantSearchSSRProvider {...serverState}>
            {children}
        </InstantSearchSSRProvider>
    );
};

export default InstantSearchProvider;
