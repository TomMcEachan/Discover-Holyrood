import {
    getAllCategories,
    getSpecificCategory,
    getArticleByCategory,
    getARSceneByCategory,
} from "@/utils/fetching/DataFetching";
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { GlobalSearchCard } from "@/components/Cards/GlobalCard/GlobalSearchCard";
import { shuffleArray } from "@/utils/arrays/shuffle";

// Page Props
type SearchCategoryPageProps = {
    params: {
        slug: string;
        id: number;
    };
};

export async function generateStaticParams() {
    const categories = await getAllCategories();

    //console.log(categories);
    const paths = categories.map((category: any) => {
        return {
            params: {
                slug: category.attributes.name,
            },
        };
    });

    return paths;
}

async function getPageSlug(slug: string) {
    switch (slug) {
        case "msps":
            return "MSPs"; // Return "MSPs" for slug "msps"
        case "laws":
            return "Laws"; // Return "Laws" for slug "laws"
        case "history":
            return "History"; // Return "History" for slug "history"
        case "building":
            return "Building"; // Return "Building" for slug "building"
        case "chamber":
            return "Chamber"; // Return "Chamber" for slug "chamber"
        case "powers":
            return "Powers"; // Return "Powers" for slug "powers"
        default:
            return "Unknown"; // Return "Unknown" for any other slug
    }
}

export default async function SearchCategoriesPage({
    params,
}: SearchCategoryPageProps) {
    // Get page data
    const slug = await getPageSlug(params.slug);
    const data = await getSpecificCategory(slug);
    const pageData = data.data[0];

    // Get articles by category
    const articlesData = await getArticleByCategory(pageData.id);
    //console.log(articlesData);

    // Get AR Scenes by category
    const arScenesData = await getARSceneByCategory(pageData.id);
    //console.log(arScenesData);

    // Merge articles and AR Scenes
    const mergedData = [...articlesData, ...arScenesData];

    // Shuffle articles
    const content = shuffleArray(mergedData);

    return (
        <ContentWrapper>
            <div>
                <span className="bg-secondary rounded-md text-white p-1.5 font-bold text-md">
                    Filtered Search
                </span>
            </div>
            <PageTitle
                title={pageData.attributes.name}
                subtitle={pageData.attributes.description}
            />
            <div className="divider" />
            <div className="grid grid-cols-4 gap-4" id="related-content">
                {content.map((content: any) => (
                    <GlobalSearchCard
                        key={content.id}
                        title={content.attributes.title}
                        category={
                            content.attributes.categories.data[0].attributes
                                .name
                        }
                        image={
                            content.attributes.image.data.attributes.formats
                                .medium.url
                        }
                        link={
                            content.attributes.link ||
                            content.attributes.appLink
                        }
                        contentType={
                            content.attributes.content_type.data.attributes.name
                        }
                    />
                ))}
            </div>
        </ContentWrapper>
    );
}
