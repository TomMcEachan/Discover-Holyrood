import React from "react";
import {
    useSearchBox,
    type SearchBoxProps,
} from "react-instantsearch-hooks-web";

export const GlobalSearchBar = () => {
    const { query, refine } = useSearchBox();

    return (
        <>
            <input
                className="h-8 w-[95%] rounded-lg border-2 border-sppurple-light bg-white text-black py-4 pl-4 text-xs"
                type="search"
                placeholder="e.g, 'What is an MSP?'"
                id="global-search-bar"
                value={query}
                onChange={(event) => refine(event.currentTarget.value)}
            />
        </>
    );
};
