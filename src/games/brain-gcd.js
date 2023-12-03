import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }
  let minValue;
  let maxValue;
  if (number1 > number2) {
    minValue = number2;
    maxValue = number1;
  } else {
    minValue = number1;
    maxValue = number2;
  }
  return gcd(maxValue - minValue, minValue);
};

function round() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${num2}`;
  const rigthAnswer = String(gcd(num1, num2));
  return [question, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
