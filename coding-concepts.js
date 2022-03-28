// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: This will display the number 10 because that is the length of the string (space included). The .length returns a "count" and not an index.
// b) Verify and explain: The number '10' was displayed as the ouput. The length property returns the length of a string (w3schools).


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: This will display the part of the string at the position of index 4, thus the letter "o".
// b) Verify and explain: The letter "o" is displayed because the '4' inside of the [] indicates that the program needs to call the 4th index of the string assigned to the variable 'greeting'.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: This should display the word "JavaScript". Info listed in an array are identified as elements and are counted beginning with the number 1. 
// b) Verify and explain: Elements in an array are actually counted via indexing, thus the output is "Ruby" which is the string value at the index position 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: The output will be SATURDAY SUNDAY (no quotes, no comma). The .toUpperCase() turns whatever string is passed to it into all capital letters. In this case the strings found in the array weekendDays are being passed to the .toUpperCase().
// b) Verify and explain: An error returned. According to research the .toUpperCase() explicitly works on strings only. Therefore using it as an extension on calling the array is invalid.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I have no idea what this will log.
// b) Verify and explain: The 'typeof' operator returns the data type of the variable it is assigned. The result of dataTypes.length would be the number of elements in the array (3). The data type of 3 is a number.
