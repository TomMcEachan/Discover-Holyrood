import { useHits, useInstantSearch } from "react-instantsearch-hooks-web";
import { Riple } from "react-loading-indicators";
import { GlobalSearchCard } from "@/components/ClientComponents/Cards/GlobalCard.tsx/GlobalSearchCard";

export const GlobalSearchHits = () => {
    const { hits, results } = useHits();
    const { status } = useInstantSearch();

    if (status === "loading" || status === "stalled") {
        return (
            <div className="flex flex-col items-center justify-center">
                <Riple color={"purple"} />
            </div>
        );
    }

    if (hits.length > 0) {
        console.log(hits);
        return (
            <div>
                {hits.map((hit: any) => (
                    <div className="col-span-3">
                        <GlobalSearchCard
                            title={hit.title}
                            category={hit.categories[0]}
                            contentType={hit.content_type.data.attributes.name}
                            tags={hit.tags}
                            link={`learn/${hit.link}`}
                            key={hit.id}
                            image={hit.image}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return <></>;
};
