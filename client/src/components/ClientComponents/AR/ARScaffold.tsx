"use client";

import dynamic from "next/dynamic";
import { type NeedleEngineProps } from "@/utils/providers/NeedleEngine";

const NeedleEngine = dynamic<NeedleEngineProps>(
    () => import("@/utils/providers/NeedleEngine"),
    { ssr: false },
);

type Props = {
    src: string;
};

export const ARCanvas = ({ src }: Props) => {
    return (
        <div>
            <NeedleEngine
                loading-style="light"
                keep-alive
                addEventListener={(event: any) => {}}
                src={"/"}
            ></NeedleEngine>
        </div>
    );
};
