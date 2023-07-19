import React from "react";
import { Card } from "./Card";

describe("<Card />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(
            <Card
                title="This is a title"
                image="https://res.cloudinary.com/tommceachan/image/upload/v1688937952/small_Garden_Lobby_5ac1b5950b.jpg"
                category="MSPs"
                link="/"
            />,
        );
    });
});
