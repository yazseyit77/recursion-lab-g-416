// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(str){
  return str.length <= 1 ? str : reverseString(str.substring(1)) + str.charAt(0);
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [ firstLetter ] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}


function addUpTo(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}
