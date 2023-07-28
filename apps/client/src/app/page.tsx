// Components Import
import { ContentWrapper } from "@/components/Wrappers/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { getAllData } from "@/utils/fetching/DataFetching";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import { GlobalSearchCard } from "@/components/Cards/GlobalCard/GlobalSearchCard";
import { VideoTextBlock } from "@/components/VideTextBlock/VideoTextBlock";
import { Suspense } from "react";

export default async function Home() {
    const pageData = await getAllData();
    const articles = pageData.articles;
    const scenes = pageData.scenes;

    return (
        <ContentWrapper>
            <PageTitle
                title="Home"
                subtitle="Discover your Scottish Parliament"
            />
            <div className="divider" />
            <div className="grid grid-cols-3 gap-4" id="video_section">
                <VideoPlayer
                    url="https://res.cloudinary.com/tommceachan/video/upload/v1690210142/Welcome_9a60d6e642.mp4"
                    imageUrl="https://res.cloudinary.com/tommceachan/image/upload/v1690218402/medium_Video_Thumbnail_d0edef0fe4.png"
                />

                <VideoTextBlock title="Welcome to Discover Holyrood,">
                    <div className="mx-4 my-4 sm:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl">
                        <p className="pb-4">
                            Discover Holyrood is a new way to explore the
                            Scottish Parliament.
                        </p>
                        <p>
                            It's a digital experience that allows you to explore
                            the Scottish Parliament from the comfort of your own
                            home. You can explore the Parliament in 360°, watch
                            videos, read articles and even learn about the
                            Parliament in augmented reality.
                        </p>
                    </div>
                </VideoTextBlock>
            </div>
            <div className="divider" />
            <div className="">
                <h2 className="text-2xl md:text-4xl font-bold pb-2 text-base-content">
                    Featured Learning
                </h2>
                <div className="grid gap-4 grid-cols-4">
                    {articles.slice(0, 4).map((article: any) => (
                        <GlobalSearchCard
                            key={article.id}
                            title={article.attributes.title}
                            category={
                                article.attributes.categories.data[0].attributes
                                    .name
                            }
                            image={
                                article.attributes.image.data.attributes.formats
                                    .medium.url
                            }
                            link={article.attributes.link}
                            contentType={
                                article.attributes.content_type.data.attributes
                                    .name
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="divider" />
            <div className="">
                <h2 className="text-2xl md:text-4xl font-bold pb-2 text-base-content">
                    Featured AR Scenes
                </h2>
                <div className="grid gap-4 grid-cols-4">
                    {scenes.slice(0, 4).map((scene: any) => (
                        <GlobalSearchCard
                            key={scene.id}
                            title={scene.attributes.title}
                            category={
                                scene.attributes.categories.data[0].attributes
                                    .name
                            }
                            image={
                                scene.attributes.image.data.attributes.formats
                                    .medium.url
                            }
                            link={scene.attributes.appLink}
                            contentType={
                                scene.attributes.content_type.data.attributes
                                    .name
                            }
                        />
                    ))}
                </div>
            </div>
        </ContentWrapper>
    );
}
