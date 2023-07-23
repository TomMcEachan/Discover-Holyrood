"use client";

// Import Search SSR Provider
import InstantSearchProvider from "@/utils/providers/InstantSearch";

// Custom Search Components
import { ContentRefinementSelector } from "@/components/Search/Content/ContentRefinements";
import { ContentCurrentRefinements } from "@/components/Search/Content/ContentCurrentRefinements";
import ContentHits from "@/components/Search/Content/ContentHits";

// Meilisearch Client
import { searchClient } from "@/utils/search/Search";

// React InstantSearch Components
import { InstantSearch, Configure } from "react-instantsearch-hooks-web";

type SearchComponentProps = {
    indexName: string;
};

// Search Component
export const ContentSearchComponent = ({
    indexName,
}: SearchComponentProps): JSX.Element => {
    return (
        <InstantSearchProvider>
            <InstantSearch searchClient={searchClient} indexName={indexName}>
                <Configure hitsPerPage={8} />
                <ContentRefinementSelector attribute="categories" />
                <ContentCurrentRefinements />
                <div className="divider" />
                <ContentHits indexType={indexName} />
            </InstantSearch>
        </InstantSearchProvider>
    );
};
