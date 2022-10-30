const brackets = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const openingBrackets = Object.keys(brackets);
const closingBrackets = Object.values(brackets);

const isOpeningBracket = (bracket: string) => openingBrackets.includes(bracket);
const isClosingBracket = (bracket: string) => closingBrackets.includes(bracket);

const getKeyByValueOf = (valueToMatch: string) => {
  const entries = Object.entries(brackets);

  const pair = entries.find(([_, value]) => {
    return value === valueToMatch;
  });

  return pair[0];
};

export const isValid = function (string: string): boolean {
  let isValid = true;
  const stringToArray = string.split("");
  for (const [index, char] of stringToArray.entries()) {
    if (isOpeningBracket(char)) {
      const restOfString = string.slice(index + 1);
      const correspondingClosingBracket = brackets[char];

      // 1. there should be an equal number of opening & closing brackets of the same type
      const allOpeningBrackets = stringToArray.filter((c) => c === char);
      const allClosingBrackets = stringToArray.filter(
        (c) => c === correspondingClosingBracket
      );
      if (allOpeningBrackets.length !== allClosingBrackets.length) return false;

      // 2. for each opening bracket, there should be the corresponding closing bracket on the rest of the string.
      const isCurrentValid = restOfString.includes(correspondingClosingBracket);
      if (!isCurrentValid) return false;
    }

    if (isClosingBracket(char)) {
      // 3. there should be an equal number of opening & closing brackets of the same type (for each closing bracket)
      const allClosingBrackets = stringToArray.filter((c) => c === char);
      const correspondingOpeningBracket = getKeyByValueOf(char);
      const allOpeningBrackets = stringToArray.filter(
        (c) => c === correspondingOpeningBracket
      );
      if (allOpeningBrackets.length !== allClosingBrackets.length) return false;
    }
  }

  return isValid;
};
