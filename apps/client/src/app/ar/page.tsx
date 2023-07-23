import React from "react";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { ContentSearchComponent } from "@/components/Search/Content/ContentSearchComponent";
import { Suspense } from "react";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="AR Experiences"
                subtitle="Explore how the Parliament works in Augmented Reality"
            />
            <div className="divider" />
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContentSearchComponent indexName="arscenes" />
                </Suspense>
            </div>
        </ContentWrapper>
    );
}
