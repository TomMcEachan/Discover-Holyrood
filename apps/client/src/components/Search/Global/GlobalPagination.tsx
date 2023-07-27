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
        <p>{nbHits} Results</p>;
    }

    return (
        <div className="btn-group mb-2 flex w-full box flex-col">
            <p className="pb-2 self-center">{nbHits} Results</p>
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
            <p className="font-bold self-center pt-2">{`Page ${
                currentRefinement + 1
            } of ${nbPages}`}</p>
        </div>
    );
};
