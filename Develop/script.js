// Assignment Code
var genBtn = document.querySelector("#generate");
var charLength = 0;

// Add event listener to generate button to detect click
generateBtn.addEventListener("click", genPassword);

// Click starts the following generator function
function genPassword() {
  var length = charLength();
  var charString = writePassword();
  var product = "";
  // For loop to generate a random password character by character until the length reaches the user-specified choice of length.
  for (i = 0; i <= length; i++) {
    randomNum = Math.min(Math.floor(Math.random() * 100), charString.length - 1)
    genPass += charString[randomNum];
  }
  displayPassword(genPassword);
}

function charLength() {
  var inputLength = Number(prompt("Choose amount of characters, between 8 - 128."));
  if (inputLength < 8 || inputLength > 128) {
    alert("Error: Must choose number between 8 - 128.")
    charLength();
  }
  return inputLength;
}

// Giving the user the character choices and funneling them into the machine.

function writePassword() {
  var charUpper = "abcdefghijklmnopqrstuvwxyz";
  var charLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charNum = "1234567890";
  var charSym = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

  var charString = "";
  var upperQ = confirm("Uppercase letters?");
  var lowerQ = confirm("Lowercase letters?");
  var numQ = confirm("Numbers?");
  var symQ = confirm("Special characters?");

  if (upperQ === true) {
    charString += charUpper;
  }
  if (lowerQ === true) {
    charString += charLower;
  }
  if (numQ === true) {
    charString += charNum;
  }
  if (symQ === true) {
    charString += charSym;
  }
  console.log(charString);
  return charString;
}

// Displays the new password on the page for any curious onlookers.

function displayPassword(password) {
  var passText = document.querySelector("#password");
  console.log(password);
  password.value = password;
}

/* 

VARIABLES
  var that IS the password
  var that is a button to generate ^password^
  var for prompts for password criteria
  var to hold each password criteria
  var to hold generated random number (decided by user from one of four prompts) :
    > case of characters (uppercase and lowercase)
    > length (text field)
    > types of characters (drop down menu)
  var to hold the charLength 
  var to hold the charType
  var to hold uppercase or lowercase



FUNCTIONS
  function to handle button press
  functions to reveal prompts for password criteria :
    > case of characters
    > length
    > types of characters
  function to put all of that into a string
  function to display password
  function to display popup windows for each criteria
  function to necessitate selection of character type before continuing
  function to generate password
  function to either display the pw to the page

*/
