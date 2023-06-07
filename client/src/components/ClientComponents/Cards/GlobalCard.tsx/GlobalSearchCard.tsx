import { GlobalFacetBadge } from "@/components/ServerComponents/Buttons/GlobalFacetBadge";
import { CategoryBadge } from "@/components/ServerComponents/Buttons/CategoryBadge";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

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
    return (
        <Link
            href={link}
            className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
            id="global-search-result"
        >
            <div className="relative min-w-full rounded-lg">
                <div
                    className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spgreen opacity-100
                        "
                ></div>
                <CldImage
                    src={image}
                    alt={title}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    crop="thumb"
                    gravity="auto"
                    className="brightness-25 h-fit w-full rounded-t-lg"
                    sizes="(min-width: 480px ) 50vw,
                                   (min-width: 728px) 33vw,
                                   (min-width: 976px) 25vw,
                                   100vw"
                />
                <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spgreen  rounded-md w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
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
    );
};
