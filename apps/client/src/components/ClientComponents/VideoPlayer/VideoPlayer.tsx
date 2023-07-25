"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export type PlayerProps = {
    url: string;
    imageUrl?: string;
};

export const VideoPlayer = ({ url, imageUrl }: PlayerProps) => {
    return (
        <div className="w-full col-span-3 lg:col-span-2">
            <div className="">
                <ReactPlayer
                    url={url}
                    className="top-0 left-0"
                    fallback={<p>Loading...</p>}
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
                />
            </div>
        </div>
    );
};
