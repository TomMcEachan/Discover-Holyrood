import { ArticleCard } from "../../ClientComponents/Cards/ArticleCard/ArticleCard";
import { CgSmileNone } from "react-icons/cg";
import {
    useInfiniteHits,
    useInstantSearch,
} from "react-instantsearch-hooks-web";
import { Riple } from "react-loading-indicators";

export const ArticleHits = () => {
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
        return (
            <>
                <div id="search-results" className="grid grid-cols-4 gap-4">
                    {hits.map((hit: any) => (
                        <ArticleCard
                            title={hit.title}
                            image={`${hit.image}`}
                            link={`learn/${hit.link}`}
                            category={hit.categories[0]}
                            key={hit.id}
                        />
                    ))}
                </div>
                {results?.page != results?.nbPages! - 1 ? (
                    <div className="flex justify-center py-4">
                        <button
                            onClick={showMore}
                            className="btn bg-sppurple-light text-white px-4 py-2"
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

    if (hits.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">
                <CgSmileNone size={50} />
                <h1 className="text-2xl text-sppurple-light font-bold">
                    No Results Found
                </h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <CgSmileNone size={50} />
            <h1 className="text-2xl font-bold">No Results Found</h1>
        </div>
    );
};
