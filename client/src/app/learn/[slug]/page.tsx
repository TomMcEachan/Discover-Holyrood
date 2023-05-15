import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { CategoryBadge } from "@/components/server-components/Buttons/CategoryBadge";
import { PageTitle } from "@/components/client-components/PageTitle/PageTitle";
import { Suspense } from "react";
import { components } from "@/components/Markdown/ArticleMarkdown";

interface Props {
    params: {
        slug: string;
        id: string;
    };
}

export default async function ArticlePage({ params }: Props) {
    const res = await fetch(
        `https://discover-holyrood-cms.azurewebsites.net/api/articles?filters[link][$eq]=${params.slug}&populate=deep`,
    );

    const resData = await res.json();
    const pageData = await resData.data[0];

    //Get the article tags
    const articleTags: any = pageData.attributes.tags.data.map((tag: any) => {
        return tag.attributes.name;
    });

    //Get the article category
    const articleCategory =
        pageData.attributes.categories.data[0].attributes.name;

    const markdown = await pageData.attributes.content;

    return (
        <main id="page-content" className="min-h-screen px-4 pb-40">
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
            <article id="content">
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
        </main>
    );
}
