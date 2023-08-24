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

// Create the generatePassword function called in writePassword
function generatePassword() {
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

  // Assign array of boolean responses to var bools
  var bools = charTypes();

  // Assign bools array values to corresponding preferences keys
  preferences.isUpper = bools[0];
  preferences.isLower = bools[1];
  preferences.isNum = bools[2];
  preferences.isSpecial = bools[3];

  console.log(preferences.isUpper);
  console.log(preferences.isLower);
  console.log(preferences.isNum);
  console.log(preferences.isSpecial);

  // Create function that uses preferences object to create password
  function pushArray() {
    // Create variable to push other arrays into if true
    charArray = [];

    if (preferences.isUpper) {
      charArray.push(uppercase);
    }

    if (preferences.isLower) {
      charArray.push(lowercase);
    }

    if (preferences.isNum) {
      charArray.push(numbers);
    }

    if (preferences.isSpecial) {
      charArray.push(symbols);
    }
    return charArray;
  }

  // Need to make a function that gives me at least one char from each sub-array in charArray
  function newPass() {
    
  }


  // for (var i = 0; i < preferences.characters; i++) {
  //   var rU = 0;
  //   var rL = 0;
  //   var rN = 0;
  //   var rS = 0;

  //   // For each true charType select at least one position in the password array
  //   while (preferences.isUpper && rU < 1) {
  //     var rU = Math.floor(Math.random() * uppercase.length);
  //     rU++;
  //     console.log(rU, uppercase[rU]);
  //   }

  //   while (preferences.isLower && rL < 1) {
  //     var rL = Math.floor(Math.random() * lowercase.length);
  //     rL++;
  //     console.log(rL, lowercase[rL]);
  //   }

  //   while (preferences.isNum && rN < 1) {
  //     var rN = Math.floor(Math.random() * numbers.length);
  //     rN++;
  //     console.log(rN, numbers[rN]);
  //   }

  //   while (preferences.isSpecial && rS < 1) {
  //     var rS = Math.floor(Math.random() * symbols.length);
  //     rS++;
  //     console.log(rS, symbols[rS]);
  //   }
  //   // Need to get these to return their values, this isn't right
  //   return [rU.value, rL.value, rN.value, rS.value];
  // }
  // // Try to come up with a better method for this^^^^^
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
