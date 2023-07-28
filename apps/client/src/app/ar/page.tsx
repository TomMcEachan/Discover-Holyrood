import React from "react";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
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
