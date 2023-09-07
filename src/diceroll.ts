import boxen from 'boxen';
// import Image from 'ascii-art-image';

import { randomCubes } from './utils/generators.js';
import mainMenu from '../bin/main.js';
import { gameStarts, gameEnds, readyChecker } from './utils/readyChecker.js';
import delay from './utils/delay.js';

import { Username } from '../types/username.js';

const diceGameRules = (username: Username) => {
  console.clear();

  //
  //  THIS PACKAGE IS UNSUPPORTED BY TYPESCRIPT
  //  IN ORDER TO MAKE IT WORK, I WILL HAVE TO RE-CODE IT WITH ANOTHER PACKAGE
  //  SO IT'S WORK IN PROGRESS (WIP)
  //
  //
  // const diceImg = new Image({
  //   filepath: 'img/diceroll.png',
  //   alphabet: 'binary',
  //   width: 60,
  //   height: 60,
  // });
  // diceImg.write(function (err, rendered) {
  //   console.log(rendered);
  // });
  //
  console.log(
    boxen(
      `\nYou roll the dice first. AI rolls second.\nIf your overall score is higher - you won.\nIf you got a double - your score will be 2x multiplied.\n\nGood Luck, ${username}!`,
      { title: 'Dice Roll', textAlignment: 'center', titleAlignment: 'center' }
    )
  );
  setTimeout(() => {
    if (readyChecker()) {
      gameStarts();
      diceGame(username);
    } else {
      gameEnds();
    }
  }, 2500);
};

const diceGame = async (username: Username) => {
  const userscore: number = randomCubes();
  const AIscore: number = randomCubes();

  await delay(1000);
  console.clear();

  await delay(1000);
  console.log(`Your turn...`);

  await delay(2000);
  console.log(`Your opponent's turn...`);

  await delay(1000);
  if (userscore > AIscore) {
    console.log(
      `\nCongratulations, ${username}! You've won!\nYour score - ${userscore}\nYour opponent score is - ${AIscore}`
    );
  } else if (userscore < AIscore) {
    console.log(
      `\nUnfortunately, you've lost!\nYour score - ${userscore}\nYour opponent score - ${AIscore}`
    );
  } else {
    console.log(
      `\nIt's a draw!\nYour score- ${userscore}\nYour opponent score - ${AIscore}`
    );
  }

  await delay(3000);
  mainMenu(username);
};

export { diceGameRules, diceGame };
