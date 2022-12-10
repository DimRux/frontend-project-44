import randomNumber from '../randomNumber.js';
import GamesStructure from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

function GameLog() {
  const result = [];
  const question = randomNumber();
  const chet = (randomNum) => randomNum % 2 === 0;
  const rigthAnswer = chet(question) ? 'yes' : 'no';
  result.push(question);
  result.push(rigthAnswer);
  return result;
}

function GameStart() {
  GamesStructure(gameQuestion, GameLog);
}

export default GameStart;
