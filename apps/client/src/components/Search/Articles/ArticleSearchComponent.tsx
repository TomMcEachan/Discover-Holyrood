"use client";

// Custom Search Components
import { ArticleRefinementSelector } from "@/components/Search/Articles/ArticleRefinementSelector";
import { ArticleCurrentRefinements } from "@/components/Search/Articles/ArticleCurrentRefinements";
import ArticleHits from "@/components/Search/Articles/ArticleHits";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// React InstantSearch Components
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";

type SearchComponentProps = {
    indexName: string;
};

// Search Component
export const ArticleSearchComponent = ({
    indexName,
}: SearchComponentProps): JSX.Element => {
    return (
        <InstantSearch searchClient={searchClient} indexName={indexName}>
            <Configure hitsPerPage={8} />
            <ArticleRefinementSelector attribute="categories" />
            <ArticleCurrentRefinements />
            <div className="divider" />
            <ArticleHits indexType={indexName} />
        </InstantSearch>
    );
};
