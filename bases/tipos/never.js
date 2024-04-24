"use strict";
(() => {
    //una funcion con never lo más probable es que sea una funcion que nunca termina o que termina en un error
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Que mierdas estoy haciendo xd');
    console.log('Esto nunca se va a ejecutar');
})();
