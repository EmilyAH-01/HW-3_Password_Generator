// script.js: Password Generator functionality
// Emily Herman, HW 3, 10/1/2020 

// Starter code was provided; I wrote the generatePassword function and 
// modified the starter code as necessary.


// Select the ID for the "Generate Password" button for later use
var generateBtn = document.querySelector("#generate");

// Create global password variable and set as an empty string
var password = "";

// Generate a password based on user's answers to password criteria questions
function generatePassword() {

  // Ask for password length until criteria is met
  do {
    var passwordLength = parseInt(prompt("Length of password (between 8 and 128 characters):"), 10);
  }
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || typeof passwordLength !== "number");
  
  // Ask which characters will be included in password
  var lowercaseTF = confirm("Include lowercase characters?");
  var uppercaseTF = confirm("Include uppercase characters?");
  var numbersTF = confirm("Include numeric characters?");
  var specialCharTF = confirm("Include special characters?");

  // Initialize string of all acceptable password characters as an empty string
  var passwordCharacters = "";

  // Add subsets of characters to passwordCharacters string
  if(lowercaseTF === true) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(uppercaseTF === true) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(numbersTF === true) {
    passwordCharacters += "0123456789";
  }
  if(specialCharTF === true) {
    passwordCharacters += "~!@#$%^&*_-+=|(){}[]:;'<>,.?/"; 
  }

  // If "cancel" was clicked for all character subsets, use lowercase as default 
  if(passwordCharacters === "") {
    alert("No character type selected. Lowercase will be used.");
    passwordCharacters = "abcdefghijklmnopqrstuvwxyz";
  }
  
  // Choose a random character from the passwordCharacters string and add append it to the password;
  // continue until desired password length is acheived 
  for(var i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * passwordCharacters.length);
    var nextChar = passwordCharacters[random];
    
    password += nextChar;
  }

  // Output of function
  return password;  
}

// Write password to the #password input
function writePassword() {
 
  // Select ID from HTML
  var passwordText = document.querySelector("#password");

  // Clear previous password on screen
  password = "";
  passwordText.value = password;

  // Generate password and display on screen
  password = generatePassword();
  passwordText.value = password;
}
  
// Add event listener to Generate button
generateBtn.addEventListener("click", writePassword);
