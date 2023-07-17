import {
    useCurrentRefinements,
    type CurrentRefinementsProps,
} from "react-instantsearch-hooks-web";
import { CategoryBadge } from "@/components/ServerComponents/Buttons/CategoryBadge";

export const ContentCurrentRefinements = (props: CurrentRefinementsProps) => {
    const { items, canRefine, refine } = useCurrentRefinements(props);

    return (
        <div>
            {items.map((item: any) => (
                <div key={item.refinements[0].value}>
                    <p
                        className="pt-2 text-primary text-xs"
                        id="facet-filters-note"
                    >
                        Currently Applied Filters:
                    </p>
                    <div className="flex flex-wrap" id="current-refinements">
                        {item.refinements.map((refinement: any) => (
                            <CategoryBadge
                                key={refinement.value}
                                onClick={() => refine(refinement)}
                                name={refinement.label}
                                refined={true}
                            />
                        ))}
                    </div>
                </div>
            ))}
            {!canRefine && (
                <p className="text-black my-2 text-xs" id="facet-filters-note">
                    No filters are currently applied
                </p>
            )}
        </div>
    );
};
