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
        <div>
            <NeedleEngine
                loading-style="light"
                addEventListener={(event: any) => {}}
                src={src}
            />
        </div>
    );
};
