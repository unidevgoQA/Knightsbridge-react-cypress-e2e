
import LoginPage from "../pageObjects/loginPage";


describe('User login tests', () => {

    const loginPage = new LoginPage();

    it('UI Test 1.1 - User Sign Up', {
        },() => {
            loginPage.getLoginPage()
            loginPage.signUp();
        })

    // it('UI Test 1.2 - User visit Home page and login with valid credentials', {
    //     retries: {
    //         runMode: 3,
    //         openMode: 3
    //     },
    // },() => {
    //     loginPage.getLoginPage()
    //     loginPage.doLogin();
    // })
    //
    // it('UI Test 1.3 - Logout user', {
    // },() => {
    //     loginPage.logOut();
    // })
})
