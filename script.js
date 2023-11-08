"use strict";

// console.log("hello !");

// var name = "Ugnius";
// var name = "Genadijus";
// console.log(name);

// let vardas = "Augustas";
// vardas = "Paulius";
// console.log(vardas);

// const lastName = "Petrauskas";
// console.log(lastName);

// console.log(typeof vardas);

// let pavarde;
// pavarde = "Stringas";
// console.log(pavarde);

// console.log(vardas + " was dude " + pavarde);

// const age = 25;
// const price = 58.99;
// console.log(age);
// console.log(7 / 2);

// console.log(
//   `Viena karta gyveno ${vardas}, kurio pavarde buvo ${pavarde} ir jis buvo gimes ${kitasAmzius}`
// );

const ugniusAmzius = 1997;
const kitasAmzius = 2014;
const isYounger = true;

if (ugniusAmzius < kitasAmzius) {
  console.log(isYounger);
} else {
  console.log("Tu malagis");
}

const vardenis = "ugnius uscilas";
const index = 8;
console.log(`The character at index ${index} is ${vardenis.charAt(index)}`);

////////////////////////////////
const daug1 = ["a", "b", "c"];
const daug2 = ["belekoks", "belekaip", "belekur"];
const daug3 = daug2.concat(daug1);

console.log(daug3);

//////////////////////////////
const tekstas = "Mano vardas Jonas is pavarde Jonaitis ir as gyvenu Kaune";
console.log(tekstas.endsWith("Kaune"));

console.log(tekstas.endsWith("Kaune", 51));
