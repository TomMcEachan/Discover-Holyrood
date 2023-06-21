"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const VideoPlayer = () => {
    return (
        <div className="">
            <ReactPlayer
                url="https://res.cloudinary.com/tommceachan/video/upload/v1684495870/pexels_jamie_woods_12715469_1920x1080_25fps_bb264398aa.mp4"
                controls
                pip
                stopOnUnmount={false}
                width="100%"
                height="100%"
            />
        </div>
    );
};
