import React, { useRef } from "react";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { ARCanvas } from "@/components/ClientComponents/AR/ARCanvas";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle title="AR Tour" subtitle="Take a tour" />
            <div className="divider" />
            <ARCanvas src="assets/sandbox.glb" />
        </ContentWrapper>
    );
}
