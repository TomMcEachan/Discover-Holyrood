"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface Props {
    title: string;
    image: string;
    category: string;
    link: string;
}

export const ArticleCard = ({
    title,
    image,
    category,
    link,
}: Props): JSX.Element => {
    switch (category) {
        case "MSPs":
            return (
                <Link
                    href={link}
                    className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
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
        case "Chamber":
            return (
                <Link
                    href={link}
                    className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
                >
                    <div className="relative min-w-full rounded-lg">
                        <div
                            className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmagenta-light opacity-100
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
                        <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmagenta-light rounded-md w-full">
                            <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
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
            );
        case "Building":
            return (
                <Link
                    href={link}
                    className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
                >
                    <div className="relative min-w-full rounded-lg">
                        <div
                            className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spred opacity-100
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
                        <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spred rounded-md w-full">
                            <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="relative  w-full rounded-b-lg bg-spred pr-4">
                        <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spred md:text-lg">
                            {category}
                        </button>
                    </div>
                </Link>
            );
        case "History":
            return (
                <a
                    href={link}
                    className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
                >
                    <div className="relative min-w-full rounded-lg">
                        <div
                            className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spmustard opacity-100
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
                        <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spmustard rounded-md w-full">
                            <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="relative w-full rounded-b-lg bg-spmustard pr-4">
                        <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spmustard md:text-lg">
                            {category}
                        </button>
                    </div>
                </a>
            );
        case "Laws":
            return (
                <a
                    href={link}
                    className="h-600 col-span-2 rounded-t-lg pt-2 shadow-sm XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
                >
                    <div className="relative min-w-full rounded-lg">
                        <div
                            className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-sppurple-light opacity-100
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
                        <div className="absolute top-[35%] z-20 bg-gradient-to-r from-sppurple-light rounded-md w-full">
                            <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="relative w-full rounded-b-lg bg-sppurple-light pr-4">
                        <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-sppurple-light md:text-lg">
                            {category}
                        </button>
                    </div>
                </a>
            );
        case "Powers":
            return (
                <a
                    href={link}
                    className="col-span-2 h-fit rounded-t-lg pt-2 shadow-lg XSMobile:col-span-4 sm:col-span-2 LGLaptop:col-span-1"
                    id="search-result"
                >
                    <div className="relative min-w-full rounded-lg">
                        <div
                            className="absolute inset-0 z-10 w-full rounded-t-lg bg-gradient-to-r from-spblue-light opacity-100
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
                            className="brightness-5 h-fit w-full rounded-t-lg"
                            sizes="(min-width: 480px ) 50vw,
                                    (min-width: 728px) 33vw,
                                    (min-width: 976px) 25vw,
                                    100vw"
                        />
                        <div className="absolute top-[35%] z-20 bg-gradient-to-r from-spblue-light rounded-md w-full">
                            <h3 className="text-3xl md:text-4xl font-bold text-white px-6 py-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    <div className="relative w-full rounded-b-lg bg-spblue-light pr-4">
                        <button className="z-20 my-2 mx-2 rounded-2xl bg-white py-1 px-6 text-xs font-bold text-spblue-light md:text-lg">
                            {category}
                        </button>
                    </div>
                </a>
            );
        default:
            return <></>;
    }
};
