import { FloatingButtons } from "./FloatingButtons";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Buttons",
    component: FloatingButtons,
} satisfies Meta<typeof FloatingButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FloatingButton: Story = (args: any) => (
    <div>
        <FloatingButtons {...args} />{" "}
    </div>
);

FloatingButton.args = {};
