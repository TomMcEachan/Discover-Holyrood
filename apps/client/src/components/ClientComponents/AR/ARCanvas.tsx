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
        <div className="md:w-[100%] w-[85%] h-[50vh] md:h-[60rem] border-primary border-8 flex items-center mx-auto">
            {/* @ts-expect-error Async Server Component */}
            <NeedleEngine
                loading-style="dark"
                src={src}
                style={{ display: "block", width: "100%", height: "100%" }}
                addEventListener={(event: any) => {}}
            />
        </div>
    );
};
