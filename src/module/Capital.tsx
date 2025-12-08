export const capitalizeEveryWord = (inputString) => {
  // Split the string into an array of words
  const words = inputString.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a string
  const resultString = capitalizedWords.join(" ");

  return resultString;
};
