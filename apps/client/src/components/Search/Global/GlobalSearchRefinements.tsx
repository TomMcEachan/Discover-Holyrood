"use client";
import {
    useRefinementList,
    type RefinementListProps,
} from "react-instantsearch-hooks-web";
import { GlobalFacetBadge } from "@/components/ServerComponents/Buttons/GlobalFacetBadge";

export const GlobalSearchRefinements = (props: RefinementListProps) => {
    const { items, refine } = useRefinementList(props);

    console.log(items);
    return (
        <div>
            <div className="flex flex-wrap" id="global-facet-container">
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
