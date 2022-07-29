import 'cypress-file-upload';

export class WalletPage {

    // wallet page elements
    walletButton = "//a[normalize-space()='Wallet']";
    depositButton = "//a[normalize-space()='Deposit']";
    withdrawButton = "(//a[normalize-space()='Deposit']/following-sibling::button)[1]";
    depositFiatHeader = "//h2[normalize-space()='Deposit fiat']";
    withdrawUSDTHeader = "//*[contains(text(),'Withdraw USDT')]";
    transferButton = "//button[contains(text(), \"Transfer\")]"
    buyWithFiatButton = "//a[normalize-space()='Buy with Fiat']";
    sellWithFiat = "//a[normalize-space()='Sell for Fiat']";
    currencyHeader = "//div[contains(text(),'Select currency and payment method')]";
    withdrawBtnOnModal = "//button[@class='button Withdraw_button__rSwAw']";
    successWithdrawModal = "//a[contains(text(), 'Wallet')][1]";
    depositSubmitButton = "//button[normalize-space()='Submit']";
    importantNotes = "//div[contains(text(), \"Important notes\")]"
    paymentDetails = "//div[contains(text(), \"Payment details\")]"

    // wallet page methods
    checkDepositFunctionality = () => {
        cy.xpath(this.depositButton).click();
        cy.xpath(this.depositFiatHeader).should('be.visible');
        cy.xpath(this.currencyHeader).should('be.visible');
        cy.xpath(this.depositSubmitButton).should('be.visible').click();
        cy.xpath(this.importantNotes).should('be.visible');


        return this;
    }

    checkWithdrawFunctionality = () => {
        cy.xpath(this.withdrawButton).click();
        cy.xpath(this.withdrawUSDTHeader).should('be.visible');
        cy.xpath(this.withdrawBtnOnModal).should('be.visible').click();
        cy.xpath(this.successWithdrawModal).should('be.visible');
        return this;
    }

    deposit = () => {
        cy.contains("a", "Deposit").click();
        cy.wait(1000);
        cy.xpath("//button[normalize-space()='Submit']").click({force: true});
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.xpath('//div[@class=\'PaymentDetails_title__b0JjD\']').should('be.visible');
        cy.xpath('//input[@type=\'file\']').attachFile('images/1.jpeg')
        cy.xpath("//button[normalize-space()='Confirm deposit request']").click();
        cy.contains("Yay!").should('be.visible');
        return this;
    }

    checkBuySellPage = () => {
        cy.visit('https://qa.knights.app/wallet/general')
        cy.contains("a", "Buy and Sell").click();
        cy.xpath('//h4[normalize-space()=\'Select pair\']').should('be.visible');
        cy.xpath('//span[normalize-space()=\'TRX/USDT\']').click();
        cy.xpath('//button[normalize-space()=\'Select\']').click();
        cy.wait(2000);
        cy.url().should('include', '/buy-sell');
        return this;
    }


}
