// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];


function generatePassword() {
  //prompt to capture password length

  var length = parseInt(prompt('how many characters do you want?'))
  //need to check if the password legnth is min 8 chars and max of 128
  if (length < 8 || length > 128) {
    //what should we do?
    alert('Must be more than 8 but less than 128 characters')
    return null
  }

  //what happens if the user inputs eight instead of 8


  //create confirm for uppercase
  var uppercaseOption = confirm('Do you want to include uppercase letters?')
  //create confirm for lowercase
  var lowercaseOption = confirm('do you want to include lowercase letters?')
  //create confirm for specialchars
  var specialOption = confirm('Do you want special charaters?')
  //create confirm for numbers
  var numbersOption = confirm('Do you want numbers included?')
  //confirm that at least one of those characters is true
  if (uppercaseOption === false && lowercaseOption === false && specialOption === false && numbersOption === false) {
    alert('Must have at least one character option chosen')
    return null
  }

  //if the option is true concat the array into a master array
  var password = []

  if(uppercaseOption) password = password.concat(uppercase);
  if(lowercaseOption) password = password.concat(lowercase);
  if(numbersOption) password = password.concat(numbers);
  if(specialOption) password = password.concat(special);

passwordString = [];
  //create a loop that that loops by the length the user selected and in the loop you need to push the randomized character into a final array
  for (let i= 0; i < length; i++)
   {
    var characterCode = 
    password[Math.floor(Math.random() * password.length)];
    passwordString.push(characterCode);
  }
return passwordString.join("");
  //join the array in the return


}

//look into creating a randominzing function. Takes in an array and randomizes it. 


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
