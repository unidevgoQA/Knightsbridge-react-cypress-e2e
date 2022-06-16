import "cypress-iframe";
import {Waits, Waits as waits} from "../support/waits"
import {Actions} from "../support/actions";
import {Utilities} from "../support/utilities";
require('cypress-xpath')

class LoginPage {

    getLoginPage = () => {
        cy.visit("https://qa.knights.app")
    }

    doLogin = () => {
        cy.get('[data-testid="email-input"]').type('ss.unidev+1@gmail.com');
        cy.get('[data-testid="password-input"]').type('5946644Ss@');

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

    signUp = () => {
        let count = Utilities.readCounter().then(number => {
            return number;
        })

        cy.visit("https://qa.knights.app/signup");

        cy.get('[data-testid="name-input"]').type(Utilities.getRandomFirstName());
        cy.get('[data-testid="surname-input"]').type(Utilities.getRandomLastName());
        Actions.typeText('[data-testid="email-input"]', 'ss.unidev' + "+" + Math.round(Math.random * 10000) + '@gmail.com');
        Actions.typeText('[data-testid="password-input"]', '5946644Ss@');
        Actions.typeText('[data-testid="confirm-password-input"]', '5946644Ss@');
        cy.get('[for=":r2:"] > .Checkbox_inner__qg6mX > .Checkbox_tick__HP-JJ').click()

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
