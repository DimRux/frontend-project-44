import randomNumber from '../randomNumber.js';
import gamesStructure from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let devidersCount = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      devidersCount += 1;
    }
  }
  return devidersCount === 2;
};

function round() {
  const question = randomNumber();
  const rigthAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rigthAnswer];
}

function gameStart() {
  gamesStructure(description, round);
}

export default gameStart;
