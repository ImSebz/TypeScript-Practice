(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 33,
        powers: ['Super fuerza'],
    };


    flash.age = 55;


    flash = {
        name: 'Clark Kent',
        // age: 33,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };


    if (flash.getName)
    console.log(flash.getName());




})();