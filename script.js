"use strict";
// import { square } from "./string_capital.js";

// console.log()
console.log("Hello from JavaScript!");

// Inline Comments - ---
/** Multiline Comments
 * this is mulitline comments
 */

// varabiles
var number = 5; // inline- comments

// Data types and Varaibles
// 7 differenct datatypes  : undefined, null, bollearn
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
var myName = "Ashish"; // var used through whole program
myName = 8;
let ourName = "freecodecamp";
const pi = 3.14; // varaible can never change it

// Asssining Varaibles

var a;
var b = 2; // = is assiginment operator

a = 7;
b = a;
console.log(b);

console.log(a);

var x = 9;

var c = 5;
var d = 10;
var e = "I am a string";

c = a + 5;
console.log(c + " " + e);

var studlyCapVar;
studlyCapVar = 10;
var properCamelCase = "Proper Camel Case";

var sum = 10 + 10;
console.log(sum);

var sub = 52 - 33;
console.log(sub);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

var myVar = 10;
myVar = myVar + 1;
myVar++;
console.log(myVar);

myVar = myVar - 1;
myVar--;
console.log(myVar);

var ourDecimal = 5.7;

var product = 2.0 * 2.5;
console.log(product);

var quotient = 4.4 / 2.0;
console.log(quotient);

var remainder = 11 % 3;
console.log(remainder);

console.log(a);
a = a + 12;
a += 12;
b = 9 + b;
b += 9;
c = c + 7;
c += 7;

a -= 6;
b -= 15;
c -= 1;

a *= 5;
b *= 3;
c *= 10;
console.log(a, b, c);

a /= 12;
b /= 4;
c /= 11;

// Declares String
// ""
var firstName = "Alan";
var lastName = "Turing";

var myStr = 'I am a double "quoted string" inside double quotes';
console.log(myStr);

var myStr2 = `'<a href = "www.example.com">'`;
console.log(myStr2);

// Escaping Sequence
/******
 * CODE   OUTPUT
 * \'     single quote
 * \"     double quote
 * \\     backslash
 * \n     newline
 * \t     tab
 * \b     backspace
 * \f     form feed
 */

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

// var ourStr = "I come first" + " I come seocond";
ourName = "freecodecamp";
var ourStr = "I come first, ";
ourStr += "My name is " + ourName + " How your you ?";
console.log(ourStr);

var myStr = "This is the first sentence." + "This is the second sentence.";
console.log(myStr);

// Lenth of string
var firstName = "Ada";
var lastName = "Lovelace";
console.log(firstName.length);

var firstletterofName = firstName[0];
var firstleeteroflastName = lastName[0];
console.log(firstletterofName, firstleeteroflastName);

// String Immunitbility
var myStr = "Jello World";

console.log(myStr[0]);
// myStr[0] = "A"; // Error // but it will not give error on language like python
// because strings are immutable in Javscript
myStr = "Aello World"; // to change the string
console.log(myStr);

// Using bracket notation in String
console.log(myStr[6]);

// Finding last letter of string
// console.log(myStr[-1]); // this will not work in Javascript but in Python
console.log(myStr[myStr.length - 1]);

// getting 2nd last letter of the sring
console.log(myStr[myStr.length - 2]);

