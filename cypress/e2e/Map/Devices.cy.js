const selectors = {
    buttons: {
        devices: `[aria-label="HOME.Devices"]`,
    },
}

const strings = {
    url: `/f51f27e6-3f96-4b4a-ad08-07ff62cf372c/live#devices`
}

beforeEach(() => {
    cy.intercept(`POST`, `/api/users/refresh`).as(`refresh`);
    cy.login()
        .visit(strings.url)
        .wait(`@refresh`);
});

describe('Admin > Map> Devices', () => {
    it('User can see the left navigation selection for devices', () => {
        cy.get(selectors.buttons.devices)
            .should('be.visible')
            .and(`have.attr`, `aria-selected`, "true");
    });
});