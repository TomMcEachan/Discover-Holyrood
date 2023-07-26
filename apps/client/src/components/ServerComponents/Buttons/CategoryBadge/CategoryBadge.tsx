import { IoClose } from "react-icons/io5";

type Props = {
    name: string;
    onClick?: () => void;
    refined?: boolean;
    disabled?: boolean;
};

export const CategoryBadge = ({ name, onClick, refined, disabled }: Props) => {
    switch (name) {
        case "MSPs":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-spgreen p-1 px-3 font-bold text-xs border-spgreen border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-spgreen text-xs border-2 border-spgreen">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-spgreen p-1 px-3 font-bold text-white text-xs border-2 border-spgreen">
                            {name}
                        </div>
                    </button>
                );
            }
        case "Building":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-spred p-1 px-3 font-bold text-xs border-spred border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-spred text-xs border-2 border-spred">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-spred p-1 px-3 font-bold text-white text-xs border-2 border-spred">
                            {name}
                        </div>
                    </button>
                );
            }
        case "Powers":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-spblue-light p-1 px-3 font-bold text-xs border-spblue-light border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-spblue-light text-xs border-2 border-spblue-light">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-spblue-light p-1 px-3 font-bold text-white text-xs border-2 border-spblue-light">
                            {name}
                        </div>
                    </button>
                );
            }
        case "Laws":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-sppurple-light p-1 px-3 font-bold text-xs border-sppurple-light border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-sppurple-light text-xs border-2 border-sppurple-light">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs border-2 border-sppurple-light">
                            {name}
                        </div>
                    </button>
                );
            }
        case "History":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-spmustard p-1 px-3 font-bold text-xs border-spmustard border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-spmustard text-xs border-2 border-spmustard">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-spmustard p-1 px-3 font-bold text-white text-xs border-2 border-spmustard">
                            {name}
                        </div>
                    </button>
                );
            }
        case "Chamber":
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-spmagenta-light p-1 px-3 font-bold text-xs border-spmagenta-light border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-spmagenta-light text-xs border-2 border-spmagenta-light">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-spmagenta-light p-1 px-3 font-bold text-white text-xs border-2 border-spmagenta-light">
                            {name}
                        </div>
                    </button>
                );
            }
        default:
            if (refined) {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-white text-sppurple-light p-1 px-3 font-bold text-xs border-sppurple-light border-2">
                            {name}
                            <IoClose className="inline ml-1" />
                        </div>
                    </button>
                );
            } else if (disabled) {
                return (
                    <button className="py-1 mr-1" disabled>
                        <div className="rounded-md bg-white p-1 px-3 font-bold text-sppurple-light text-xs border-2 border-sppurple-light">
                            {name}
                        </div>
                    </button>
                );
            } else {
                return (
                    <button className="py-1 mr-1" onClick={onClick}>
                        <div className="rounded-md bg-sppurple-light p-1 px-3 font-bold text-white text-xs border-2 border-sppurple-light">
                            {name}
                        </div>
                    </button>
                );
            }
    }
};
