import { MDXRemote } from "next-mdx-remote/rsc";
import { CategoryBadge } from "@/components/ServerComponents/Buttons/CategoryBadge/CategoryBadge";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { Suspense } from "react";
import { LaunchARButton } from "@/components/ServerComponents/Buttons/LaunchARButton/LaunchARButton";
import { components } from "@/components/ServerComponents/Markdown/ArticleMarkdown";
import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { SuggestedArticleCard } from "@/components/ClientComponents/Cards/SuggestedArticle/SuggestedArticleCard";
import { BackButton } from "@/components/ServerComponents/Buttons/BackButton/BackButton";
import {
    getSpecificARScenes,
    getSuggestedARScenes,
    getAllARScenes,
} from "@/utils/fetching/DataFetching";

export type ARPageProps = {
    params: {
        slug: string;
        id: string;
    };
};

export async function generateStaticParams() {
    const scenes = await getAllARScenes();
    const paths = scenes.map((scenes: any) => {
        return {
            params: {
                slug: scenes.attributes.appLink,
                id: scenes.uuid,
            },
        };
    });
    return paths;
}

export default async function ArticlePage({ params }: ARPageProps) {
    const pageData = await getSpecificARScenes(params.slug);

    //Get the article tags
    const sceneTags: any = pageData.attributes.tags.data.map((tag: any) => {
        return tag.attributes.name;
    });

    //Get the article category
    const sceneCategory: any =
        pageData.attributes.categories.data[0].attributes.name;

    //Get the article markdown
    const markdown = await pageData.attributes.instructions;

    //Get the suggested articles
    const suggestedScenes = await getSuggestedARScenes(params.slug);

    return (
        <ContentWrapper>
            <BackButton backLocation="Learn" />
            <div id="top-section">
                <PageTitle
                    title={pageData.attributes.title}
                    subtitle={pageData.attributes.subtitle}
                />
                <div className="pt-2">
                    <CategoryBadge name={sceneCategory} />
                    {sceneTags.map((tag: any) => {
                        return <CategoryBadge key={tag.id} name={tag} />;
                    })}
                </div>
                <div className="divider" />
                <LaunchARButton
                    sceneLocation={pageData.attributes.LinkToARScene}
                />
                <div className="divider" />
            </div>
            <article id="content" className="">
                <Suspense fallback={<div>Loading...</div>}>
                    <>
                        <MDXRemote
                            source={markdown}
                            components={{
                                ...components,
                            }}
                        />
                    </>
                </Suspense>
            </article>
            <div className="divider" />
            <div id="suggested-scenes">
                <h2 className="text-2xl font-bold text-base-content">
                    Suggested AR Scenes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {suggestedScenes.slice(0, 3).map((scenes: any) => {
                        return (
                            <SuggestedArticleCard
                                key={scenes.id}
                                title={scenes.attributes.title}
                                subtitle={scenes.attributes.subtitle}
                                slug={`${scenes.attributes.appLink}`}
                            />
                        );
                    })}
                </div>
            </div>
        </ContentWrapper>
    );
}
