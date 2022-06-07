
export class Utilities {
    static readCounter() {
        return cy.readFile("cypress/fixtures/counter.txt").then(number => {
            return number;
        });
    }

    static writeCounter() {
            return cy.writeFile('cypress/fixtures/counter.txt', this.readCounter() + 1);
        }

    static getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    static getRandomString() {
        return Math.random().toString(36).substring(7);
    }

    static getRandomFirstName() {
        return Math.random().toString(36).substring(7);
    }

    static getRandomLastName() {
        return Math.random().toString(36).substring(7);
    }

    static getRandomEmail() {
        return Math.random().toString(36).substring(7) + '@gmail.com';
    }
    
}

