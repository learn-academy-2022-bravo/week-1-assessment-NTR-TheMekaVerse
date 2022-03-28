// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Create a function that captures two inputs and return one output
// Inputs should be string data types declared to individual variables 
// The function captures input through two parameters
// A conditional statement (if-else) is used to compare the 2 inputs
    // The comparison is for the number of characters or length, the .length built-in function is used
// Whichever string input is the longest, return the string itself
// STRETCH (My brain was being extra!)
    // If the strings are the same length return a string telling the user such.
    // If the inputs are a format other than string data then return a string telling the user to try again.

const longerString = (string1, string2) => {
    if (string1.length > string2.length){
        return string1
    } else if (string2.length > string1.length){
        return string2
    } else if (string1.length === string2.length){
        return `${string1} and ${string2} have the same number of characters.`
    } else {
        return "Unable to process your entry. Try again by entering a string data type."
    }
}

console.log(longerString(fruit1, fruit2))
// Output: "banana"
console.log(longerString(fruit3, fruit4))
// Output: "cherry"
console.log(longerString(fruit2, fruit3))
// Output: "banana and cherry have the same number of characters.""
console.log(longerString(2, fruit3))
// Output: "Unable to process your entry. Try again by entering a string data type.""





// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Create a function that compares a single input to the number 212 (boiling point of water)
// The input should be an integer asigned to a variable
// The variable is passed to the function through a single parameter
// A conditional statement (if-else) is used to check the input against the number 212
// If the input is less than 212, greater than 212, or equal to 212, return a string accordingly, while including the integer input. (See layout below).
    // (input) is below boiling point
    // (input) is above boiling point
    // (input) is at boiling point

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (temp) => {
    if (temp < 212){
        return `${temp} is below boiling point`
    } else if (temp > 212){
        return `${temp} is above boiling point`
    } else if (temp === 212){
        return `${temp} is at boiling point`
    }
}

console.log(boilingPoint(temp1))
// Output: "42 is below boiling point"

console.log(boilingPoint(temp2))
// Output: "350 is above boiling point"

console.log(boilingPoint(temp3))
// Output: "212 is at boiling point"




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10


// The variables established below need to first be combined into a single array
    // Joining arrays without changing either can be done via .concat()
// The single array method should be assigned to another variable using let or const
// To display the length and not index of the new array the .length function should be used
    // Display the length of the array via console.log and {single array name}.length



const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let combine = myNumbers1.concat(myNumbers2)
console.log(combine.length)
// Output: 10






// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// The .reverse() function should be used but its only viable on an array (that I know of)
// Change the string into an array using .split(""); this will ensure each letter is read individually
// Now invoke the .reverse()
// Change the array of reversed letters back into a string using .join("")

const currentCohort = "Bravo 2022"

// Original code before testing out turning all commands into a single line
    //let cohortSlice = currentCohort.split("")
    //let cohortReverse = cohortSlice.reverse
    //console.log(cohortReverse.join(""))

console.log(currentCohort.split("").reverse().join(""))
// Output: 2202 ovarB




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// The simplest way to process the entire array would be using a 'for' loop
// The index will begin at 0 (i = 0) and will increment by 1 (i++) until the entire array is processed ( i < myArray.length)
// Determining even numbers is done using modulo 2 equals 0
    // a number divided by 2 with 0 remainder is even
    // a number divided by 2 WITH a remainder is odd
// Process the array by each index using myArray[i] in a conditional if-else statement
// If the number being analyzed has 0 remainder, display "even"
// Any number that does not meet the initial conditional will be passed along to the catch-all 'else' statement
    // Anything passed to the 'else' statement is presumed odd and will therefore display the output "odd"

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}

// Output: odd even odd even odd even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Create a function 'subtract'
// Using the assigned variables determine which of the two numbers is larger
    // To best allow for changes to the variables being used establish parameters for the function that are non-specific to the existing variables
    // This will ensure changes won't have to be made to the function itself in order to process info being passed to it
    // There will need to be two parameters in order for the function to compare variables
// Using an if-else if statement compare one parameter to another using > and <
    // parameter 1 > parameter 2
    // parameter 1 < parameter 2
// If the first comparison is TRUE, then return the total of parameter 2 - parameter 1
// If the second comparison is TRUE, then return the total of parameter 1 - parameter 2
// Use console.log to display and call the subtract function, having passed two inputs into it
    // console.log(function(input1, input2))



// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtract = (input1, input2) => {
    if (input1 < input2){
        return input2 - input1
    } else if (input2 < input1){
        return input1 - input2
    }
}

console.log(subtract(number1, number2))
// Output: 42
console.log(subtract(number3, number4))
// Output: 3

// This could have been done using an if-else, rather than if-else if, but that wasn't my first thought.