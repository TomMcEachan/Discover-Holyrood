import { useHits, useInstantSearch } from "react-instantsearch-hooks-web";
import { Riple } from "react-loading-indicators";
import { GlobalSearchCard } from "@/components/ClientComponents/Cards/GlobalCard.tsx/GlobalSearchCard";
import { CgSmileNone } from "react-icons/cg";

export const GlobalSearchHits = () => {
    const { hits, results } = useHits();
    const { status } = useInstantSearch();

    if (status === "loading" || status === "stalled") {
        return (
            <div className="flex flex-col items-center justify-center self-center">
                <Riple color={"purple"} />
            </div>
        );
    }

    if (hits.length > 0) {
        return (
            <>
                {hits.map((hit: any) => (
                    <div
                        className="col-span-4 md:col-span-1 lg:col-span-1 px-2 py-2"
                        key={hit.id}
                    >
                        <GlobalSearchCard
                            title={hit.title}
                            category={hit.categories[0]}
                            contentType={hit.content_type.data.attributes.name}
                            image={hit.image}
                            link={hit.link}
                        />
                    </div>
                ))}
            </>
        );
    }

    if (hits.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mx-auto">
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
