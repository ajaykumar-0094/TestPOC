const selectors = {
    inputs: {
        search: `[placeholder="Search customer"]`,
    },
    projectCard: `.group-title`,
    dropdownLable: `[class*="p-dropdown-label"] div>div`
}

const strings = {
    projectName: `Internal Test Project`
}

beforeEach(() => {
    cy.intercept(`GET`, `/api/projects/*/devices`).as(`getDevices`);
    cy.login();
})

describe('Admin > Customers', () => {
    it('User can search and select a customers', () => {
        cy.get(selectors.inputs.search)
            .should('be.visible')
            .type(strings.projectName);

        cy.get(selectors.projectCard)
            .should('be.visible')
            .click();
        
        cy.wait(`@getDevices`);

        cy.get(selectors.dropdownLable)
            .should(`have.text`, strings.projectName);
    });
});