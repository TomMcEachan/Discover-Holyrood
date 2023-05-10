"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { PageTitle } from "../../client-components/PageTitle/PageTitle";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// React InstantSearch Components
import {
    InstantSearch,
    Configure,
    type SearchBoxProps,
} from "react-instantsearch-hooks-web";

// Custom Search Components
import { GlobalSearchBar } from "@/components/Search/Global/GlobalSearchBar";
import { GlobalSearchRefinements } from "@/components/Search/Global/GlobalSearchRefinements";

const searchOpen = (state: any) => {
    return state.matches("Open");
};

export const GlobalSearchModal = (props: SearchBoxProps) => {
    const global = useContext(GlobalStateContext);
    const searchIsOpen = useSelector(global.globalSearchMachine, searchOpen);

    return (
        <Dialog
            className="relative z-50 h-full w-full"
            as="div"
            onClose={() => global.globalSearchMachine.send("SWITCH")}
            open={searchIsOpen}
        >
            {/* Background overlay */}
            <div className="fixed inset-0 bg-primary/95" aria-hidden="true" />

            {/* Modal panel, animates in/out */}
            <div className="fixed inset-0 overflow-y-auto h-full w-full">
                <div className="flex h-full items-center justify-center p-4 w-full">
                    <Dialog.Panel className="mx-20 h-full rounded bg-white">
                        <InstantSearch
                            indexName="all"
                            searchClient={searchClient}
                        >
                            <div className="flex flex-col items-center justify-center min-h-full">
                                <div className="self-start pb-4 mx-[5%]">
                                    <Dialog.Title>
                                        <PageTitle
                                            title="Search"
                                            subtitle="Search for learning material across the app"
                                        />
                                    </Dialog.Title>
                                </div>
                                <div className="flex flex-col w-[95%] justify-center items-center">
                                    <GlobalSearchBar />
                                </div>
                                <div className="self-start mx-[5%]">
                                    <p className="text-xs pb-0.5 pl-0.5 text-primary pt-2">
                                        Filter by categories
                                    </p>
                                    <GlobalSearchRefinements
                                        attribute="tags.name"
                                        operator="and"
                                    />
                                </div>
                            </div>
                        </InstantSearch>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};
