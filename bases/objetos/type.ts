(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 33,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };


})();