export class Actions {

    static typeText(selector, text) {
        cy.get(selector).type(text);
    }

    static click(selector) {
        cy.get(selector).click();
    }

    static selectOption(selector, option) {
        cy.get(selector).select(option);
    }

    static check(selector) {
        cy.get(selector).check();
    }

    static uncheck(selector) {
        cy.get(selector).uncheck();
    }

    static clear(selector) {
        cy.get(selector).clear();
    }

}
