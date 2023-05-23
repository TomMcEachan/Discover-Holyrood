import { is } from "cypress/types/bluebird";
import React from "react";
import {
    UsePaginationProps,
    usePagination,
} from "react-instantsearch-hooks-web";

export const GlobalPagination = (props: UsePaginationProps) => {
    const {
        pages,
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
        <div className="justify-center btn-group mb-2">
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
                {pages.map((page) => (
                    <button key={page} className="btn bg-primary text-base-100">
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                refine(page);
                            }}
                        >
                            {page + 1}
                        </a>
                    </button>
                ))}
                <button
                    className="btn bg-primary text-base-100"
                    onClick={(event) => {
                        event.preventDefault();
                        refine(currentRefinement + 1);
                    }}
                >
                    »
                </button>
            </ul>
        </div>
    );
};
