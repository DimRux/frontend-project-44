import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function round() {
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
  return [question, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
