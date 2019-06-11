/// <reference types="Cypress" />

describe ('Short lifecycle of App', () => {
  it ('Visit the app', () => {
    cy.visit('/');
  });
  it ('Create task', () => {
    cy.visit('/');
    cy.get('.fixed-action-btn').click();
    cy.get('#toDoNext').type('Some Task').type('{enter}');
  });
  it ('Remove all tasks', () => {
    cy.visit('/');
    cy.get('.fixed-action-btn').click();
    cy.get('#toDoNext').type('Some Task').type('{enter}');
    cy.get('.complete-todo-item').click({ multiple: true });
  });
  it ('Todo should be zero with notification', () => {
    cy.visit('/');
    cy.get('h4').contains('You have no more things ToDo!');
  });
});