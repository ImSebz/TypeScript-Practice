"use strict";
(() => {
    //Las funciones void no retornan nada pero si ejecutan un proceso
    let counter = 0;
    function callSuperman() {
        counter++;
        return;
    }
    ;
    const callBatman = () => {
        return;
    };
    const a = callSuperman();
    callSuperman();
    callSuperman();
    console.log(a);
    console.log(counter);
    const b = callBatman();
    console.log(b);
})();
