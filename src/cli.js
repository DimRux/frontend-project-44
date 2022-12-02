import readlineSync from 'readline-sync';
const three=()=>{
const userName = readlineSync.question('May I have your name?: ');
console.log('Hello ' + userName + '!');
};
export { three };