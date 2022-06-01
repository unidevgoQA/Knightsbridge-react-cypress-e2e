class homePageLinks {

   homepage() {
      return cy.visit('https://qa.knights.app/')
   }
   howitworkspagelink() {
      return cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > .styled__NavList-sc-16oj5lj-3:nth-child(1) > .styled__NavItem-sc-16oj5lj-4:nth-child(2) > .Link-sc-5cc5in-0')
   }
   pricingpagelink() {
      return cy.get('.styled__NavList-sc-16oj5lj-3:nth-child(1) > .styled__NavItem-sc-16oj5lj-4:nth-child(4) > .Link-sc-5cc5in-0')
   }
   AcceptCookies() {
      return cy.get('button[id="onetrust-accept-btn-handler"]')
   }

}

export default homePageLinks
