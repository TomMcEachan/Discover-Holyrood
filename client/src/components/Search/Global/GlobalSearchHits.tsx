import {
    useInfiniteHits,
    useInstantSearch,
} from "react-instantsearch-hooks-web";
import { Riple } from "react-loading-indicators";
import { GlobalSearchCard } from "@/components/client-components/Cards/GlobalCard.tsx/GlobalSearchCard";

export const GlobalSearchHits = () => {
    const { hits, showMore, showPrevious, results } = useInfiniteHits();
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
            <>
                <div>
                    {hits.map((hit: any) => (
                        <GlobalSearchCard
                            title={hit.title}
                            category={hit.categories[0]}
                            contentType={hit.content_type.data.attributes.name}
                            tags={hit.tags}
                            link={`learn/${hit.link}`}
                            key={hit.id}
                        />
                    ))}
                </div>
                {results?.page != results?.nbPages! - 1 ? (
                    <div className="flex py-4">
                        <button
                            onClick={showMore}
                            className="btn bg-accent text-white px-4 py-2"
                        >
                            Show More
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </>
        );
    }

    return <></>;
};
