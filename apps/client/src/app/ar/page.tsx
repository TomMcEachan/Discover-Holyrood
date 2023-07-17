import React from "react";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { ArticleSearchComponent } from "@/components/Search/Articles/ArticleSearchComponent";
import { Suspense } from "react";

export default function AR(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="AR Scenes"
                subtitle="Explore how the Parliament works in Augmented Reality"
            />
            <div className="divider" />
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ArticleSearchComponent indexName="arscenes" />
                </Suspense>
            </div>
        </ContentWrapper>
    );
}
