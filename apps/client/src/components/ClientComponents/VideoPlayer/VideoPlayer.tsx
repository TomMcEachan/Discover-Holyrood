"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export type PlayerProps = {
    url: string;
    imageUrl?: string;
};

export const VideoPlayer = ({ url, imageUrl }: PlayerProps) => {
    return (
        <div className="h-96 flex w-full">
            <div className="">
                <ReactPlayer
                    url={url}
                    controls
                    pip
                    stopOnUnmount={false}
                    width={"100%"}
                    height={"100%"}
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: "true",
                                poster: imageUrl,
                            },
                        },
                    }}
                    className="w-[560px] h-[315px]"
                />
            </div>
        </div>
    );
};
