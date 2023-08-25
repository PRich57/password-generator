// Declare variables

// Declare object to store user preferences
var preferences = {
  characters: 0,
  isUpper: false,
  isLower: false,
  isNum: false,
  isSpecial: false,
  confirmed: false,
};

// Declare randPassword variable
var randPassword = "";

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
  // Prompt user for password length
  var x = prompt(
    "How many characters should I include in your password? Must be a number from 8 to 128."
  );

  // Check for proper usage
  if (x < 8 || x > 128) {
    alert("You must choose a number in the range of 8 to 128. Try again.");
    return generatePassword();
  } else if (isNaN(x)) {
    alert(
      x + " is not a number. You must enter a number in the range of 8 to 128"
    );
    return generatePassword();
  } else {
    Number(x);
    preferences.characters = x;
  }

  // Confirm use of uppercase
  preferences.isUpper = confirm(
    "Click OK if you would like to include uppercase letters in your password."
  );

  // Confirm use of lowercase
  preferences.isLower = confirm(
    "Click OK if you would like to include lowercase letters in your password."
  );

  // Confirm use of numbers
  preferences.isNum = confirm(
    "Click OK if you would like to include numbers in your password."
  );

  // Confirm use of special characters
  preferences.isSpecial = confirm(
    "Click OK if you would like to include special characters in your password."
  );

  // Check for correct usage
  if (
    !preferences.isUpper &&
    !preferences.isLower &&
    !preferences.isNum &&
    !preferences.isSpecial
  ) {
    alert(
      "You must choose at least one type of character to include in your password. Try again."
    );
    return generatePassword();
  }

  // Validate responses
  preferences.confirmed = confirm(
    "You have selected: \n\t" +
      preferences.characters +
      " characters. \n" +
      "\tInclude Uppercase:  " +
      preferences.isUpper +
      " \n\tInclude Lowercase:  " +
      preferences.isLower +
      " \n\tInclude Numbers:  " +
      preferences.isNum +
      " \n\tInclude Special Characters:  " +
      preferences.isSpecial +
      " \nAre you satisfied with these selections?"
  );
  if (!preferences.confirmed) {
    alert("Let's try again");
    return generatePassword();
  }

  // Create function that uses preferences object to create password
  function pushArray() {
    // Declare result variable inside the function so it resets anytime the function is called again
    var result = "";

    // Declare empty array variable to push other arrays into if true
    charArray = [];

    // If isUpper is true then push uppercase letters to the charArray
    if (preferences.isUpper) {
      charArray.push(uppercase);
      // Create another variable to store the result of math because it will output and index not the value at that index
      var upper1 = Math.floor(Math.random() * uppercase.length);
      // Update the current value of result to the value at the random index in the uppercase array
      result += uppercase[upper1];
    }

    // If isLower is true repeat the process above
    if (preferences.isLower) {
      charArray.push(lowercase);
      // This is done for each true preference so we know there is a guarantee of at least one char for each selected char type
      var lower1 = Math.floor(Math.random() * lowercase.length);
      result += lowercase[lower1];
    }

    // If true repeat the process above
    if (preferences.isNum) {
      charArray.push(numbers);
      var num1 = Math.floor(Math.random() * numbers.length);
      result += numbers[num1];
    }

    // If true repeat the process above
    if (preferences.isSpecial) {
      charArray.push(symbols);
      var symbol1 = Math.floor(Math.random() * symbols.length);
      result += symbols[symbol1];
    }

    // Create remainder variable to hold the length of result because it'll be needed in the for loop and we don't want to increment a value that we're using as a condition
    var remainder = result.length;

    // Create a variable to store the flattened array of all char types requested in password
    var arrayCombine = charArray.flat(1);

    // For each remaining available index in the new password add a random character from the list of all relevant char types
    for (var i = 0; i < preferences.characters - remainder; i++) {
      // Store the index value for each randomization
      var arrayIndex = Math.floor(Math.random() * arrayCombine.length);
      // Get the value at the index above
      result += arrayCombine[arrayIndex];
    }
    // Return result
    return result;
  }
  // Assign the returned value from the pushArray function to resultPassword
  randPassword = pushArray();

  return randPassword;
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
