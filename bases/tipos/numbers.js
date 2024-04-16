"use strict";
(() => {
    let avengers = 5;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('We are fucked');
    }
    else {
        console.log(':)');
    }
    avengers = Number('55');
    console.log({ avengers });
})();
