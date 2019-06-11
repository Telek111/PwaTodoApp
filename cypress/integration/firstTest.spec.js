/// <reference types="Cypress" />

describe ('Window', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });
});