// World Blanks
// Change the words here to test your function
function worldBlanks(myNoun, myAdjective, myVerb, MyAdverb) {
  // Your code below this line
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    MyAdverb +
    ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
console.log(worldBlanks("dog", "big", "ran", "qucikly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"));

// Array : Storing mulitple values
var ourArray = ["John", 23];

// Only change code below this line
var myArray = ["Quincy", 1];

// Nested Array
var NestedArray = [
  ["the universe", 42],
  ["everything", 101010],
];
var NestedArray2 = [
  ["Bulls", 23],
  ["White Sox", 45],
];

var numArray = [50, 60, 70];
var ourData = numArray[0]; // 50

var setArray = [50, 60, 70];

// first element in array
var myData = setArray[0];
console.log(myData);

// learning javascript now start from later 43 min:35 sec
// Modify Array Data with Indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;

var myArray = [18, 64, 99];
myArray[0] = 45;

console.log(ourArray);
console.log(myArray);

// MultiDimensional Array
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Only change code below this line
var myData = myArray[0][0];
console.log(myData);

console.log(myArray[2][1]);

// Manipulate Arrays with Push ()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push("happy", "joy");
ourArray.push(["John", "cat"]);
ourArray.push(myArray);
console.log(ourArray);

// Remove item from Array
var ourArray = [1, 2, 3];
var removedFromArray = ourArray.pop();

var myArray = [
  ["John", 23],
  ["cat", 2],
];

var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

// Manipulate Arrays with Shift()
var newArray = [
  ["John", 23],
  ["dog", 3],
];

// remove first element in array
var removedFromNewArray = newArray.shift();
console.log(removedFromArray);
console.log(newArray);

// UnShift() - add the element begenning of Array
var mynewArray = [
  ["John", 23],
  ["dog", 3],
];
mynewArray.shift();
console.log(mynewArray);

mynewArray.unshift(["Paul", 35]); // add the element begenning of Array
console.log(mynewArray);

// Shopping Lists - Nested Array
var myLists = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  [" biscuits", 12],
];

// displaying lists from array without using loop
console.log(myLists.flat());
const displayElements = myLists.flat().map((element) => console.log(element));

//  Functions
function ourReusableFunction(a, b) {
  console.log("sum = ", a + b);
  console.log("Heyya, World");
}

ourReusableFunction(12, 13);
ourReusableFunction(15, 16);

const resusable = function (a, b) {
  console.log("Hi World");
  console.log("sub = ", a - b);
};
resusable(20, 10);

function witghArgs(a, b) {
  console.log(a + b);
}
witghArgs(4, 9);

// Global functions Scope
var myGlobal = 10;

function fun1() {
  let oopsGlobal = 5; // this is global keyword, since it donesn't have any var keyword
  var oopsNotGlobal = 10; // it has var keywrod its a local variable
}

function fun2() {
  var output = ""; // var keyword scoped with the function
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }

  // console.log(oopsNotGlobal);//give error becuse its locale to fun1
  console.log(output);
}

fun1();
fun2();

// Local Scope and Functions
// lcoal scope varaible only visible inside the function
function myLocalScope() {
  var myVarLocal = 5;
  console.log(myVarLocal); // inside the function it is visible
}
myLocalScope();
// console.log(myVarLocal); //ERROR: it's trying to excess but got error not able to access local varaible

// Global vs Local Scope in Functions
// when you give global and local variable a same name, then the local varaiable
// takes precendence over the global varaible

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "Sweater"; // local takes precendence over the global varaible

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear); // it still T-shirt here, (because of scope chain, it doesn't find varaible inside)

// Return a value from a Function with Return
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

// undefined value
var sum = 0; // global varaible
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

console.log(sum); // not calling a function
// start from 1:04:56

// return a value from function expression
var process = 0;

function processArg(num) {
  return (num + 3) / 5;
}

const processed = processArg(7);
console.log(processed);

// /////////////////////////////////////////////////
/// Queue Data Structure
// stand in line
// Queue is new item add back in the queue
// [5, 8, 7, 8]
// + 9
// [5, 8, 7, 8, 9]
// lets simulate the functioanlity of queue using nextInline() function

function nextInline(arr, item) {
  // here we will add item on that arr that we passed in
  arr.push(item);

  // and here we return the first item in the list
  return arr.shift(); // we deleted first item from the lists
}

// so if we add item in this array, it will come after like : [1,2,3,4,5,9]
// and then it should return first item in the lists : so in this case is 1

var testArr = [1, 2, 3, 4, 5];

// JSON.stringify will change array into string, that easily get printed
console.log("Before  : " + JSON.stringify(testArr)); // array looks like before add item
console.log(nextInline(testArr, 6));
console.log("After : " + JSON.stringify(testArr)); // array after add item

// /////////////////////////////
// Boolean values : true or false
function welcomeToBooleans() {
  return true;
}

