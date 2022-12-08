import readlineSync from 'readline-sync';
import randomNumber from './randomNumber.js';

function Game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const question = randomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const chet = (randomNum) => randomNum % 2 === 0;
    const rigthAnswer = chet(question) ? 'yes' : 'no';
    if (answer !== rigthAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
}
export default Game;
