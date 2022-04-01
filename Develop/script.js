// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = 0;
// the variable "charNum" is a number value generated as the result of the charNum function below

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function setCharNum() {

}

function generatePassword() {

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 

VARIABLES
  var to hold each password criteria
    > length (text field)
    > types of characters (drop down menu)
  var to hold the charLength 
  var to hold the charType


FUNCTIONS
  function to handle button press and to reveal prompts for password criteria

*/
