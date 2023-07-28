import React from "react";
import { Card, CardProps } from "./Card";

const ChamberProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "Chamber",
    link: "",
};
const MSPProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "MSPs",
    link: "",
};
const PowersProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "Powers",
    link: "",
};
const HistoryProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "History",
    link: "",
};
const BuildingProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "Building",
    link: "",
};
const LawsProps: CardProps = {
    title: "This is a title a very interesting title",
    image: "/images/Mace.jpg",
    category: "Laws",
    link: "",
};

describe("<Card />", () => {
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
            cy.mount(<Card {...ChamberProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(ChamberProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(ChamberProps.category);
    });

    it("MSPs Variant Renders Properly", () => {
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
            cy.mount(<Card {...MSPProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(MSPProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(MSPProps.category);
    });

    it("Powers Variant Renders Properly", () => {
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
            cy.mount(<Card {...PowersProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(PowersProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(PowersProps.category);
    });

    it("History Variant Renders Properly", () => {
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
            cy.mount(<Card {...HistoryProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(HistoryProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(HistoryProps.category);
    });

    it("Building Variant Renders Properly", () => {
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
            cy.mount(<Card {...BuildingProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(BuildingProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(BuildingProps.category);
    });

    it("Laws Variant Renders Properly", () => {
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
            cy.mount(<Card {...LawsProps} />);
        });

        // Check that the title is rendered
        cy.get("h3").contains(LawsProps.title);

        //Check that correct category is rendered
        cy.get("button").contains(LawsProps.category);
    });
});
