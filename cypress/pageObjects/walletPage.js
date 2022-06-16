
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

    // wallet page methods
    checkDepositFunctionality = () => {
        cy.xpath(this.depositButton).click();
        cy.xpath(this.depositFiatHeader).should('be.visible');
        cy.xpath(this.currencyHeader).should('be.visible');
        return this;
    }

    checkWithdrawFunctionality = () => {
        cy.xpath(this.withdrawButton).click();
        cy.xpath(this.withdrawUSDTHeader).should('be.visible');
        return this;
    }


}
