"use client";

import { NeedleEngine } from "@needle-tools/engine";
import { NeedleEngineAttributes } from "@needle-tools/engine";
import { useEffect, useState } from "react";

const isServer = () => typeof window === "undefined";

export type NeedleEngineProps = NeedleEngineAttributes;
export default function Needle({ ...props }): JSX.Element {
    const [src, setSrc] = useState(props?.src);

    useEffect(() => {
        // lazy import the codegen if no explicit src is defined
        if (!isServer() && props?.src === undefined) {
            import("../../generated/gen")
                .then((m) => {
                    setSrc(m.needle_exported_files);
                })
                .catch((e) => {
                    console.error(e);
                });
        }
    }, []);

    return (
        <>{!isServer && <needle-engine src={src} {...props}></needle-engine>}</>
    );
}
