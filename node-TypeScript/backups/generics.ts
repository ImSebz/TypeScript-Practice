import { genericArrowFunction } from "../src/generics/generics";
import { Hero, Villian } from "../src/interfaces";







const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 150,
}

console.log(genericArrowFunction<Hero>(deadpool).name);
console.log(genericArrowFunction<Hero>(deadpool).realName);
console.log(genericArrowFunction<Villian>(deadpool).dangerLevel);



