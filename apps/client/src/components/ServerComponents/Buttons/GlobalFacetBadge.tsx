import { IoClose } from "react-icons/io5";

type Props = {
    name: string;
    onClick?: () => void;
    refined?: boolean;
};
export const GlobalFacetBadge = ({ name, onClick, refined }: Props) => {
    if (refined) {
        return (
            <div>
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-white text-sppurple-light p-1 px-3 font-bold text-xs border-sppurple-light border-2">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs border-2 border-sppurple-light">
                        {name}
                    </div>
                </button>
            </div>
        );
    }
};
