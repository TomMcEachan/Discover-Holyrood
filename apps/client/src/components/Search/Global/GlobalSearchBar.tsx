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
                className="h-10 w-[100%] rounded-md border-2 border-sppurple-light bg-base-100 text-primary py-4 pl-4 text-[16px]"
                type="search"
                placeholder="e.g, 'What is an MSP?'"
                id="global-search-bar"
                value={query}
                onChange={(event) => refine(event.currentTarget.value)}
            />
        </>
    );
};
