import boxen from 'boxen';
import readlineSync from 'readline-sync';

import mainMenu from '../bin/main.js';
import { generateAttempts, randomValue } from './utils/generators.js';
import { failureMsg, successMsg } from './utils/colorMsg.js';
import { readyChecker, gameEnds, gameStarts } from './utils/readyChecker.js';
import delay from './utils/delay.js';

const ascii = `
+--------------+
|              |
|  Guess the   |
|   Number!    |
|              |
+--------------+
\n`;

const guessNumberRules = (username) => {
  console.clear();
  console.log(
    boxen(
      ascii +
        `Random number is generated in area you choose.\nThe amount of attempts is proportionally to possible numbers area.\nFor each attempt, you will receive a hint (lower, higher).\n\nGood Luck, ${username}!`,
      {
        title: 'Guess the Number',
        textAlignment: 'center',
        titleAlignment: 'center',
      }
    )
  );
  if (readyChecker()) {
    gameStarts();
    guessNumber(username);
  } else {
    gameEnds();
  }
};

const guessNumber = async (username) => {
  await delay(1000);
  console.clear();
  const minValue = readlineSync.question(
    'Enter the smallest number for the game: '
  );
  const maxValue = readlineSync.question(
    'Enter the largest number for the game: '
  );
  console.clear();
  const goalNumber = randomValue(minValue, maxValue);
  // console.log(goalNumber); <- uncomment to debug goal number value in-game
  let freeAttempts = generateAttempts(minValue, maxValue);
  let usedAttempts = 0;
  let userinput = null;

  await delay(1000);
  console.log(`You have ${freeAttempts} attempts.`);

  while (userinput !== goalNumber) {
    if (freeAttempts < 0) {
      console.clear();
      failureMsg('Unfortunately, you are out of attempts :(');
      console.log(
        `\nThe search number was - ${goalNumber}\nBetter luck next time...`
      );
      userinput = goalNumber;
      setTimeout(() => mainMenu(username), 3000);
    }
    userinput = Number(readlineSync.question('Your answer: '));
    if (userinput !== goalNumber) {
      freeAttempts -= 1;
      usedAttempts += 1;
      let goalHint = Math.sign(goalNumber - userinput);
      if (goalHint === 1) {
        console.clear();
        console.log(`The search number is higher than ${userinput}`);
      } else {
        console.clear();
        console.log(`The search number is lower than ${userinput}`);
      }
      console.log(`The amount of attempts left: ${freeAttempts}`);
    }
  }
  usedAttempts += 1;
  console.clear();

  await delay(1000);
  successMsg('Congratulations!');
  console.log(`You have found the right number in ${usedAttempts} attempts!`);

  await delay(5000);
  mainMenu(username);
};

export { guessNumberRules, guessNumber };
