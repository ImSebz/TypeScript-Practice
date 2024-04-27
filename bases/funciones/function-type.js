"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    //? let myFunction: (y: string) => string;
    //! let myFunction: () => void;
    //myFunction = 10;
    //console.log(myFunction);
    //Asignar una función más no ejecutarla
    myFunction = addNumbers;
    console.log(myFunction(2, 1));
    //No se ejecuta, se manda la referencia
    //? myFunction = greet;
    //? console.log(myFunction('Sebastian'));
    //! myFunction = saveTheWorld;
    //! console.log(myFunction());
})();
