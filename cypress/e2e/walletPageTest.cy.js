Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import LoginPage from "../pageObjects/loginPage";
import {WalletPage} from "../pageObjects/walletPage";


describe('Wallet Page tests', () => {

    const loginPage = new LoginPage();
    const walletPage = new WalletPage();

    // wallet page elements
    const walletButton = "(//a[@href='/wallet/overview'])[2]";
    const depositButton = "//a[@class='button button-small Wallet_button__UnVYI']";
    const withdrawButton = "//a[normalize-space()='Deposit']/following-sibling::button";
    const fiatAndSpot = "//h4[normalize-space()='Fiat and Spot']";
    const fiatAndSpotBalance = "//div[normalize-space()='Fiat and Spot balance']";
    const spotBalance = "//div[normalize-space()='Spot balance']";
    const fiatBalance = "//div[normalize-space()='Fiat balance']";
    const searchCoinInputField = "//input[@placeholder='Search coin']";
    const activityHistoryLink = "//span[normalize-space()='Activity history']";



    it('UI Test 1.1 - Verify that user can see the wallet page', {
        retries: {
            runMode: 3,
            openMode: 3
        },
    },() => {
        cy.clearLocalStorage();
        loginPage.getLoginPage();
        cy.reload();
        loginPage.doLogin();
        cy.xpath(walletButton).click();
        cy.contains("a", "Deposit").should('be.visible');
    });

    it('UI Test 1.2 - Verify elements on the wallet page', () => {
        cy.contains("a", "Deposit").should('be.visible');
        cy.contains("a", "Buy and Sell").should('be.visible');

    });

    // it('UI Test 1.3 - Verify deposit functionality', () => {
    //     walletPage.checkDepositFunctionality();
    // });

    // it('UI Test 1.4 - Verify withdraw functionality', () => {
    //     // browser back
    //     cy.go('back');
    //     walletPage.checkWithdrawFunctionality();
    // });

    it('UI Test 1.5 - Verify Deposit functionality', () => {
        // browser back
        cy.go('back');
        walletPage.deposit();
    });

    it('UI Test 1.6 - Verify Buy sell page visibility', () => {
        walletPage.checkBuySellPage();
    })
});
