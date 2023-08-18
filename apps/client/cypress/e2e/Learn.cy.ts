/// <reference types="cypress" />

import { url } from "./utils/test-utils";

// Test Page Title
describe("Test Page Title", () => {
    it("Page Title is correct", () => {
        cy.visit(`${url}/learn`);
        cy.get("#page-title").should("have.text", "Learn");
    });

    it("Page Subtitle is correct", () => {
        cy.visit(`${url}/learn`);
        cy.get("#page-subtitle").should(
            "have.text",
            "Find out about the Scottish Parliament",
        );
    });
});

// Test Search Functionality
describe("Test Search Functionality", () => {
    // Faceting
    it("Faceting instructions are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-instructions")
            .should("be.visible")
            .should("have.text", "Tap a category to filter:");
    });

    it("Current Refinements instructions are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-filters-note")
            .should("be.visible")
            .should("have.text", "No filters are currently applied");
    });

    it("Facets are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-container").should("be.visible");
    });
});
