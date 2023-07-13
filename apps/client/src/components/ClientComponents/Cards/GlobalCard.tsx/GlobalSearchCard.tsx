import Link from "next/link";
import Image from "next/image";

type Props = {
    title: string;
    category: string;
    contentType: string;
    tags: string[];
    link: string;
    image: string;
};

import React from "react";

export const GlobalSearchCard = ({
    title,
    category,
    contentType,
    tags,
    link,
    image,
}: Props) => {
    switch (category) {
        case "MSPs":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spgreen opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spgreen  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spgreen pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spgreen md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
        case "Chamber":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmagenta-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmagenta-light  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmagenta-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spmagenta-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
        case "Building":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spred opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spred  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spred pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spred md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
        case "History":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmustard opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmustard  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmustard pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spmustard md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
        case "Laws":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-sppurple-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-sppurple-light  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-sppurple-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-sppurple-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
        case "Powers":
            return (
                <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full h-600">
                    <Link
                        href={link}
                        id="global-search-result"
                        className="h-600"
                    >
                        <div className="relative w-full rounded-lg h-600 pb">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spblue-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-[10rem] w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spblue-light  rounded-md w-full">
                                <h3 className="text-md md:text-lg lg:text-xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spblue-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spblue-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                </div>
            );
    }
};
