import { SuggestedArticleCard } from "./SuggestedArticleCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Cards",
    component: SuggestedArticleCard,
    argTypes: {
        title: {
            control: { type: "text" },
        },
        subtitle: {
            control: { type: "text" },
        },
        slug: {
            control: { type: "text" },
        },
    },
} satisfies Meta<typeof SuggestedArticleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SuggestedArticle: Story = (args: any) => (
    <div className="grid grid-cols-4">
        <SuggestedArticleCard {...args} />{" "}
    </div>
);
SuggestedArticle.args = {
    title: "This is a title for this very interesting component",
    subtitle: "This is a subtitle for this very interesting component",
    slug: "/",
};
