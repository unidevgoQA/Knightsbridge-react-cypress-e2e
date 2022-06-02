import LoginPage from "../pageObjects/loginPage";


describe('User login tests', () => {

    const loginPage = new LoginPage();

    it('UI Test 1.1 - User visit Home page and login with valid credentials', () => {
        loginPage.getLoginPage();
        loginPage.doLogin();

        // l.AcceptCookies().click()
        // cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
        // cy.title().should('include', 'JavaScript')     //Verify Page Title with partial text
        // l.howitworkspagelink().click()
        // cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
        // cy.title().should('include', 'End to End')     //Verify Page Title with partial text
    })

    // it('UI Test 1.2 - User visit "Pricing" page and check for the price of cypress.io and click on Team and Business', () => {
    //     l.homepage()
    //     l.pricingpagelink().click()
    //     l.AcceptCookies().click()
    //     cy.title().should('eq', 'Pricing For Cypress Testing Framework | cypress.io testing tools')  //Verify Page Title with exact & full text
    //     cy.title().should('include', 'Pricing')     //Verify Page Title with partial text
    //     const p = new pricingPageLinks()
    //     p.teamtab().click()
    //     p.businesstab().click()
    // })
})
