// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    // declare variales to be used
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let lowercase = input.toLowerCase();
    let secretMessage = "";
    let shiftedIndex;

    // use a for loop to iterate through inputs
    for (let i = 0; i < lowercase.length; i++) {
      // declare a variable for each letter
      let currentIndex = lowercase[i];

      if (alphabet.includes(currentIndex) === false) {
        secretMessage += currentIndex;
        continue;
      }
      // declaring indexNumber for each respective letter currently in loop
      let indexNumber = alphabet.indexOf(currentIndex);
      if (encode === true) {
        shiftedIndex = indexNumber + shift;
      } else {
        shiftedIndex = indexNumber - shift;
      }

      // If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
      if (shiftedIndex > 25) shiftedIndex -= 26;
      if (shiftedIndex < 0) shiftedIndex += 26;

      // adding letters onto the encoded message based off of their respective index
      secretMessage += alphabet[shiftedIndex];
    }
    return secretMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
