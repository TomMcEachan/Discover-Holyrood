import Link from "next/link";
import Image from "next/image";
import { TbAugmentedReality, TbSchool } from "react-icons/tb";

export type GlobalSearchCardProps = {
    title: string;
    category: string;
    contentType: string;

    link: string;
    image: string;
};

import React from "react";

export const GlobalSearchCard = ({
    title,
    category,
    contentType,
    link,
    image,
}: GlobalSearchCardProps) => {
    // AR Scenes
    if (contentType === "AR") {
        switch (category) {
            case "MSPs":
                return (
                    <Link
                        href={`https://${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg h-600">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spgreen opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                loading="lazy"
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spgreen  rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spgreen pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spgreen md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Chamber":
                return (
                    <Link
                        href={`https://${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmagenta-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmagenta-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmagenta-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spmagenta-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Building":
                return (
                    <Link
                        href={`https://${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spred opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spred rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative  w-full rounded-b-lg bg-spred pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spred md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "History":
                return (
                    <Link
                        href={`https://${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmustard opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmustard rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmustard pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spmustard md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Laws":
                return (
                    <Link
                        href={`https://${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-sppurple-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-sppurple-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-sppurple-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-sppurple-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Powers":
                return (
                    <Link
                        href={`https://${link}`}
                        className="col-span-2 h-fit rounded-t-lg pt-2 shadow-lg XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spblue-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbAugmentedReality
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spblue-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spblue-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spblue-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            default:
                return <></>;
        }
    }

    // Article Content
    if (contentType === "Article") {
        switch (category) {
            case "MSPs":
                return (
                    <Link
                        href={`/learn/${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg h-600">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spgreen opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                loading="lazy"
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spgreen  rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spgreen pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spgreen md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Chamber":
                return (
                    <Link
                        href={`/learn/${link}`}
                        className="col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmagenta-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1000}
                                height={1000}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmagenta-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmagenta-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spmagenta-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Building":
                return (
                    <Link
                        href={`/learn/${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spred opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spred rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative  w-full rounded-b-lg bg-spred pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spred md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "History":
                return (
                    <Link
                        href={`/learn/${link}`}
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmustard opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmustard rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spmustard pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spmustard md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Laws":
                return (
                    <Link
                        href={`/learn/${link}`}
                        id="search-result"
                        className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-sppurple-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={1200}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-sppurple-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-sppurple-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-sppurple-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            case "Powers":
                return (
                    <Link
                        href={`/learn/${link}`}
                        className="col-span-2 h-fit rounded-t-lg pt-2 shadow-lg XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                        id="search-result"
                    >
                        <div className="relative min-w-full rounded-lg">
                            <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spblue-light opacity-100"></div>
                            <Image
                                src={image}
                                alt={title}
                                width={1000}
                                height={1000}
                                className="brightness-25 h-full w-full rounded-t-lg"
                                priority={true}
                            />
                            <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                                <span className="flex">
                                    <TbSchool
                                        size={60}
                                        className="text-white flex justify-center"
                                    />
                                </span>
                                <span className="sr-only">Learn</span>
                            </div>
                            <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spblue-light rounded-md w-full">
                                <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                    {title}
                                </h3>
                            </div>
                        </div>
                        <div className="relative w-full rounded-b-lg bg-spblue-light pr-4">
                            <button className="z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-spblue-light md:text-lg">
                                {category}
                            </button>
                        </div>
                    </Link>
                );
            default:
                return <></>;
        }
    }
};
