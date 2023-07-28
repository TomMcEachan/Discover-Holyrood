import { MDXRemote } from "next-mdx-remote/rsc";
import { CategoryBadge } from "@/components/Buttons/CategoryBadge/CategoryBadge";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Suspense } from "react";
import { LaunchARButton } from "@/components/Buttons/LaunchARButton/LaunchARButton";
import { components } from "@/components/Markdown/ArticleMarkdown";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { SuggestedArticleCard } from "@/components/Cards/SuggestedArticle/SuggestedArticleCard";
import { BackButton } from "@/components/Buttons/BackButton/BackButton";
import {
    getSpecificARScenes,
    getSuggestedARScenes,
    getAllARScenes,
} from "@/utils/fetching/DataFetching";
import Link from "next/link";

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

    const categoryLowercase = sceneCategory.toLowerCase();

    return (
        <ContentWrapper>
            <BackButton backLocation="Learn" />
            <div id="top-section">
                <PageTitle
                    title={pageData.attributes.title}
                    subtitle={pageData.attributes.subtitle}
                />
                <div className="pt-2">
                    <Link href={`/search/${categoryLowercase}`}>
                        <CategoryBadge name={sceneCategory} />
                    </Link>
                    {sceneTags.map((tag: any) => {
                        return (
                            <CategoryBadge key={tag.id} name={tag} disabled />
                        );
                    })}
                </div>
                <div className="divider" />
                <LaunchARButton
                    sceneLocation={pageData.attributes.LinkToARScene}
                />
                <div className="divider mb-0" />
            </div>
            <article id="content" className="">
                <h3 className="text-3xl font-bold text-base-content mt-0 pt-0 mb-1">
                    Scene Instructions
                </h3>
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
