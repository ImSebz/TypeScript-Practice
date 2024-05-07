(() => {
    class Avenger {
        static avgAge: number = 33;
        static getAvgAge() {
            return this.name;
        }

        constructor(
            public name: string,
            public team: string,
            private realName?: string,
        ) { }


        public bio() {
            return `${this.name} (${this.team}) - ${this.realName}`;

        }
    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);

    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());

})();