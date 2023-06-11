"use client";

import dynamic from "next/dynamic";
import { type NeedleEngineProps } from "@/utils/providers/NeedleEngine";

const NeedleEngine = dynamic<NeedleEngineProps>(
    () => import("@/utils/providers/NeedleEngine"),
    { ssr: false },
);

export const ARScaffold = () => {
    return (
        <div>
            <NeedleEngine
                loading-style="light"
                keep-alive
                className=""
                addEventListener={(event: any) => {}}
                src={"/"}
            ></NeedleEngine>
        </div>
    );
};
