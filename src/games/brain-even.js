import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNum) => randomNum % 2 === 0;

function round() {
  const number = randomNumber();
  const rigthAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
