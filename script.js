// Declare variables

// Declare passLength variable
var passLength;

// Declare variable for uppercase letters
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Declare variable for lowercase letters
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Declare variable for numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Declare variable for special characters
var symbols = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~",
];

// Create the generatePassword function called in writePassword
function generatePassword() {
  // Declare object to store user preferences
  var preferences = {
    // Number of characters
    characters: 0,

    // Boolean for upper, lower, num, special
    isUpper: true,
    isLower: true,
    isNum: true,
    isSpecial: true,
  };

  // Create function to prompt user for password length
  function userLength() {
    var x = prompt(
      "How many characters should I include in your password? Must be a number from 8 to 128."
    );

    // Check for proper usage
    if (x < 8 || x > 128) {
      alert("You must choose a number in the range of 8 to 128. Try again.");
      generatePassword();
    } else if (isNaN(x)) {
      alert(
        x + " is not a number. You must enter a number in the range of 8 to 128"
      );
      generatePassword();
    } else {
      Number(x);
      return x;
    }
  }

  // Assign accepted userLength value to passLength
  preferences.characters = userLength();

  // Prompt user for character types
  function charTypes() {
    // Confirm use of uppercase
    var u = confirm(
      "Click OK if you would like to include uppercase letters in your password."
    );

    // Confirm use of lowercase
    var l = confirm(
      "Click OK if you would like to include lowercase letters in your password."
    );

    // Confirm use of numbers
    var n = confirm(
      "Click OK if you would like to include numbers in your password."
    );

    // Confirm use of special characters
    var s = confirm(
      "Click OK if you would like to include special characters in your password."
    );

    // Check for correct usage
    if (u === false && l === false && n === false && s === false) {
      alert(
        "You must choose at least one type of character to include in your password. Try again."
      );
      charTypes();
      return;
    } else {
      return [u, l, n, s];
    }
  }

  var bools = charTypes();

  console.log(bools);

  // console.log(preferences.characters);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
