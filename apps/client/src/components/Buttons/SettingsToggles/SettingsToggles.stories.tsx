import { SettingsToggle } from "./SettingsToggles";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Buttons",
    component: SettingsToggle,
    argTypes: {
        label: { type: "string" },
        checked: { type: "boolean" },
        onChange: { type: "function" },
        sidebar: { type: "boolean" },
    },
} satisfies Meta<typeof SettingsToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SettingsToggleStory: Story = (args: any) => (
    <div>
        <SettingsToggle {...args} />
    </div>
);

SettingsToggleStory.args = {
    label: "Dark Mode",
    checked: false,
    onChange: () => {},
    sidebar: false,
};
