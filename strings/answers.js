
function censorWords(inputString, badWords) {
  const words = inputString.split(' ');

  const censoredWords = words.map(word => {
    if (badWords.includes(word)) {
      return '*'.repeat(word.length);
    } else {
      return word;
    }
  });

  return censoredWords.join(' ');
}


<<<<<<< HEAD


=======
>>>>>>> a2b488b767741d0ed72b562012cbef6e5439d445
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}

<<<<<<< HEAD




=======
>>>>>>> a2b488b767741d0ed72b562012cbef6e5439d445

const farsiNumber = '۰۱۲۳۴۵۶۷۸۹';
function toPersian(inputString) {
  return inputString.replace(/\d/g, digit => farsiNumber[digit]);
}
const input1 = "Today is 12th of June, 2023.";
const persianDigitsOutput = toPersian(input1);

function findMostRepeatedCharacter(inputString) {
  const charMap = {};
  let mostRepeatedChar = '';
  let maxCount = 0;

  for (const char of inputString) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      mostRepeatedChar = char;
    }
  }

  return { character: mostRepeatedChar, count: maxCount };
}




function findMostRepeatedCharacter(inputString) {
  const charMap = {};
  let mostRepeatedChar = '';
  let maxCount = 0;

  for (const char of inputString) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      mostRepeatedChar = char;
    }
  }

  return { character: mostRepeatedChar, count: maxCount };
}



function areStringsAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/\s+/g, "");
  const cleanStr2 = str2.replace(/\s+/g, "");
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  const charCountMap = {};
  for (const char of cleanStr1) {
    charCountMap[char] = (charCountMap[char] || 0) + 1;
  }
  for (const char of cleanStr2) {
    if (!charCountMap[char]) {
      return false;
    }
    charCountMap[char] -= 1;
  }
  return true;
}


function formatNumber(numberString) {
  if (numberString.length <= 3) {
    return numberString;
  }

  let formatted = "";
  let remainder = numberString.length % 3;

  if (remainder !== 0) {
    formatted += numberString.substr(0, remainder) + ",";
  }

  while (remainder < numberString.length) {
    formatted += numberString.substr(remainder, 3) + ",";
    remainder += 3;
  }

  return formatted.slice(0, -1);
}



function isValidParentheses(str) {
  const stack = [];

  for (const char of str) {
    if (char === "(") {
      stack.push("(");
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0; 
}





function removeDuplicates(inputString) {
  let result = '';
  const charSet = new Set();

  for (const char of inputString) {
    if (!charSet.has(char)) {
      charSet.add(char);
      result += char;
    }
  }

  return result;
}



function PasswordStrength(password, wordList) {
  const minLength = 12;
  let score = 0;
  if (password.length >= minLength) {
    score += password.length;
  }
  if (/[A-Z]/.test(password)) {
    score += 2;
  }
  if (/\d/.test(password)) {
    score += 2;
  }
  if (/[a-z]/.test(password)) {
    score += 1;
  }
  if (!wordList.includes(password)) {
    score += 1;
  }
  return score;
}




function replaceAllCustom(input, replaceThis, replaceTo) {
  if (replaceThis === "" || replaceTo === "") {
    return input;
  }

  let result = "";
  let i = 0;

  while (i < input.length) {
    if (input.substring(i, i + replaceThis.length) === replaceThis) {
      result += replaceTo;
      i += replaceThis.length;
    } else {
      result += input[i];
      i++;
    }
  }

  return result;
}
