import { BackButton } from "./BackButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Buttons",
    component: BackButton,
    argTypes: {
        backLocation: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof BackButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackToButton: Story = (args: any) => (
    <div>
        <BackButton {...args} />
    </div>
);
BackToButton.args = {
    backLocation: "/",
};
