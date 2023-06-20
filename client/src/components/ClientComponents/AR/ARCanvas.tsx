"use client";
import dynamic from "next/dynamic";

import { type NeedleEngineProps } from "@/utils/providers/NeedleEngine";
// Dynamic import of NeedleEngine
const NeedleEngine = dynamic<NeedleEngineProps>(
    () => import("@/utils/providers/NeedleEngine"),
    {
        ssr: false,
    },
);

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
                style={{ display: "block", width: "100%", height: "100%" }}
                addEventListener={(event: any) => {}}
            />
        </div>
    );
};
