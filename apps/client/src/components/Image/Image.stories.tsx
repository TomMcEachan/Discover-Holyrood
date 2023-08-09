import ImageComponent from "./Image";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Images",
    component: ImageComponent,
} satisfies Meta<typeof ImageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageComponentStory: Story = (args: any) => (
    <div className="grid grid-cols-4">
        <ImageComponent {...args} />{" "}
    </div>
);
ImageComponentStory.args = {
    imageURL:
        "https://res.cloudinary.com/tommceachan/image/upload/v1688937952/small_Garden_Lobby_5ac1b5950b.jpg",
    imageAlt: "This is an image of the garden lobby",
};
