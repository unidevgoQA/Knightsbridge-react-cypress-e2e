import {getEmailFromInbox, getOTPFromEmail} from "../fixtures/helpers";

describe('User login tests', () => {

    it('UI Test 1.1 - User Sign Up', () => {
        getOTPFromEmail("ss.unidev@gmail.com", "ahaobqwwwoyotshm", "shampad", "Your verification code:\\n(\\d{6})");

    });
}
);
