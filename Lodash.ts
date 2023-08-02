import _ from 'lodash';

function getRandomNumbers(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Invalid input: The input must be an array.');
  }

  return _.sampleSize(arr, 3);
}

const inputArray = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const randomNumber = getRandomNumbers(inputArray);
console.log(randomNumber);