//////////////////////////////////
// COnditinal logic if
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return " Yes it's true";
  }
  return "No, it's false";
}

const ans = trueOrFalse(true);
console.log(ans);

////////////////////////////////////
//  equality operator
function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "NOT Equal";
}
console.log(testEqual(12));

//////// Comparisoon operator
console.log(3 == 3);
console.log(3 === 3);
console.log(3 === "3");

// Different comparision operator
function compareEquality(a, b) {
  if (a == b) {
    // == loose equlity operator does type conversion and convert string into number
    return "Equal (loose equlaity operator)";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

function compareStrictEquality(a, b) {
  if (a === b) {
    // === Strict equlity operator does not type convert string into number
    return "Equal (strict quality does not convert string into number)";
  }
  return "Not Equal";
}

console.log(compareStrictEquality(10, "10"));

// Comparison with the Inquality Operator
function testNotEqual(val) {
  if (val == 99) {
    // loose equality operator converts types into strings
    return " Equal from loose Equality";
  }
  return "Equal";
}
console.log(testNotEqual(10));

// Comparison with "Strict Ineqaulity" Opeator
function testStrictNotEqaul(val) {
  // === Strict equlity operator does not type convert string into number
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqaul(18));

// Comparison with logical && operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}

console.log(testGreaterThan(10));

// Comparision with then or equal to operator
function testGreaterorEqual(val) {
  if (val >= 100) {
    return "20 Over 100";
  }

  if (val >= 10) {
    return "10 Over 10";
  }
  return "10 or Under";
}

console.log(testGreaterorEqual(10));

// Comparion with less than Opeator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 25";
  }

  return "55 or over";
}
console.log(testLessThan(10));

// Comparison with less then or equal to operator
// start from 1:18:56

function testLessorEqual(val) {
  if (val <= 12) {
    return "Smaller than or Eqaul to 12";
  }
  if (val <= 24) {
    return "Samller than or Equal to 24";
  }

  return "More than 24";
}

console.log(testLessorEqual(10));

// Comparisions with the Logical and operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }
  return "No";
}

console.log(testLogicalAnd(18));

// And / Or Opeator
function testLogicalOr(val) {
  if (val < 20 || val > 10) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(5));

// else statement
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

console.log(testElse(4));

// else if statement
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Samller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));

// Logical Order in if/else statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or eqaul to 10";
  }
}

console.log(orderMyLogic(3));

//chaining if statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(16));

// Golf code
var names = [
  "Hole-in-one",
  "Eagle",
  "Bridie",
  "Far",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 8));

// Switch Statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(1));

// Deafault Option in Switch staements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff("5"));

// Multiple Identical Option in Switch Statement
// Muitple input give same output
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}
console.log(sequentialSizes(5));

function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no number 1";
      break;
    case 99:
      answer = "Mssed me by this much!";
      break;

    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "Wrong input";
  }
  return answer;
}

console.log(chainToSwitch("bob"));

// Returning the boolean value from the funtions
// Funciton Declaration
function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));

// Using arrow functions to make our function shorter
// Arrow function
const isLess2 = (a, b) => a < b;
console.log(isLess2(3, 6));

// function Expressions
const isLess3 = function (a, b) {
  return a < b;
};
console.log(isLess3(6, 5));

// Named function
const isLess4 = function checkLess(a, b) {
  return a < b;
};
console.log(isLess4(8, 7));

// IIFEs
(function (parameters) {
  console.log("Hey I am from IIFFE", parameters);
})("John");

// Two functions I have left here is : Generator functions and async functions

// return Statemetn

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2)); // will return undefined

// Counting cards
var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc(3);
cc(7);
cc("K"), cc("A");
console.log(cc(4));

// Objects
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everythings :"],
};

var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 2,
  friends: ourDog.friends,
};

console.log(myDog.friends);
console.log(ourDog.friends);

