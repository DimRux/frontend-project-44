import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  if (operator === '+') {
    return String(number1 + number2);
  }

  if (operator === '-') {
    return String(number1 - number2);
  }

  return String(number1 * number2);
};

function round() {
  const operations = '+-*';
  const num1 = randomNumber();
  const num2 = randomNumber();
  const i = Math.floor(Math.random() * 3);
  const question = `${num1} ${operations[i]} ${num2}`;
  const rigthAnswer = calculate(num1, num2, operations[i]);
  return [question, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
