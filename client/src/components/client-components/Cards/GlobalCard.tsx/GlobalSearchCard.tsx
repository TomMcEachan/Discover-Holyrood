import { GlobalFacetBadge } from "@/components/server-components/Buttons/GlobalFacetBadge";
import { CategoryBadge } from "@/components/server-components/Buttons/CategoryBadge";
import Link from "next/link";

type Props = {
    title: string;
    category: string;
    contentType: string;
    tags: string[];
    link: string;
};

import React from "react";

export const GlobalSearchCard = ({
    title,
    category,
    contentType,
    tags,
    link,
}: Props) => {
    return (
        <Link href={link}>
            <div className="mb-2 w-full p-4 bg-tertiary rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <span className="font-bold text-md text-gray-500">
                    {contentType}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                    {title}
                </h3>
                <div className="flex flex-wrap mt-4">
                    <CategoryBadge
                        name={category}
                        onClick={() => console.log("hello")}
                    />
                    {tags.map((tag: any) => (
                        <GlobalFacetBadge name={tag} key={tag} />
                    ))}
                </div>
            </div>
        </Link>
    );
};
