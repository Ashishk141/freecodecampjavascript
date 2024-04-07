"use strict";

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

function fun1() {}

function fun2() {
  var output = "";
}
