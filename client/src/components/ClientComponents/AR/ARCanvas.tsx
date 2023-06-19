"use client";
import dynamic from "next/dynamic";

// Dynamic import of NeedleEngine
const NeedleEngine = dynamic(() => import("@/utils/providers/NeedleEngine"), {
    ssr: false,
});

//Component Props
type Props = {
    src: string;
};

export const ARCanvas = ({ src }: Props) => {
    return (
        <div className="w-full h-[48rem]">
            <NeedleEngine
                loading-style="dark"
                src={src}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
