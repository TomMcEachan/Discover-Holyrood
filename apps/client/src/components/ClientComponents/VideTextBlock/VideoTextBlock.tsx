import React from "react";

type VideoTextBlockProps = {
    title: string;
    children?: React.ReactNode;
};

export const VideoTextBlock = ({ title, children }: VideoTextBlockProps) => {
    return (
        <div className="bg-primary w-full lg:col-span-1 col-span-3 flex-row">
            <div className="">
                <h3 className="font-bold text-2xl md:text-2xl lg:text-3xl text-base-100 mx-4 mt-4">
                    {title}
                </h3>
            </div>
            <div className="col-span-3 text-base-100 text-xl">{children}</div>
        </div>
    );
};
