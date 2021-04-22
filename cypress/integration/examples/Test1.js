/// <reference types=""

describe('My First Test Suite', function() {

  it('My First Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // Visit any website
    cy.get('.search-keyword').type('ca')
  })

  it('My Second Test Case', function() {

  })
})
