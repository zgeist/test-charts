
describe('Function Charts', () => {
    it('should navigate to the root page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // The new page should contain an h1 with "About page"
        cy.get('h1').contains('Function charts')

        cy.wait(2000);

        cy.get('.recharts-legend-item-text').contains('linear').should('exist');
        cy.get('.recharts-legend-item-text').contains('square').should('exist');
        cy.get('.recharts-legend-item-text').contains('cube').should('exist');

        // Find a link with an href attribute containing "about" and click it
        cy.get('input[name="from"]').clear().type('-5')
        cy.get('input[name="from"]').invoke('val').should((value) => {
                expect(value).to.equal('-5')
        })

        cy.get('input[name="to"]').clear().type('5')
        cy.get('input[name="to"]').invoke('val').should((value) => {
            expect(value).to.equal('5')
        })

        cy.get('input[name="step"]').clear().type('0.2')
        cy.get('input[name="step"]').invoke('val').should((value) => {
            expect(value).to.equal('0.2')
        })

        cy.get('button[type="submit"]').click();

        cy.wait(2000);

        cy.get('.recharts-line').should('have.length', 3);

        cy.get('.recharts-legend-item-text').contains('linear').click();

        cy.get('.recharts-line').should('have.length', 2);

        cy.get('.recharts-legend-item-text').contains('cube').click();

        cy.get('.recharts-line').should('have.length', 1);

        cy.get('.recharts-legend-item-text').contains('linear').click();

        cy.get('.recharts-line').should('have.length', 2);
    })
})