// Accessing Object properties with Dot notations
var testObj = {
  hat: "ballcap",
  shirt: "jersy",
  shoes: "cleats",
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var ourDog = {
  name: "Cody",
  legs: 4,
  tails: 1,
  friends: ["everything"],
};

// Only change code below this line
var hatValue = testObj.hat; // change this line
var shirtValue = testObj.shirt; // chang ethis line
console.log(hatValue, shirtValue);

// Bracket notations is useful when properties have space
var ebtreevakye = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(ebtreevakye, drinkValue);

// Acessing Object properties with vaaraibles
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

// Updating object properties using dot notatatins
ourDog.name = "happy Comaper";
console.log(ourDog.name);

// Adding new Properties to an Object using . notataions or [] notations
ourDog.bark = "bow-bow";
console.log(ourDog.bark);

myDog.bark = "woff";
console.log(myDog.bark);

// Delete a proeprty from object
delete ourDog.bark;
console.log(ourDog.bark); // undefined

// Using Objects for Lookups
// we can replace switch statements with objects
function phoneticsLookup(val) {
  var result = " ";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Eugene",
    foxtrot: "Fresno",
  };

  result = lookup[val];
  return result;
}

console.log(phoneticsLookup("charlie"));

// Testing Objects for properteis
// hasOwnProperty method

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function CheckObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
}
console.log(CheckObj("hello"));
console.log(CheckObj("gift"));

// Manipulating Complex Objects
var myMusic = [
  {
    artist: "Billy Joel",
    "title ": "Piano Man",
    release_year: 1973,
    formats: ["CO", "8T", "LP"],
    gold: true,
  },

  // Add record here
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    realse_year: 2003,
    formats: ["Yotube video"],
  },
];

// Accessing nested objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//  Record Collection
var collection = {
  2548: {
    album: "Slippery When Wel",
    artist: "Bon Jovi",
    tracks: ["Let it Rock", "You GIve Love a Bad name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// copy the object into JSON
// copying the object before change it..
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  console.log(id, prop, value);

  if (value === "") {
    // prop = "album artists or tracks"
    delete collection.id.prop;
    // or delete collection[id][prop];
  } else if (prop === "tracks") {
    // if collection.id.prop exist and set to it, or if doesnot
    // just create an empty array
    collection.id.prop = collection.id.prop || [];

    // now if we now it exists then push value to the array
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  console.log(collection[id][prop]);

  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));

// Iterate with loops

// while loops
var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Iterate with For loops
for (var i = 0; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);

// Iterate odd numbers with a for loop
var ourArray = [];
for (var i = 1; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

// Count backwards with a for loop
var evenArray = [];

for (var i = 10; i > 0; i -= 2) {
  evenArray.push(i);
}
console.log(evenArray);

var oddArray = [];

for (var i = 9; i > 0; i -= 2) {
  oddArray.push(i);
}
console.log(oddArray);

// Iterate Through an Array with a For loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal);

// Nesting Loops
// Multidimensional array

// Start from 2:22:35
function multiplyAll(arr) {
  var product = 1;
  console.log(arr.length);

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

// Iterate with do while loops

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(i, myArray);

// Profile lookup // coding challenge

var contacts = [
  {
    firstName: "Akira",
    lastName: "Latina",
    number: "8543236543",
    likes: ["Pizza", "Coding", "Brromise Points"],
  },
  {
    firstName: "Marry",
    lastName: "Potter",
    number: "8795412365",
    likes: ["Howgwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlok",
    lastName: "Holmes",
    number: "048765487458",
    likes: ["Iteriguing Cases", "Voilin"],
  },
  {
    firstName: "Kristin",
    lastName: "vas",
    number: "94155265578",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookingProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No Such Properties";
    }
  }
  return "No Such Contacts";
}

var data = lookingProfile("Sherlok", "lastName");
console.log(data);

// Generate Random Fractions
function randomFunction() {
  return Math.random();
}
console.log(randomFunction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// Generate Random whole number within range
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin * 1)) + ourMin;
}
console.log(ourRandomRange(3, 10));

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()) * (myMax - myMin + 1) + myMin;
}
var myRandom = randomRange(5, 8);
console.log(myRandom);

// Use parseInt Function
// takses strings and return integer
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

