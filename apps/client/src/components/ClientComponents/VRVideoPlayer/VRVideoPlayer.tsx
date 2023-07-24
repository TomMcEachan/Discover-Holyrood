"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type VRVideoPlayerProps = {
    videoUrl: string;
    imageUrl?: string;
};

export const VRVideoPlayer = ({ videoUrl, imageUrl }: VRVideoPlayerProps) => {
    return (
        <div className="w-full h-96 lg:col-span-2 col-span-3">
            <ReactPlayer
                url={videoUrl}
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
    );
};
