(() => {

    let avengers: number = 5;

    console.log(avengers);

    const villans: number = 20;

    if (avengers < villans) {
        console.log('We are fucked');
    } else {
        console.log(':)');
    }

    avengers = Number('55');

    console.log({avengers})

})();