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
        <div className="pb-4 px-2 col-span-3 md:col-span-1 lg:col-span-1 justify-center w-full">
            <Link href={link} id="global-search-result">
                <div className="relative w-full rounded-lg h-200 pb">
                    <div className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spgreen opacity-100"></div>
                    <CldImage
                        src={image}
                        alt={title}
                        width={1200}
                        height={1200}
                        loading="lazy"
                        crop="thumb"
                        gravity="auto"
                        className="brightness-25 h-fit w-full rounded-t-lg"
                        sizes="(min-width: 480px ) 50vw, (min-width: 728px) 33vw, (min-width: 976px) 25vw, 100vw"
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
};
