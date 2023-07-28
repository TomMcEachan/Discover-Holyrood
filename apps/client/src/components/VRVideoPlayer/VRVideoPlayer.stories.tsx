import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VRVideoPlayer, VRVideoPlayerProps } from "./VRVideoPlayer";

const meta: Meta = {
    title: "Components/VideoPlayers/VRVideoPlayer",
    component: VRVideoPlayer,
    argTypes: {
        videoUrl: {
            control: { type: "text" },
        },
        imageUrl: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof VRVideoPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoPlayerStory: Story = (args: VRVideoPlayerProps) => (
    <div className="grid grid-cols-4">
        <VRVideoPlayer {...args} />{" "}
    </div>
);

VideoPlayerStory.args = {
    videoUrl:
        "https://res.cloudinary.com/tommceachan/video/upload/v1690210142/Welcome_9a60d6e642.mp4",
    imageUrl:
        "https://res.cloudinary.com/tommceachan/image/upload/v1690218402/medium_Video_Thumbnail_d0edef0fe4.png",
};
