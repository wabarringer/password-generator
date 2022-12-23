
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", \"]", "^", "_", "`", "{", "|", "}", "~"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var finalResult= ""

var joinedArrays= []



function generatePassword () {
  var passwordLength = prompt("How long do you want your password? Length needs to be greater than 8 and less than 128.")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please follow instructions")
      console.log(passwordLength)
      return
    }  else if (isNaN(passwordLength)){
      alert("Please follow instructions")
      return
    }
  


  //when the user confirms the 'confirm alert' push value to the joinedArrays array
    var numOption = confirm("Do you want any numbers in your password?")
    if(numOption){
      for (let i=0; i < numbers.length; i++){
        joinedArrays.push(numbers[i])
      }
    }

    var specOption = confirm("Do you want any special characters in your password?")
    if(specOption){
      for (let i=0; i < symbols.length; i++){
        joinedArrays.push(symbols[i])
      }
    }
    var lowerOption = confirm("Do you want any lower case letters in your password?")
    if(lowerOption){
      for (let i=0; i < lowerCaseLetters.length; i++){
        joinedArrays.push(lowerCaseLetters[i])
      }
    }
    var upperOption = confirm("Do you want any upper case letters in your password?")
    if(upperCaseLetters){
      for (let i=0; i < upperCaseLetters.length; i++){
        joinedArrays.push(upperCaseLetters[i])
      }
    }
    let joinedString = joinedArrays.join("")

    if(!numOption && !specOption && !lowerOption && !upperOption){
      alert("You did not select any character types. Try again.")
    }

    // As long as we haven't hit the max number of password characters
    // Take a random character from joinedArrays
    // Add to finalResult string

    for (let i=0; i < passwordLength; i++) {
      finalResult = finalResult + joinedString.charAt(Math.floor(Math.random() * joinedString.length))   
    }
    console.log(finalResult)
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalResult;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
