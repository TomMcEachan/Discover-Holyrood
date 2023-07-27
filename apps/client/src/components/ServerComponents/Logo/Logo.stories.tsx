import { Logo } from "./Logo";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Assets",
    component: Logo,
    argTypes: {
        darkMode: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LogoStory: Story = (args: any) => (
    <div>
        <Logo {...args} />
    </div>
);

LogoStory.args = {};
