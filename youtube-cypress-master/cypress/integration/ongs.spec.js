/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register');
        // cy.get - busca um elemento
        // .type - insere um texto 
        cy.get('[data-cy=name]').type('Doguinhos');
        cy.get('[data-cy=email]').type('silas_10d@hotmail.com');
        cy.get('[data-cy=whatsapp]').type('9232318178');
        cy.get('[data-cy=city]').type('Manaus');
        cy.get('[data-cy=uf]').type('AM');

        cy.get('[data-cy=submit]').click();
    });
    it.skip('deve poder realizar um login', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000',
            body: {
                name: "Doguinhos",
                email: "silas_10d@hotmail.com",
                whatsapp: "9232318178",
                city: "Manaus",
                uf: "AM"

            }

        }).then(response =>{

        })
        
    });
});