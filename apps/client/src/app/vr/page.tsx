import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { VRVideoPlayer } from "@/components/ClientComponents/VRVideoPlayer/VRVideoPlayer";
import { getVRTourInstructions } from "@/utils/fetching/DataFetching";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackButton } from "@/components/ServerComponents/Buttons/BackButton/BackButton";
import { Suspense } from "react";
import { components } from "@/components/ServerComponents/Markdown/VRInstructionsMarkdown";
import DeviceDetector from "@/utils/providers/DeviceDetector";

export default async function VR(): Promise<JSX.Element> {
    const pageData = await getVRTourInstructions();

    return (
        <ContentWrapper>
            <PageTitle
                title="Virtual Reality"
                subtitle="Go on a tour in 360° Virtual Reality"
            />
            <div className="divider" />
            <div className="grid grid-cols-3 gap-4">
                <VRVideoPlayer videoUrl="https://www.youtube.com/playlist?list=PL4l0q4AbG0mmlQPsNj4FcIChUAJpLlfsK" />
                <div className="bg-primary w-full lg:col-span-1 col-span-3 flex-row">
                    <div className="">
                        <h3 className="font-bold text-4xl text-base-100 mx-4 mt-4">
                            {pageData.attributes.Title}
                        </h3>
                    </div>
                    <div className="col-span-3 text-base-100 text-xl">
                        <DeviceDetector isIos={true}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <div>
                                    <MDXRemote
                                        source={pageData.attributes.iosContent}
                                        components={{
                                            ...components,
                                        }}
                                    />
                                </div>
                            </Suspense>
                        </DeviceDetector>
                        <DeviceDetector isAndroid={true}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <div>
                                    <MDXRemote
                                        source={
                                            pageData.attributes.androidContent
                                        }
                                        components={{
                                            ...components,
                                        }}
                                    />
                                </div>
                            </Suspense>
                        </DeviceDetector>
                        <DeviceDetector isDesktop={true}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <div>
                                    <MDXRemote
                                        source={
                                            pageData.attributes.desktopContent
                                        }
                                        components={{
                                            ...components,
                                        }}
                                    />
                                </div>
                            </Suspense>
                        </DeviceDetector>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}
