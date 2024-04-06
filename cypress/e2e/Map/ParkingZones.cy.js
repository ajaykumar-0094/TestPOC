const selectors = {
    buttons: {
        parkingZones: `[aria-label="HOME.Parking zones"]`,
    },
}

const strings = {
    url: `/f51f27e6-3f96-4b4a-ad08-07ff62cf372c/live#parking-zones`
}

beforeEach(() => {
    cy.intercept(`GET`, `/ngsw.json?ngsw-cache-bust=*`).as(`getBust`);
    cy.login()
        .visit(strings.url)
        .wait(`@getBust`);
});

describe('Admin > Map> Parking zones', () => {
    it('User can see the left navigation selection for parking zones', () => {
        cy.get(selectors.buttons.parkingZones)
            .should('be.visible')
            .and(`have.attr`, `aria-selected`, "true");
    });
});