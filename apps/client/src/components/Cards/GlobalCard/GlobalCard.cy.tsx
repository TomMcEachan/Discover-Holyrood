import React from "react";
import { GlobalSearchCard, GlobalSearchCardProps } from "./GlobalSearchCard";

const ChamberProps: GlobalSearchCardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "Chamber",
    link: "",
    contentType: "AR",
};

describe("<GlobalSearchCard />", () => {
    it("Chamber Variant Renders Properly", () => {
        // Grab image file that this component relies on
        cy.readFile("public/images/Mace.jpg", null).then((img) => {
            // Intercept requests to Next backend image endpoint and return expected image
            cy.intercept("_next/image*", {
                statusCode: 200,
                headers: {
                    "Content-Type": "image/png",
                },
                body: img.buffer,
            });
            cy.mount(<GlobalSearchCard {...ChamberProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(ChamberProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(ChamberProps.category);
    });
});
