"use client";
import dynamic from "next/dynamic";
import { Riple } from "react-loading-indicators";

// Custom Search Components
import { CustomSearchBar } from "@/components/Search/Articles/ArticleCustomSearchBar";
import { ArticleRefinementSelector } from "@/components/Search/Articles/ArticleRefinementSelector";
import { ArticleCurrentRefinements } from "@/components/Search/Articles/ArticleCurrentRefinements";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// React InstantSearch Components
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";

// Dynamic Components
const ArticleHits = dynamic(
    () => import("../Articles/ArticleHits").then((res) => res.ArticleHits),
    {
        loading: () => (
            <div className="flex flex-col items-center justify-center">
                <Riple color={"purple"} />
            </div>
        ),
    },
);

// Search Component
export const ArticleSearchComponent = (): JSX.Element => {
    return (
        <InstantSearch searchClient={searchClient} indexName="all">
            <Configure hitsPerPage={8} />
            <ArticleRefinementSelector
                attribute="categories.name"
                sortBy={["name:asc"]}
            />
            <ArticleCurrentRefinements />
            <div className="divider" />
            <ArticleHits />
        </InstantSearch>
    );
};
