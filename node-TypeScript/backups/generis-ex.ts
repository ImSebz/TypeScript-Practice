import { printObject, genericFunction, genericArrowFunction } from "../src/generics/generics";

// printObject(123);
// printObject("Hello");
// printObject({ key: "value" });
// printObject([1, 2, 3]);
// printObject(true);
// printObject(null);
// printObject(undefined);

const name = 'Sebastián';


console.log(genericFunction(12.2334234).toFixed(2));
// console.log(genericFunction("Hello, World!").toFixed(2);
console.log(genericFunction(name).toUpperCase());


console.log(genericArrowFunction(12.2334234).toFixed(2));
// console.log(genericArrowFunction("Hello, World!").toFixed(2);
console.log(genericArrowFunction(name).toUpperCase());
