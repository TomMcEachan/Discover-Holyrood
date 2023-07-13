/// <reference types="cypress" />

import { url } from './utils/test-utils'


// Test AppBar Nav
describe('Test Appbar Nav', () => {
  it('Can Navigate to Learn', () => {
    cy.visit(url)
    cy.contains('Learn').click()
    cy.url().should('include', '/learn')
  })

  it('Can Navigate to Home', () => {
    cy.visit(url)
    cy.contains('Home').click()
    cy.url().should('include', '/')
  })

  it('Can Navigate to About', () => {
    cy.visit(url)
    cy.contains('AR Tour').click()
    cy.url().should('include', '/ar')
  })
})

// Test Top Nav
describe('Test Top Nav', () => {
  it('Home Button Returns to Homepage', () => {
    cy.visit(`${url}/learn`)
    cy.contains('Discover Holyrood').click()
    cy.url().should('include', '/')
  })

  it('Hamburger Menu Opens', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#hamburger-close-button').should('be.visible')
  })

})

// Test Sidebar
describe('Test Sidebar', () => {

  // Check Sidebar Can Close
  it('Can close Hamburger Menu with button', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#hamburger-close-button').click()
    cy.get('#hamburger-button').should('be.visible')
  })

  it('Can close Hamburger Menu with overlay', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#overlay').click()
    cy.get('#hamburger-button').should('be.visible')
  })

  // Check Sidebar Links
  it('Can Navigate to Settings Page', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.contains('Change App Settings').click()
    cy.url().should('include', '/settings')
  })

  it('Can Navigate to Watch VR Tour Page', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.contains('Watch VR Tour').click()
    cy.url().should('include', '/vr')
  })

  it('Can Navigate to Opening Times', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.contains('Check Opening Times').click()
    cy.url().should('include', '/opening-times')
  })

  it('Can Navigate to Book Tickets', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#book-tour-tickets-button').should('have.attr', 'href', 'https://www.parliament.scot/visit/tours').should('have.attr', 'target', '_blank')
  })

  it('Can Navigate to Books Business Tickets', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#book-business-tickets-button').should('have.attr', 'href', 'https://www.parliament.scot/visit/tickets-for-debates-and-meetings').should('have.attr', 'target', '_blank')
  })

  it('Can Navigate to Main Parliament Site', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#main-website-button').should('have.attr', 'href', 'https://www.parliament.scot').should('have.attr', 'target', '_blank')
  })

  it('Can Navigate switch color mode', () => {
    cy.visit(url)
    cy.get('#hamburger-button').click()
    cy.get('#color-toggle-button').click()
    cy.get('#color-toggle-button').should('have.attr', 'aria-checked', 'false')
  })

})

