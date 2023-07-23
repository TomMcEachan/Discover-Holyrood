import Link from "next/link";

export type SuggestedArticleProps = {
    title: string;
    subtitle: string;
    slug: string;
};

export const SuggestedArticleCard = ({
    title,
    subtitle,
    slug,
}: SuggestedArticleProps) => {
    return (
        <Link href={slug}>
            <div className="bg-primary rounded-md p-4 min-h-full">
                <h3 className="text-lg md:text-xl font-bold text-base-100">
                    {title}
                </h3>
                <p className="text-base-100 md:text-lg text-sm pt-2">
                    {subtitle}
                </p>
            </div>
        </Link>
    );
};
