"use strict";
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
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map