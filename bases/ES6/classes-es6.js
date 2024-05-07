(() => {

    class Avenger {

        name;
        power;

        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power, flying = true) {
            super(name, power);
            this.flying = flying;
        }
    }



    const hulk = new Avenger('Hulk', 'Super fuerza');
    const spiderman = new Avenger('Spiderman', 'Sentido arácnido');
    const falcon = new FlyingAvenger('Falcon', 'Volar', true);

    console.log(hulk);
    console.log(spiderman);
    console.log(falcon);
    

})()