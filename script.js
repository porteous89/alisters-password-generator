function generatePassword() {
  var passwordLength = getLength();
  if(passwordLength === undefined){
    return "Password couldn't be created";
  }
  var possibleChar = getChars();

  var password = "";
  for (var i = 0; i < passwordLength; i++){
    password += possibleChar[Math.floor(Math.random() * possibleChar.length)];
  }
  return password;
  }

  function getChars(){
  var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialChar = ['@', '%', '+', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var passwordBase = []

  if(confirm("Do you want to add numbers?") === true){
    passwordBase = passwordBase.concat(numericChar);
  } 
  if(confirm("Do you want to add lowercase characters?") === true){
    passwordBase = passwordBase.concat(lowercaseChar);
  }
  if(confirm("Do you want to add uppercase characters?") === true){
    passwordBase = passwordBase.concat(uppercaseChar);
  }
  if(confirm("Do you want to add special characters?") === true){
    passwordBase = passwordBase.concat(specialChar);
  }

  if( passwordBase.length > 0){
    return passwordBase;
  }
  alert("You must select a valid datatype");
  if(confirm("Do you want to try again?") === true){
    return getChars();
  }
}

function getLength(){
  var numberOfChar = prompt("How long do you want you password to be? (Between 8-128 characters)");
    if (numberOfChar >= 8 && numberOfChar <=128){
      return numberOfChar;
    } 
    alert("You must enter a valid number between 8 and 128");
    if(confirm("Do you want to try again?") === true){
      return getLength();
    }
}

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
