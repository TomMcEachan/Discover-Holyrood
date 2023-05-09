"use client";
import { MdOutlineSearch } from "react-icons/md";

type Props = {
    buttonSide: "left" | "right";
    placeholder: string;
    id: string;
    value?: string;
    event?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({
    buttonSide,
    placeholder,
    id,
    value,
    event,
}: Props) => {
    switch (buttonSide) {
        case "right":
            return (
                <div className="relative">
                    <div className="absolute z-10 h-full w-16 rounded-r-lg bg-sppurple-light ml-[80%]">
                        <p className="absolute left-[30%] pt-1 font-bold text-white">
                            <MdOutlineSearch size={30} id="search-bar-icon" />
                        </p>
                    </div>
                    <div className="relative">
                        <div className="mr-5">
                            <input
                                className="h-8 w-96 rounded-lg border-2 border-sppurple-light bg-white text-black py-4 pl-4 text-xs"
                                type="search"
                                placeholder={placeholder}
                                value={value}
                                onChange={event}
                                id={id}
                            />
                        </div>
                    </div>
                </div>
            );
        case "left":
            return (
                <div className="relative">
                    <div className="absolute z-10 h-full w-16 rounded-l-lg bg-sppurple-light">
                        <p className="absolute left-[30%] top-2 font-bold text-white">
                            <MdOutlineSearch size={25} id="search-bar-icon" />
                        </p>
                    </div>
                    <div className="relative">
                        <input
                            className="h-8 min-w-full rounded-lg border-2 border-sppurple-light bg-white pl-20 text-black py-4"
                            type="search"
                            placeholder={placeholder}
                            value={value}
                            onChange={event}
                            id={id}
                        />
                    </div>
                </div>
            );
        default:
            return (
                <div className="relative">
                    <div className="absolute z-10 h-full w-16 rounded-r-lg bg-sppurple-light ml-[80%]">
                        <p className="absolute left-[30%] pt-1 font-bold text-white">
                            <MdOutlineSearch size={30} id="search-bar-icon" />
                        </p>
                    </div>
                    <div className="relative">
                        <div className="mr-5">
                            <input
                                className="h-8 w-96 rounded-lg border-2 border-sppurple-light bg-white text-black py-4 pl-4 text-xs"
                                type="search"
                                placeholder={placeholder}
                                value={value}
                                onChange={event}
                                id={id}
                            />
                        </div>
                    </div>
                </div>
            );
    }
};
