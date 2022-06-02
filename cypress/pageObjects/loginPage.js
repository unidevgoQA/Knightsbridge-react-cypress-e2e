import "cypress-iframe";

class LoginPage {

    getLoginPage = () => {
        cy.visit("https://qa.knights.app")
    }

    doLogin = () => {
        cy.get('[data-testid="email-input"]').type('ss.unidev@gmail.com');
        cy.get('[data-testid="password-input"]').type('5946644Ss@');

        cy.iframe('[title="reCAPTCHA"]').then((iframe) => {
            cy.wrap(iframe)
                .find('.recaptcha-checkbox-border')
                .should('be.visible')
                .click();
        });


            cy.wait(30000);


        cy.get('[data-testid="signin-submit-button"]').click();
        cy.contains("Today’s Cryptocurrency prices").should('be.visible');

    }
}

export default LoginPage;
