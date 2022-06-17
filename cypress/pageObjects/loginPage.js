import "cypress-iframe";
import {Waits, Waits as waits} from "../support/waits"
import {Actions} from "../support/actions";

import {TestData} from "../fixtures/testData";
require('cypress-xpath')

class LoginPage {

    getLoginPage = () => {
        cy.visit("https://qa.knights.app")
    }

    /*
    This method used to log in to the application
     */
    doLogin = () => {
        // entering valid login credentials
        Actions.getLoginData().then(data => {
            cy.get('[data-testid="email-input"]').type(data.email);
            cy.get('[data-testid="password-input"]').type(data.password);
        });

        cy.iframe('[title="reCAPTCHA"]').then((iframe) => {
            cy.wrap(iframe)
                .find('.recaptcha-checkbox-border')
                .should('be.visible')
                .click();
        });

        Waits.wait(1)
        cy.get('[data-testid="signin-submit-button"]').click();

        cy.contains("Today’s Cryptocurrency prices").should('be.visible');
    }

    logOut = () => {
        cy.xpath('//img[@alt=\'Avatar\']').click();
        cy.xpath('//*[contains(text(),\'Sign out\')]').click();
        cy.xpath('//*[contains(text(),\'Sign in\')]').should('be.visible');
    }

    enterEmail = (pre, suf) => {
        TestData.writeCounterFile();
        cy.readFile(Cypress.env('login_data_path')).then(data => {
            let email = TestData.generateEmailAlias(pre, data.counter, suf);
            cy.get('[data-testid="email-input"]').clear().type(email);
        });
        return this;
    }

    signUp = () => {
        cy.visit("https://qa.knights.app/signup");

        cy.get('[data-testid="name-input"]').type(TestData.getFirstname());
        cy.get('[data-testid="surname-input"]').type(TestData.getFirstname());

        Actions.readFile(Cypress.env('login_data_path')).then(data => {
            this.enterEmail(data.emailPrefix, data.emailSuffix);
        });

        Actions.typeText('[data-testid="password-input"]', '5946644Ss@');
        cy.get('[for=":r1:"] > .Checkbox_inner__qg6mX > .Checkbox_tick__HP-JJ').click()

        cy.iframe('[title="reCAPTCHA"]').then((iframe) => {
            cy.wrap(iframe)
                .find('.recaptcha-checkbox-border')
                .should('be.visible')
                .click();
        });

        waits.wait();
        cy.get('[data-testid="signup-submit-button"]').click();
        cy.xpath('//*[contains(text(), "Enter your security code")]').should('be.visible');


    }
}

export default LoginPage;
