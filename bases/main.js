"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 33,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Sebastian',
        age: 25,
        adress: {
            id: 125,
            zip: '10001',
            city: 'New York'
        },
        getFullAdress(id) {
            return `${this.adress.zip}, ${this.adress.city}`;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        adress: {
            id: 126,
            zip: '10002',
            city: 'New York'
        },
        getFullAdress(id) {
            return `${this.adress.zip}, ${this.adress.city}`;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunction(10, 28));
})();
//# sourceMappingURL=main.js.map