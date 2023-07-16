"use client";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import React from "react";

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
    return (
        <ContentWrapper>
            <PageTitle
                title="Search"
                subtitle="Search the Discover Holyrood App"
            />
            <div className="divider" />
            <div className="">
                <InstantSearchProvider>
                    <InstantSearch indexName="all" searchClient={searchClient}>
                        <Configure hitsPerPage={8} />
                        <div className="flex flex-col h-full w-full">
                            <div className="lg:self-start pb-4"></div>
                            <div className="flex flex-col w-full">
                                <GlobalSearchBar />
                            </div>
                            <div className="">
                                <p className="text-xs pb-0.5 text-primary pt-2">
                                    Filter by categories
                                </p>
                                <GlobalSearchRefinements
                                    attribute="categories"
                                    operator="and"
                                    sortBy={["name:asc"]}
                                />
                                <p className="text-xs pb-0.5 text-primary pt-2">
                                    Filter by tags
                                </p>
                                <GlobalSearchRefinements
                                    attribute="tags"
                                    operator="and"
                                    sortBy={["name:asc"]}
                                />
                            </div>
                            <div className="divider px-6" />
                            <div className="">
                                <div className="grid grid-cols-4">
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
