import { PageTitle } from "./PageTitle";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Typography",
    component: PageTitle,
    argTypes: {
        title: {
            type: "string",
        },
        subtitle: {
            type: "string",
        },
    },
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTitleStory: Story = (args: any) => (
    <div>
        <PageTitle {...args} />
    </div>
);

PageTitleStory.args = {
    title: "This is the page title",
    subtitle: "This is the smaller subtitle",
};
