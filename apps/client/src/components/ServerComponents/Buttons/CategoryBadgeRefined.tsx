import { IoClose } from "react-icons/io5";

type Props = {
    name: string;
    onClick?: () => void;
};

export const CategoryBadgeRefined = ({ name, onClick }: Props) => {
    switch (name) {
        case "MSPs":
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-spgreen p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        case "Building":
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-spred p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        case "Powers":
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-spblue-light p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        case "Laws":
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        case "History":
            return (
                <button className="py-1 pr-1" onClick={onClick}>
                    <div className="rounded-md bg-spmustard p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        case "Chamber":
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-spmagenta-light p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
        default:
            return (
                <button className="py-1 pr-1 mx-1" onClick={onClick}>
                    <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs">
                        {name}
                        <IoClose className="inline ml-1" />
                    </div>
                </button>
            );
    }
};
