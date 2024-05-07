(() => {


    type Avenger = {
        name: string,
        weapon: string,
        power: string
    }

    const ironman: Avenger = { 
        name: 'Ironman', 
        weapon: 'Armored Suit', 
        power: 'Rich' 
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir',
        power: 'God'
    }

    const hulk: Avenger = {
        name: 'Hulk',
        weapon: 'Strength',
        power: 'Strong'
    }

    const avengers: Avenger[] = [ ironman, thor, hulk];

    for (const avenger of avengers) {
        // console.log ('For of', avenger);
    }

    // for ( let i = 0; i < avengers.length; i++ ) {
    //     console.log('For convencional' ,avengers[i]);
    // }

})();