import { MDXRemote } from "next-mdx-remote/rsc";
import { CategoryBadge } from "@/components/Buttons/CategoryBadge/CategoryBadge";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Suspense } from "react";
import { components } from "@/components/Markdown/ArticleMarkdown";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { SuggestedArticleCard } from "@/components/Cards/SuggestedArticle/SuggestedArticleCard";
import { BackButton } from "@/components/Buttons/BackButton/BackButton";
import {
    getSpecificArticle,
    getSuggestedArticles,
    getAllArticles,
} from "@/utils/fetching/DataFetching";
import Link from "next/link";

interface Props {
    params: {
        slug: string;
        id: string;
    };
}

export async function generateStaticParams() {
    const articles = await getAllArticles();
    const paths = articles.map((article: any) => {
        return {
            params: {
                slug: article.attributes.link,
                id: article.id,
            },
        };
    });
    return paths;
}

export default async function ArticlePage({ params }: Props) {
    const pageData = await getSpecificArticle(params.slug);

    //Get the article tags
    const articleTags: any = pageData.attributes.tags.data.map((tag: any) => {
        return tag.attributes.name;
    });

    //Get the article category
    const articleCategory: any =
        pageData.attributes.categories.data[0].attributes.name;

    //Get the article markdown
    const markdown = await pageData.attributes.content;

    //Get the suggested articles
    const suggestedArticles = await getSuggestedArticles(params.slug);

    const categoryLowercase = articleCategory.toLowerCase();

    return (
        <ContentWrapper>
            <BackButton backLocation="Learn" />
            <div id="top-section">
                <PageTitle
                    title={pageData.attributes.title}
                    subtitle={pageData.attributes.subtitle}
                />
                <div className="pt-2">
                    <div className="">
                        <Link href={`/search/${categoryLowercase}`}>
                            <CategoryBadge name={articleCategory} />
                        </Link>

                        {articleTags.map((tag: any) => {
                            return (
                                <CategoryBadge
                                    key={tag.id}
                                    name={tag}
                                    disabled
                                />
                            );
                        })}
                    </div>
                </div>
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
            <div id="suggested-articles">
                <h2 className="text-2xl font-bold text-base-content">
                    Suggested Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {suggestedArticles.slice(0, 3).map((article: any) => {
                        return (
                            <SuggestedArticleCard
                                key={article.id}
                                title={article.attributes.title}
                                subtitle={article.attributes.subtitle}
                                slug={`${article.attributes.link}`}
                            />
                        );
                    })}
                </div>
            </div>
        </ContentWrapper>
    );
}
