(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor Avengers iniciado');
        }

        //Public - Private - Protected
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            console.log('Constructor Xmen iniciado');
        }


        get fullName() {
            return `${this.name} | ${this.realName}`;
        }

        set fullName( realName:string ) {

            if( realName.length <= 3 ) {
                throw new Error('Real name is too short');
            }

            this.realName = realName;
        }

        getFullNameFromXmen() {
            console.log( super.getFullName() );
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine.fullName);


    wolverine.fullName = 'Sebastián'

    console.log(wolverine.fullName);
    // wolverine.getFullNameFromXmen();

})();