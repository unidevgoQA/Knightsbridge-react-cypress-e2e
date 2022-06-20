const axios = require('axios');
import "cypress-localstorage-commands";


export const setToken = () => {
   axios.post('https://dev.api.nami.gg/auth/sign',
        {
            "publicAddress": "0xfc9247de9626f4aad438977fcd0be6d524a00bd9"
        }
    ).then(r => {
       cy.setLocalStorage("accessToken", r.data.data.accessToken)
    }).catch(e => {
        console.log(e);
    });
}

export const setCustomLocalStorage = (key, value) => {
    cy.setLocalStorage(key, value);
}

export const clearLocalStorage = () => {
    cy.clearLocalStorage();
}

export const clearLocalStorageItem = (key) => {
    cy.clearLocalStorage(key);
}

export const getEmailFromInbox = (email, password, apiKey) => {
    return axios.get(`https://api.shampad.live/api/email/?mail=${email}&password=${password}&api-key=${apiKey}`,
    ).then(r => {
        return r.data.body;
    });
}

export const getOTPFromEmail = (email, password, apiKey, regex) => {
    return getEmailFromInbox(email, password, apiKey).then(body => {
            let matches = body.match(regex);
            return matches[1];
    }
    );
}
