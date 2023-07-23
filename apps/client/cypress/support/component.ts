/// <reference types="cypress" />

import { mount } from "cypress/react18";
import "../../src/app/globals.css";

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add("mount", mount);
