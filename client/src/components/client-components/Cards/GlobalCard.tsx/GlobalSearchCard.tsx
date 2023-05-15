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
            <div className="w-full">
                <span className="font-bold text-md">{contentType}</span>
                <h3 className="font-bold text-2xl font-black">{title}</h3>
                <div className="flex flex-row">
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
