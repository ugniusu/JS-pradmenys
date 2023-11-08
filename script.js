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
// const tekstas = "Mano vardas Jonas is pavarde Jonaitis ir as gyvenu Kaune";
// console.log(tekstas.endsWith("Kaune"));

// console.log(tekstas.endsWith("vardas", 11));

////////////////////////////////// Nelabai suprantu
// const skaiciai = [2, 9, 9];
// console.log(skaiciai.indexOf(2));
// console.log(skaiciai.indexOf(7));
// console.log(skaiciai.indexOf(9, 2));
// console.log(skaiciai.indexOf(2, -1));
// console.log(skaiciai.indexOf(2, -3));

/////////////////////////////////// Nelabai suprantu
// console.log("ugnius uscilas".lastIndexOf("u")); // returns 7
// console.log("ugnius uscilas".lastIndexOf("n", 2)); // returns 2
// console.log("ugnius uscilas".lastIndexOf("g", 2)); // returns 1
// console.log("ugnius uscilas".lastIndexOf("x")); // returns -1
// console.log("ugnius uscilas".lastIndexOf("c", 3)); // returns -1
// console.log("ugnius uscilas".lastIndexOf("c", 0)); // returns -1
// console.log("ugnius uscilas".lastIndexOf("")); // returns 14
// console.log("ugnius uscilas".lastIndexOf("", 2)); // returns 2

/////////////////////////////////////////////
// const listA = [1, 2, 3, 4];
// const listB = new Array(6);

// console.log(listA.length);
// console.log(listB.length);

// const listC = new Array(5);
// console.log(listC.length);

// const arr = [1, 2, 5, 9];
// console.log(arr);
// arr.length = 7;
// console.log(arr);
// arr.forEach((element) => console.log(element));

/////////////////////////////////
// const text = "Mano vardas Ugnius ir man yra 70 metu, nors gimiau 1940";
// const numbers = text.match(/\d+/);
// console.log(numbers);

// const allNumbers = text.match(/\d+/g);
// console.log(allNumbers);

///////////////////////////////////////

// const str = "For more information, see Chapter 3.4.5.1";
// const re = /see (chapter \d+(\.\d)*)/i;
// const found = str.match(re);

// console.log(found);

// const str = "Mano vardas yra Ugnius ir as gyvenu Lietuvoje, mokausi kitm";
// const regexp = /[c-f]/gi;
// const matches = str.match(regexp);

// console.log(matches);

// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const capturingRegex = /(?<animal>fox|cat) jumps over/;
// const found = paragraph.match(capturingRegex);
// console.log(found.groups); // {animal: "fox"}

///////////////////////////////////
// console.log("ugnius".repeat(3));

//////////////////////////////////
// console.log("ugnius".replace(/(u)/g, "a"));
// console.log("ugnius".replace("u", "a"));

// const str = "Sveikas Pauliau";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re));
// console.log(str.search(reDot));

///////////////////////////////////////////
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(fruits);
// console.log(citrus);

// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// myHonda.color = "purple";
// console.log("The new color of my Honda is", myHonda.color);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

//////////////////////////////////////////////
// const vardai = "Ugnius, Jonas, Paulius - visi jie yra programuotojai";
// const words = vardai.split(" ");
// console.log(words);

// const names = "Ugnius, Jonas, Paulius - visi jie yra programuotojai";
// const zodziai = names.split(",");
// console.log(zodziai);

// const sentence = "Ugnius, Jonas, Paulius - visi jie yra programuotojai.";
// const parts = sentence.split(/[\s\-,\.,]/);
// console.log(parts);

//////////////////////////////////////////////
// const text = "Petras Petraitis ne visada mego zaisti futbola";
// console.log(text.startsWith("Petras Petraitis"));
// console.log(text.startsWith("Petraitis ne visada"));
// console.log(text.startsWith("ne visada", 17));

///////////////////////////////////////////
// const tekstas = "Lietuvele";
// console.log(tekstas.substring(0, 1));
// console.log(tekstas.substring(1, 0));
// console.log(tekstas.substring(2, 4));
// console.log(tekstas.substring(0, 6));
// console.log(tekstas.substring(6));
// console.log(tekstas.substring(6, 3));
