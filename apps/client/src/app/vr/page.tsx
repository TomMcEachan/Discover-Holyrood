import { ContentWrapper } from "@/components/ServerComponents/ContentWrapper/ContentWrapper";
import { PageTitle } from "@/components/ServerComponents/PageTitle/PageTitle";
import { VRVideoPlayer } from "@/components/ClientComponents/VRVideoPlayer/VRVideoPlayer";

export default function Learn(): JSX.Element {
    return (
        <ContentWrapper>
            <PageTitle
                title="Virtual Reality"
                subtitle="Go on a tour in 360° Virtual Reality"
            />
            <div className="divider" />
            <div className="">
                <div className="grid grid-cols-3 gap-4">
                    <VRVideoPlayer videoUrl="https://www.youtube.com/playlist?list=PL4l0q4AbG0mmlQPsNj4FcIChUAJpLlfsK" />
                    <div className="bg-primary w-full lg:col-span-1 col-span-3 flex-row ">
                        <div className="">
                            <h3 className="font-bold text-3xl text-base-100 mx-4 mt-4">
                                How to use the VR Tour
                            </h3>
                        </div>
                        <div className="col-span-3 text-base-100 text-xl">
                            <ol type="1" className="list-decimal">
                                <li className="mx-8 my-4">
                                    Click on the video to start the tour. This
                                    will start a YouTube playlist which will
                                    play each stop of the tour one by one.
                                </li>
                                <li className="mx-8 my-4">
                                    Click and drag the video to look around.
                                </li>
                                <li className="mx-8 my-4">
                                    Click on the arrows to move to the next
                                    location.
                                </li>
                                <li className="mx-8 my-4">
                                    Click on the VR icon to view the video in
                                    VR.
                                </li>
                                <li className="mx-8 my-4">
                                    You can go full screen by clicking on the
                                    full screen icon. This will allow you to
                                    fully immerse yourself in the tour if you
                                    are using a headset device.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
}
