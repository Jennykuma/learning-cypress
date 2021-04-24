/// <reference types="Cypress" />

describe('My First Test Suite', function() {

  it('My First Test Case', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // Visit any website
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)

    // Parent child
    cy.get('.products').find('.product').should('have.length', 4)

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // get 3rd item [0,1,2,3] and check if it contains text 'ADD TO CART'
  })

})
