
const selectors = {
    buttons: {
        registration: `[type="submit"] button`
    },
    inputs: {
        email: `[type="email"]`,
        password: `[type="password"]`
    },
    images: {
        logo: `img.cleverciti-logo`
    }
}

Cypress.Commands.add(`setViewport`, () => {
    cy.viewport(`macbook-16`);
});

Cypress.Commands.add(`login`, () => {
    cy.setViewport();
    cy.visit(`/login`);

    [`email`, `password`].forEach(input => {
        cy.get(selectors.inputs[input])
            .should(`exist`)
            .type(Cypress.env(input));
    })

    cy.get(selectors.buttons.registration)
        .should(`exist`)
        .click();

    cy.get(selectors.images.logo)
        .should(`be.visible`);
});