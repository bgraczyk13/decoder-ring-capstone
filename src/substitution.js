// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // The alphabet parameter must be a string of exactly 26 characters, otherwise return false
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    // checking for duplicates between the 2 alphabets using .some() method
    // The some() method tests whether at least one element in the array passes the
    // test implemented by the provided function
    let checkDuplicates = alphabet.split("").some((b, i, a) => {
      return a.lastIndexOf(b) != i;
    });
    if (checkDuplicates === true) {
      return false;
    }

    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let userMessage = input.toLowerCase();
    let result = "";

    for (let i = 0; i < userMessage.length; i++) {
      let currentLetter;
      let index;

      if (encode === true) {
        // define currentLetter as the currrent index in the for loop
        currentLetter = userMessage.charAt(i);
        // define index as the current index number
        index = standardAlphabet.indexOf(currentLetter);
        // if else statement that will check for non alphabetical characters
        // [those with index of -1] are non alphabetical
        if (index === -1) {
          result += currentLetter;
        } else {
          result += alphabet.charAt(index);
        }
      } else {
        currentLetter = userMessage.charAt(i);
        index = alphabet.indexOf(currentLetter);
        if (index === -1) {
          result += currentLetter;
        } else {
          result += standardAlphabet.charAt(index);
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
