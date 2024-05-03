"use strict";
(() => {
    let myCustomVariable = 'Sebastián';
    console.log(typeof myCustomVariable);
    myCustomVariable = 28;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Sebastián',
        age: 25,
        powers: ['Programar', 'Musica']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
