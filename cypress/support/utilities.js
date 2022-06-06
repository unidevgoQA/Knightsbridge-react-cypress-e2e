
export class Utilities {
    static readCounter() {
        return cy.readFile("cypress/fixtures/counter.txt").then(number => {
            return parseInt(number);
        });
    }

    static writeCounter() {
            return cy.writeFile('cypress/fixtures/counter.txt', this.readCounter() + 1);
        }
}

