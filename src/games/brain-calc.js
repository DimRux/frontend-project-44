import randomNumber from '../randomNumber.js';
import GamesStructure from '../index.js';

const gameQuestion = 'What is the result of the expression?';

function GameLog() {
  let question;
  let rigthAnswer;
  const operations = ['+', '-', '*'];
  const result = [];
  const num1 = randomNumber();
  const num2 = randomNumber();
  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const i = Math.floor(Math.random() * 3);
  if (i === 1) {
    question = `${num1} ${operations[0]} ${num2}`;
    rigthAnswer = String(addition);
  } else if (i === 2) {
    question = `${num1} ${operations[1]} ${num2}`;
    rigthAnswer = String(subtraction);
  } else {
    question = `${num1} ${operations[2]} ${num2}`;
    rigthAnswer = String(multiplication);
  }
  result.push(question);
  result.push(rigthAnswer);
  return result;
}

function GameStart() {
  GamesStructure(gameQuestion, GameLog);
}

export default GameStart;
