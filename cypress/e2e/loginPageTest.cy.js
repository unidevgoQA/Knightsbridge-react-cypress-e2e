import HomePage from "../pageObjects/loginPage";


describe('User login tests', () => {

    const loginPage = new HomePage();

    it('UI Test 1.1 - User visit Home page and login with valid credentials', () => {
        loginPage.getLoginPage();
        loginPage.doLogin();

    })
})
