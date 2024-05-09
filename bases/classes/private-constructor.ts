(() => {


    class Apocalipsis {


        static instance: Apocalipsis;

        private constructor(
            public name: string,

        ) { }

        static callApocalipsis(): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis...');
            }

            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis.changeName('Soy Xavier ahora...');

    // const apocalipsis = new Apocalipsis('Soy apocalipsis...');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2...');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3...');

    // console.log(apocalipsis);
    // console.log(apocalipsis2);
    // console.log(apocalipsis3);

})();