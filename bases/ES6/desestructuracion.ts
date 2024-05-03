(() => {

    type Avenger = {
        nickFury: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avenger = {
        nickFury: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    }

    // const { poder, activo, ironman } = avengers;

    // console.log(poder.toString(), activo, ironman);

    const printAvenger = ({ ironman, ...resto }: Avenger): void => {
        // console.log(ironman, resto);
    }

    printAvenger(avengers);

    const avengerArr = ['Capitan America', 'Thor', 'Hulk'];

    const [, thor, hulk] = avengerArr;
    console.log({ thor, hulk });

    const avengerData: [string, number, boolean] = ['Spider Man', 1500, true];

    const [spiderman, poder, estado] = avengerData;

    console.log({ spiderman, poder, estado });

})();   