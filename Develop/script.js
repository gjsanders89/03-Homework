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
  function to generate password
  function to display password
  need check boxes

*/
