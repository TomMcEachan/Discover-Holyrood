import React from "react";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle title="AR Tour" subtitle="Take a tour" />
            <div className="divider" />
        </ContentWrapper>
    );
}
