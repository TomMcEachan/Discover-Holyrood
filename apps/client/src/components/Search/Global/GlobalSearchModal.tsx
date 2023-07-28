"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { GlobalStateContext } from "@/utils/providers/GlobalState";
import { useContext } from "react";
import { useSelector } from "@xstate/react";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// React InstantSearch Components
import {
    InstantSearch,
    Configure,
    type SearchBoxProps,
    Pagination,
    useInstantSearch,
} from "react-instantsearch-hooks-web";

// Custom Search Components
import { GlobalSearchBar } from "@/components/Search/Global/GlobalSearchBar";
import { GlobalSearchRefinements } from "@/components/Search/Global/GlobalSearchRefinements";
import { GlobalSearchHits } from "@/components/Search/Global/GlobalSearchHits";
import { GlobalPagination } from "@/components/Search/Global/GlobalPagination";

const searchOpen = (state: any) => {
    return state.matches("Open");
};

export const GlobalSearchModal = (props: SearchBoxProps) => {
    const global = useContext(GlobalStateContext);
    const searchIsOpen = useSelector(global.globalSearchMachine, searchOpen);

    return (
        <Dialog
            className="relative z-50 h-screen w-screen"
            as="div"
            onClose={() => global.globalSearchMachine.send("SWITCH")}
            open={searchIsOpen}
        >
            {/* Background overlay */}
            <div className="fixed inset-0 bg-primary/95" aria-hidden="true" />

            {/* Modal panel, animates in/out */}
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex h-screen items-center justify-center p-4 w-full overflow-auto">
                    <Dialog.Panel className="mx-8 md:mx-20 h-full rounded bg-white w-full overflow-auto py-5">
                        <div className="pt-2">
                            <InstantSearch
                                indexName="all"
                                searchClient={searchClient}
                            >
                                <Configure hitsPerPage={3} />
                                <div className="flex flex-col items-center justify-center h-full w-full">
                                    <div className="self-center lg:self-start pb-4 mx-[5%]">
                                        <Dialog.Title>
                                            <h2 className="font-bold text-4xl md:text-6xl font-primary">
                                                Search
                                            </h2>
                                        </Dialog.Title>
                                    </div>
                                    <div className="flex flex-col w-[95%] justify-center items-center">
                                        <GlobalSearchBar />
                                    </div>
                                    <div className="self-center lg:self-start mx-[5%]">
                                        <p className="text-xs pb-0.5 pl-0.5 text-primary pt-2 self-center lg:self-start">
                                            Filter by categories
                                        </p>
                                        <GlobalSearchRefinements
                                            attribute="categories"
                                            operator="and"
                                            sortBy={["name:asc"]}
                                        />
                                        <p className="text-xs pb-0.5 pl-0.5 text-primary pt-2 self-center lg:self-start">
                                            Filter by tags
                                        </p>
                                        <GlobalSearchRefinements
                                            attribute="tags"
                                            operator="and"
                                            sortBy={["name:asc"]}
                                        />
                                    </div>
                                    <div className="divider" />
                                    <div className="self-center lg:self-start mx-[5%]">
                                        <div className="">
                                            <GlobalSearchHits />
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <GlobalPagination />
                                    </div>
                                </div>
                            </InstantSearch>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};
