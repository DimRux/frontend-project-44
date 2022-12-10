import readlineSync from 'readline-sync';

function GamesStructure(gameQuestion, GameLog) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rigthAnswer] = GameLog();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rigthAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    } console.log('Correct!');
  } console.log(`Congratulations, ${name}!`);
}
export default GamesStructure;
