const selectors = {
    title: `.title-font`,
}

const strings = {
    title: `Occupancy`,
    url: `/f51f27e6-3f96-4b4a-ad08-07ff62cf372c/analytics#Occupancy`
}

beforeEach(() => {
    cy.intercept(`POST`, `/api/users/refresh`).as(`refresh`);
    cy.login()
        .visit(strings.url)
        .wait(`@refresh`);

});

describe('Admin > Map> Occupancy', () => {
    it('User can see the title for occupancy page', () => {
        cy.get(selectors.title)
            .should('be.visible')
            .and(`have.text`, strings.title);
    });
});