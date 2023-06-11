import React, { useRef } from "react";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { ARScaffold } from "@/components/ClientComponents/AR/ARScaffold";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="AR Tour"
                subtitle="Take a tour of the Scottish Parliament"
            />
            <div className="divider" />
            <div className="h-full">
                <ARScaffold />
            </div>
        </ContentWrapper>
    );
}
