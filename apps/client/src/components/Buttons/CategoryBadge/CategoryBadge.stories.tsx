import { CategoryBadge } from "./CategoryBadge";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Buttons",
    component: CategoryBadge,
    argTypes: {
        name: {
            options: [
                "MSPs",
                "Chamber",
                "Laws",
                "Powers",
                "History",
                "Building",
            ],
            control: { type: "radio" },
        },
        refined: {
            control: { type: "boolean" },
        },
    },
} satisfies Meta<typeof CategoryBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CategoryBadgeButton: Story = (args: any) => (
    <div>
        <CategoryBadge {...args} />{" "}
    </div>
);
CategoryBadgeButton.args = {
    name: "MSPs",
    refined: false,
};
