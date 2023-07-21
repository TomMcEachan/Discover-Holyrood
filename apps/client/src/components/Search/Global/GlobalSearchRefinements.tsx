"use client";
import {
    useRefinementList,
    type RefinementListProps,
} from "react-instantsearch-hooks-web";
import { CategoryBadge } from "@/components/ServerComponents/Buttons/CategoryBadge/CategoryBadge";

export const GlobalSearchRefinements = (props: RefinementListProps) => {
    const { items, refine } = useRefinementList(props);

    return (
        <div>
            <div className="flex flex-wrap" id="global-facet-container">
                {items.map((item: any) =>
                    item.isRefined ? (
                        <div key={item.label}>
                            <CategoryBadge
                                name={item.label}
                                key={item.label}
                                onClick={() => refine(item.value)}
                                refined={true}
                            />
                        </div>
                    ) : (
                        <div key={item.label}>
                            <CategoryBadge
                                name={item.label}
                                key={item.label}
                                onClick={() => refine(item.value)}
                            />
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};
