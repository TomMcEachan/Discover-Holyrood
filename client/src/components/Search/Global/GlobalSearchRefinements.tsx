"use client";
import {
    useRefinementList,
    type RefinementListProps,
} from "react-instantsearch-hooks-web";
import { GlobalFacetBadge } from "@/components/server-components/Buttons/GlobalFacetBadge";

export const GlobalSearchRefinements = (props: RefinementListProps) => {
    const { items, refine } = useRefinementList(props);

    return (
        <div>
            <div className="flex flex-wrap pt-2" id="global-facet-container">
                {items.map((item: any) =>
                    item.isRefined ? (
                        <div key={item.label}></div>
                    ) : (
                        <GlobalFacetBadge
                            name={item.label}
                            key={item.label}
                            onClick={() => refine(item.value)}
                        />
                    ),
                )}
            </div>
        </div>
    );
};
