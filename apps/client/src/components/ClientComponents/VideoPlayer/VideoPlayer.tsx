"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export type PlayerProps = {
    url: string;
};

export const VideoPlayer = ({ url }: PlayerProps) => {
    return (
        <div className="min-w-full min-h-full grid grid-cols-3">
            <ReactPlayer
                url={url}
                controls
                pip
                stopOnUnmount={false}
                height={"100%"}
                width={"100%"}
                className="border-4 border-sppurple-light lg:col-span-1 col-span-3"
            />
        </div>
    );
};
