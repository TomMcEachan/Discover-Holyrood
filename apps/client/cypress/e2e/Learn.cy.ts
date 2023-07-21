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
            .should("have.text", "Tap a category to filter learning material:");
    });

    it("Current Refinements instructions are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-filters-note")
            .should("be.visible")
            .should("have.text", "No filters are currently applied");
    });

    it("Current Refinements are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-container").children().eq(0).click();
        cy.get("#facet-filters-note")
            .should("be.visible")
            .should("have.text", "Currently Applied Filters:");
        cy.get("#current-refinements").should("be.visible");
        cy.get("#current-refinements").children().should("have.length", 1);
        cy.get("#current-refinements")
            .children()
            .eq(0)
            .should("have.text", "Building");
    });

    it("Facets are visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-container").should("be.visible");
    });

    it("Facets have correct text", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-container").should("be.visible");
        cy.get("#facet-container").children().should("have.length", 6);
        cy.get("#facet-container")
            .children()
            .eq(0)
            .should("have.text", "Building");
        cy.get("#facet-container")
            .children()
            .eq(1)
            .should("have.text", "Chamber");
        cy.get("#facet-container")
            .children()
            .eq(2)
            .should("have.text", "History");
        cy.get("#facet-container").children().eq(3).should("have.text", "Laws");
        cy.get("#facet-container").children().eq(4).should("have.text", "MSPs");
        cy.get("#facet-container")
            .children()
            .eq(5)
            .should("have.text", "Powers");
    });

    it("Facets return correct results", () => {
        cy.visit(`${url}/learn`);
        cy.get("#facet-container").should("be.visible");
        cy.get("#facet-container").children().eq(0).click();
        cy.get("#search-results").should("be.visible");
        cy.get("#search-result").should("be.visible");
        cy.get("#search-result")
            .children()
            .eq(1)
            .children()
            .should("have.text", "Building");
    });

    // Search Bar
    it("Search bar is visible", () => {
        cy.visit(`${url}/learn`);
        cy.get("#search-bar").should("be.visible");
    });

    it("Search bar has right placeholder text", () => {
        cy.visit(`${url}/learn`);
        cy.get("#search-bar-input").should(
            "have.attr",
            "placeholder",
            "Search for learning material...",
        );
    });

    it("Search bar icon is visible ", () => {
        cy.visit(`${url}/learn`);
        cy.get("#search-bar-icon").should("be.visible");
    });
});
