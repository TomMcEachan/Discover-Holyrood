import { MdOutlineSearch } from "react-icons/md";
import {
    useSearchBox,
    type SearchBoxProps,
} from "react-instantsearch-hooks-web";

export const CustomSearchBar = () => {
    const { query, refine } = useSearchBox();

    return (
        <form className="pt-4" id="search-bar">
            <label htmlFor="search-bar-input" className="sr-only">
                Use this search to find articles on the topics you are
                interested in
            </label>
            <div className="relative mb-10">
                <div className="absolute z-10 h-full w-16 rounded-l-lg bg-sppurple-light">
                    <p className="absolute left-[30%] top-2 font-bold text-white">
                        <MdOutlineSearch size={25} id="search-bar-icon" />
                    </p>
                </div>
                <div className="relative">
                    <input
                        className="h-8 min-w-full rounded-lg border-2 border-sppurple-light bg-white pl-20 text-black py-4"
                        type="search"
                        placeholder="Search for learning material..."
                        value={query}
                        onChange={(event) => refine(event.currentTarget.value)}
                        id="search-bar-input"
                    />
                </div>
            </div>
        </form>
    );
};
