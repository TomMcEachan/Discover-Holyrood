"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export type VRVideoPlayerProps = {
    videoUrl: string;
    imageUrl?: string;
};

export const VRVideoPlayer = ({ videoUrl, imageUrl }: VRVideoPlayerProps) => {
    return (
        <div className="min-w-full lg:col-span-2 md:col-span-3 col-span-3">
            <ReactPlayer
                url={videoUrl}
                controls
                pip
                stopOnUnmount={false}
                width={"100%"}
                height={"560px"}
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
    );
};
