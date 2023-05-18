import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { CategoryBadge } from "@/components/server-components/Buttons/CategoryBadge";
import { PageTitle } from "@/components/server-components/PageTitle/PageTitle";
import { Suspense } from "react";
import { components } from "@/components/Markdown/ArticleMarkdown";
import { ContentWrapper } from "@/components/server-components/ContentWrapper/ContentWrapper";
import { SuggestedArticle } from "@/components/client-components/Cards/SuggestedArticle/SuggestedArticle";

interface Props {
    params: {
        slug: string;
        id: string;
    };
}

const getArticle = async (slug: string) => {
    const res = await fetch(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?filters[link][$eq]=${slug}&populate=deep`,
    );
    const resData = await res.json();
    const pageData = await resData.data[0];

    return pageData;
};

const getSuggestedArticles = async (slug: string, category: string) => {
    const res = await fetch(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?populate=deep&filters[link][$ne]=${slug}`,
    );

    const resData = await res.json();
    const articles = await resData.data;
    return articles;
};

export default async function ArticlePage({ params }: Props) {
    const pageData = await getArticle(params.slug);

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
    const suggestedArticles = await getSuggestedArticles(
        params.slug,
        articleCategory,
    );

    return (
        <ContentWrapper>
            <div id="top-section">
                <PageTitle
                    title={pageData.attributes.title}
                    subtitle={pageData.attributes.subtitle}
                />
                <div className="pt-2">
                    <CategoryBadge name={articleCategory} />
                    {articleTags.map((tag: any) => {
                        return <CategoryBadge key={tag.id} name={tag} />;
                    })}
                </div>
                <div className="divider" />
            </div>
            <article id="content" className="">
                <Suspense fallback={<div>Loading...</div>}>
                    {/* @ts-expect-error Async Server Component */}
                    <MDXRemote
                        source={markdown}
                        components={{
                            ...components,
                        }}
                    />
                </Suspense>
            </article>
            <div className="divider" />
            <div id="suggested-articles">
                <h2 className="text-2xl font-bold text-base-content">
                    Suggested Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {suggestedArticles.slice(0, 3).map((article: any) => {
                        return (
                            <SuggestedArticle
                                key={article.id}
                                title={article.attributes.title}
                                subtitle={article.attributes.subtitle}
                                slug={`learn/${article.attributes.link}`}
                            />
                        );
                    })}
                </div>
            </div>
        </ContentWrapper>
    );
}