// Use the parseInt Function wit a Radix
function convertToInteger(str) {
  //base 2
  // there for computer takes it as a binary number
  //and convert to integer
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

// using conditional or ternary operator
// condititon ? statement-if-true : statement-if-false
function checkEqual(a, b) {
  return a === b ? true : false;
  // return a == b  // this gives same output
}
checkEqual(1, 2);

// nesting ternary operateor
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0));

// Difference between var and let keyword
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meaow!";
}
catTalk();

// Compare Scopes of Var and let Keywords
// 2:39:02

// var - global scope (outside the function) (function scope)
// let const -  block scope (inside the function)

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is : ", i);
  }
  console.log("Function Scope i is : ", i);
  return i;
}

checkScope();

// Declare a Read-Only varaible with the const keyword
function printManyTimes(str) {
  "use strict";
  var sentence = str + "is cool!";
  // const sentence = str + "is cool!"; // ERROR : you cannot change const varaible
  sentence = str + " is amazing";

  console.log(sentence);
}
printManyTimes("freecodecamp");

// Mutate an Array Declared with const
const s = [5, 7, 2]; // you can mutate an array
function editInPlace() {
  "use strict";

  // s = [2, 5, 2]; // error : you cannot assign to const varaible

  // instead do this
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

// Prevent Object Mutation - object.freeze()
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS); // frozen MATH_CONSTATNS

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// Use Arrow Functions to Write concise Anonymous Functions
// Anonyouse function
const magic = function () {
  return new Date();
};
console.log(magic());

// convert to Arrow function
const magicArrow = () => {
  return new Date();
};
console.log(magicArrow());

// shorter Arrow function
const magicArrow2 = () => new Date();
console.log(magicArrow2());

// Arrow function with parameters
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// Write Arrow with Higher order functions
// when one function takes another function as argument

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -20];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x ** 2); //
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Higher Order functions
// default pararmeters
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));

// Use Rest Operator with Function Parameters
const sum2 = (function () {
  return function sum(...args) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum2(1, 2, 3, 4));

// Use Spread Operator to Evaulte Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);

// Use Destruturing Assigment to assign varaibles from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x: f, y: g, z: h } = voxel;
console.log(f, x, g, y, h, z);

const AVG_TEMPERATURES = {
  today: 77.5,
  tommorrow: 79,
};

function getTempofTmrw(avgTemperatures) {
  "use  strict";
  const { tommorrow: tempOfTomorow } = avgTemperatures; // destructuring
  return tempOfTomorow;
}
console.log(getTempofTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxofTmrw(forecast) {
  console.log(forecast);
  /*
  let { today, tomorrow } = forecast; // destructuring
  console.log(today);
  console.log(tomorrow);
  let maxOfTomorrow = today.max > tomorrow.max ? today.max : tomorrow.max;
  return maxOfTomorrow;
  */
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;
  return maxOfTomorrow;
}

console.log(getMaxofTmrw(LOCAL_FORECAST));

// Usse Destructuring Assigment to assign variables from arrays
const [z1, x1, , y1] = [1, 2, 3, 4, 5, 6];
console.log(z1, x1, y1);

let a1 = 8,
  b1 = 6;
(() => {
  "use strict";
  [a1, b1] = [b1, a1];
})();
console.log(a1, b1);

// using Destructuring Assigments with Rest Opearotor
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [, , ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assigngment to Pass an object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

// Create Strings using Template Literals
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}, and I am ${person.age} years old.`;
console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-function"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li> `);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.success);
console.log(resultDisplayArray);

// Write Concise object literal Declarations using Simple Fields
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
// Do like this :
const createPerson2 = (name, age, gender) => ({ name, age, gender });
console.log(createPerson2("Zodiac Hasbro", 56, "male")); // it return object

// Write Concise Declarative Functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.grear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

// use class syntax to Define a Constructor function
// older way to create an object
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot);
console.log(Vegetable.name);
// getter - get the value from an object
// and setter - set value to an object
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// understand the difference between import and require

// // import { square } from "./string_capital.js";
// const num = 5;
// const result2 = square(num);
// console.log(result2);

// completed ==================== 3:26:43
