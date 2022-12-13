import randomNumber from '../randomNumber.js';
import GamesStructure from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function GameLog() {
  const result = [];
  const question = randomNumber();
  const primeArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  function prime(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (question === arr[i]) {
        return 'yes';
      }
    }
    return 'no';
  }
  const rigthAnswer = prime(primeArr);
  result.push(question);
  result.push(rigthAnswer);
  return result;
}

function GameStart() {
  GamesStructure(gameQuestion, GameLog);
}

export default GameStart;
