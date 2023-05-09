import React, { useRef } from "react";
import { PageTitle } from "@/components/client-components/PageTitle/PageTitle";

export default function AR(): JSX.Element {
    return (
        <main className="min-h-screen px-4 pb-40">
            <PageTitle
                title="AR Tour"
                subtitle="Take a tour of the Scottish Parliament"
            />
            <div className="divider" />
            <div></div>
        </main>
    );
}
