"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    class Villian extends Mutante {
        destruirMundo() {
            return 'Mundo destruido!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Erik Magnus');
    const printName = (character) => {
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) - ${this.realName}`;
        }
    }
    Avenger.avgAge = 33;
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} | ${this.realName}`;
        }
        set fullName(realName) {
            if (realName.length <= 3) {
                throw new Error('Real name is too short');
            }
            this.realName = realName;
        }
        getFullNameFromXmen() {
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Sebastián';
})();
(() => {
})();
//# sourceMappingURL=main.js.map