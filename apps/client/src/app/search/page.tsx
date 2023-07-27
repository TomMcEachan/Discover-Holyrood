"use client";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { useState, useRef, useEffect } from "react";

// React InstantSearch Components
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";
import InstantSearchProvider from "@/utils/providers/InstantSearch";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// Custom Search Components
import { GlobalSearchBar } from "@/components/Search/Global/GlobalSearchBar";
import { GlobalSearchRefinements } from "@/components/Search/Global/GlobalSearchRefinements";
import { GlobalSearchHits } from "@/components/Search/Global/GlobalSearchHits";
import { GlobalPagination } from "@/components/Search/Global/GlobalPagination";

export default function AR(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    function toggleClose() {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    const menuRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !(menuRef.current?.contains(e.target as Element) ?? false) &&
                isOpen
            ) {
                toggleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <ContentWrapper>
            <PageTitle
                title="Search"
                subtitle="Search the Discover Holyrood App"
            />
            <div className="divider" />
            <div>
                <InstantSearchProvider>
                    <InstantSearch indexName="all" searchClient={searchClient}>
                        <Configure hitsPerPage={8} />
                        <div className="flex flex-col h-full w-full">
                            <div className="flex flex-col w-full">
                                <GlobalSearchBar />
                            </div>
                            <div
                                tabIndex={0}
                                className={`${
                                    isOpen
                                        ? "collapse collapse-arrow bg-base-100 rounded-md border-2 mt-4 border-sppurple-light"
                                        : " collapse-close collapse collapse-arrow bg-base-100 rounded-md border-2 mt-4 border-sppurple-light"
                                }`}
                                id="collapse-box"
                                onClick={toggleOpen}
                            >
                                <input
                                    type="checkbox"
                                    name="filter-collapse-checkbox"
                                    id="filter-collapse-checkbox"
                                />
                                <div className="collapse-title text-md font-bold mb-0 pb-0">
                                    Filter your search
                                </div>
                                <div className="collapse-content" ref={menuRef}>
                                    <p className="text-xs pb-0.5 text-primary">
                                        Filter by categories
                                    </p>
                                    <GlobalSearchRefinements
                                        attribute="categories"
                                        sortBy={["name:asc"]}
                                    />
                                    <p className="text-xs pb-0.5 text-primary pt-2">
                                        Filter by tags
                                    </p>
                                    <GlobalSearchRefinements
                                        attribute="tags"
                                        sortBy={["name:asc"]}
                                    />
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="self-center">
                                <GlobalPagination />
                            </div>
                            <div>
                                <div>
                                    <GlobalSearchHits />
                                </div>
                            </div>
                            <div className="pt-5 self-center">
                                <GlobalPagination />
                            </div>
                        </div>
                    </InstantSearch>
                </InstantSearchProvider>
            </div>
        </ContentWrapper>
    );
}
