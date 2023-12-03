import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'What number is missing in the progression?';

function progressionLength(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function progressionArray() {
  const step = progressionLength(1, 10);
  const arraylength = progressionLength(5, 10);
  const numberStart = randomNumber();
  const arr = [];
  arr[0] = numberStart;
  for (let i = 1; i < arraylength; i += 1) {
    arr.push(numberStart + step * i);
  }
  return arr;
}

const shadowArroy = (arroyConvertible, element, shadowElement) => {
  const newArr = [];
  for (let j = 0; j < arroyConvertible.length; j += 1) {
    newArr.push(arroyConvertible[j]);
  }
  newArr[element] = shadowElement;
  return newArr;
};

function round() {
  const ligthArray = progressionArray();
  const shadowElementPosition = Math.floor(Math.random() * (ligthArray.length));
  const shadowProgressionArray = shadowArroy(ligthArray, shadowElementPosition, '..');
  const question = shadowProgressionArray.join(' ');
  const rigthAnswer = String(ligthArray[shadowElementPosition]);
  return [question, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
