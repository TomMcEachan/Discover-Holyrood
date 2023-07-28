import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { VideoTextBlock, VideoTextBlockProps } from "./VideoTextBlock";

const meta: Meta = {
    title: "Components/VideoPlayers/VideoTextBlock",
    component: VideoTextBlock,
    argTypes: {
        title: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof VideoTextBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoTextBlockStory: Story = (args: VideoTextBlockProps) => (
    <div className="grid grid-cols-2">
        <VideoTextBlock {...args}>
            <p className="text-base-100 text-xl px-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatum, nemo, quae, quia voluptates quos voluptatem
                voluptatibus doloribus officiis consequatur dolorum. Quisquam
                quibusdam, voluptatum, quia, voluptate quod quas voluptatibus
            </p>
        </VideoTextBlock>
    </div>
);

VideoTextBlockStory.args = {
    title: "Video Text Block",
};
