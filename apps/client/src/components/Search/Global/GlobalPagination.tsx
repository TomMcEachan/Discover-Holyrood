import React from "react";
import {
    UsePaginationProps,
    usePagination,
} from "react-instantsearch-hooks-web";

export const GlobalPagination = (props: UsePaginationProps) => {
    const {
        currentRefinement,
        refine,
        nbHits,
        nbPages,
        isFirstPage,
        isLastPage,
        canRefine,
        createURL,
    } = usePagination(props);

    if (!canRefine) {
        return null;
    }

    return (
        <div className="btn-group mb-2 flex w-full box flex-col">
            <p className="font-bold pb-2 self-center">{nbHits} Results</p>
            <ul>
                {!isFirstPage && (
                    <button
                        className="btn bg-primary text-base-100"
                        onClick={(event) => {
                            event.preventDefault();
                            refine(currentRefinement - 1);
                        }}
                    >
                        «
                    </button>
                )}
                {isFirstPage && (
                    <button className="btn bg-primary text-base-100" disabled>
                        «
                    </button>
                )}
                {!isLastPage && (
                    <button
                        className="btn bg-primary text-base-100"
                        onClick={(event) => {
                            event.preventDefault();
                            refine(currentRefinement + 1);
                        }}
                    >
                        »
                    </button>
                )}
                {isLastPage && (
                    <button className="btn bg-primary text-base-100" disabled>
                        »
                    </button>
                )}
            </ul>
        </div>
    );
};
