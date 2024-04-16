(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Green Lantern";
    const superMan: string = `Héroe: Superman`;

    console.log(`I'm ${linternaVerde}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No tiene un valor');

    console.log(superMan);

})();