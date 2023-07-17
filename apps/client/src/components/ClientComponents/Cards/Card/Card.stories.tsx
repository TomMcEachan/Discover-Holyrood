import { Card } from "./Card";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Cards",
    component: Card,
    argTypes: {
        category: {
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
        title: {
            control: { type: "text" },
        },
        image: {
            control: { type: "text" },
        },
        link: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Article: Story = (args: any) => (
    <div className="grid grid-cols-4">
        <Card {...args} />{" "}
    </div>
);
Article.args = {
    category: "MSPs",
    title: "This is a title for this very interesting component",
    image: "https://res.cloudinary.com/tommceachan/image/upload/v1688937952/small_Garden_Lobby_5ac1b5950b.jpg",
    link: "/",
};
