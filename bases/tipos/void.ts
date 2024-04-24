(() => {

    //Las funciones void no retornan nada pero si ejecutan un proceso
    
    let counter: number = 0;

    function callSuperman(): void {
        counter++;
        return;
    };

    const callBatman = (): void => {
        return;
    }
    const a = callSuperman();
    callSuperman();
    callSuperman();
    console.log(a);
    console.log(counter);

    const b = callBatman();
    console.log(b);

})();