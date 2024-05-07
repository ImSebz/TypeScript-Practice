"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nickFury: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
    };
    printAvenger(avengers);
    const avengerArr = ['Capitan America', 'Thor', 'Hulk'];
    const [, thor, hulk] = avengerArr;
    const avengerData = ['Spider Man', 1500, true];
    const [spiderman, poder, estado] = avengerData;
})();
const numero = 10;
if (numero > 0) {
    const numero = 20;
}
let frutas = ['Pera', 'Manzana'];
let [pera, manzana] = frutas;
let funcion = () => { };
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armored Suit',
        power: 'Rich'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
        power: 'God'
    };
    const hulk = {
        name: 'Hulk',
        weapon: 'Strength',
        power: 'Strong'
    };
    const avengers = [ironman, thor, hulk];
    for (const avenger of avengers) {
    }
})();
(() => {
    const nombre = 'Sebastian';
    const getName = () => {
    };
})();
//# sourceMappingURL=main.js.map