const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


// console.log(newString);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept your user input. Query the user to enter the number of letters that will be relocated.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = Numer(input.question("Hoow many leters will be a location?"));

let newString = str.slice(numLetters) + str.slice(0, numLetters);

// console.log(newString);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(numLetters > str.length){
    console.log("Input exceed length of the Word.")
    let defaultString = str.slice(3) + str.slice(0,3);
    console.log()
}