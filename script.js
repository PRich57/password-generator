// Declare variables

// Declare password length

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

var passLength;

// Create the generatePassword function called in writePassword
function generatePassword() {
  
  // Create function to prompt user for password length
  function userLength() {
    var x = prompt(
      "How many characters should I include in your password? Must be a number from 8 to 128."
    );

    // Assign value of x to passLength to maintain x's value else if alert
    var m = x;

    // Cast passLength as number if possible
    Number(m);
    
    // Check for proper usage
    if (m < 8 || m > 128) {
      alert("You must choose a number in the range of 8 to 128. Try again.");
      userLength();
    } else if (isNaN(m)) {
      alert(
        x + " is not a number. You must enter a number in the range of 8 to 128"
      );
      userLength();
    } else {
      return m;
    }
  };

  // Assign accepted userLength value to passLength
  var passLength = userLength();

  // Prompt user for character types
  
  
  // Declare object to store user preferences
  var preferences = {
    // Number of characters
    characters: passLength,
    // Boolean for upper, lower, num, special
    isUpper: true,
    // isLower: lower,
    // isNum: num,
    // isSpecial: special,
  };
  console.log(preferences.characters);
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
