import { LaunchARButton } from "./LaunchARButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Buttons",
    component: LaunchARButton,
} satisfies Meta<typeof LaunchARButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LaunchARButtonStory: Story = (args: any) => (
    <div>
        <LaunchARButton {...args} />{" "}
    </div>
);

LaunchARButtonStory.args = {
    sceneLocation: "",
    buttonText: "Launch AR Experience",
};
