import randomNumber from '../randomNumber.js';
import GamesStructure from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function divisors(num) {
  const arrDivisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
}

function commonDivisors(arr1, arr2) {
  const arrCommonDivisors = [];
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;

  while (i1 < size1 && i2 < size2) {
    const lastCommon = arrCommonDivisors[arrCommonDivisors.length - 1];
    const item1 = arr1[i1];
    const item2 = arr2[i2];
    if (item1 === item2 && item1 !== lastCommon) {
      arrCommonDivisors.push(item1);
      i1 += 1;
      i2 += 1;
    } else if (item1 > item2) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }

  return arrCommonDivisors;
}

function GameLog() {
  const result = [];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const divisorsArr1 = divisors(num1);
  const divisorsArr2 = divisors(num2);
  const commonArr1Arr2 = commonDivisors(divisorsArr1, divisorsArr2);
  const question = `${num1} ${num2}`;
  const rigthAnswer = String(commonArr1Arr2[commonArr1Arr2.length - 1]);
  result.push(question);
  result.push(rigthAnswer);
  return result;
}

function GameStart() {
  GamesStructure(gameQuestion, GameLog);
}

export default GameStart;
