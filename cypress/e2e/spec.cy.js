describe('spec.cy.js', () => {
    it('should visit the homepage', () => {
        cy.visit('/');
    });
    it("should have the test file included", () => {
        cy.visit('/');
        cy.get('.testComponent').contains('Result count')
    })
});