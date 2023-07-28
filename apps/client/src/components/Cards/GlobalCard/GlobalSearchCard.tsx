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

const getCardIcon = (contentType: string) => {
    switch (contentType) {
        case "AR":
            return (
                <TbAugmentedReality
                    size={60}
                    className="text-white flex justify-center"
                />
            );
        case "Article":
            return (
                <TbSchool
                    size={60}
                    className="text-white flex justify-center"
                />
            );
        default:
            return null;
    }
};

export const GlobalSearchCard = ({
    title,
    category,
    contentType,
    link,
    image,
}: GlobalSearchCardProps) => {
    const cardIcon = getCardIcon(contentType);
    const gradientColor =
        contentType === "AR"
            ? category === "MSPs"
                ? "spgreen"
                : category === "Chamber"
                ? "spmagenta-light"
                : category === "Building"
                ? "spred"
                : category === "History"
                ? "spmustard"
                : category === "Laws"
                ? "sppurple-light"
                : "spblue-light"
            : category === "MSPs"
            ? "spgreen"
            : category === "Chamber"
            ? "spmagenta-light"
            : category === "Building"
            ? "spred"
            : category === "History"
            ? "spmustard"
            : category === "Laws"
            ? "sppurple-light"
            : "spblue-light";
    const imageWidth = contentType === "AR" ? 1200 : 1000;

    return (
        <Link
            href={`/${contentType === "AR" ? "ar" : "learn"}/${link}`}
            className={`h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1`}
            id="search-result"
        >
            <div
                className={`relative min-w-full rounded-lg ${
                    contentType === "AR" ? "" : "h-600"
                }`}
            >
                <div
                    className={`absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-${gradientColor} opacity-100`}
                ></div>
                <Image
                    src={image}
                    alt={title}
                    width={imageWidth}
                    height={imageWidth}
                    className="brightness-25 h-full w-full rounded-t-lg"
                    loading="lazy"
                />
                {cardIcon && (
                    <div className="absolute z-20 top-[5%] left-[5%] rounded-lg w-24">
                        <span className="flex">{cardIcon}</span>
                        <span className="sr-only">Learn</span>
                    </div>
                )}
                <div
                    className={`absolute top-[35%] z-20 bg-gradient-to-r from-${gradientColor} rounded-md w-full`}
                >
                    <h3 className="text-3xl font-bold text-white px-6 py-2">
                        {title}
                    </h3>
                </div>
            </div>
            <div
                className={`relative w-full rounded-b-lg bg-${gradientColor} pr-4`}
            >
                <button
                    className={`z-20 my-2 mx-2 rounded-md bg-white py-1 px-6 text-xs font-bold text-${gradientColor} md:text-lg`}
                >
                    {category}
                </button>
            </div>
        </Link>
    );
};
