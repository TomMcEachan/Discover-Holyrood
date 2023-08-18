/// <reference types="cypress" />

import { url } from "./utils/test-utils";

describe("Home Page", () => {
    beforeEach(() => {
        cy.visit(`${url}/`); // Adjust the URL as needed
    });

    it("should display the page title and subtitle", () => {
        cy.contains("Home").should("exist");
        cy.contains("Discover your Scottish Parliament").should("exist");
    });

    it("should display video player and text block", () => {
        cy.get("#video_section").should("exist");
        cy.get("#video-text-block").should("exist");
    });

    it("should display featured learning articles and ar scenes blocks", () => {
        cy.get("#featured-learning");
        cy.get("#featured-ar");
    });
});
