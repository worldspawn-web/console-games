import boxen from 'boxen';
import readlineSync from 'readline-sync';

import { diceGameRules } from '../src/diceroll.js';
import { guessNumberRules } from '../src/guessNumber.js';
import madLibsRules from '../src/madLibs.js';
import ticTacToeRules from '../src/tictactoe.js';
import hangmanRules from '../src/hangman.js';

import { Username } from '../types/username.js';

const mainMenu = (username: Username) => {
  console.clear();
  console.log(
    boxen(
      `\nAvailable games:\n1. Dice Rolling Simulator\n2. Guess the Number\n3. Mad Libs Generator\n4. Tic-Tac-Toe\n5. Hangman`,
      {
        title: 'Welcome to Simple Console Games!',
        titleAlignment: 'center',
        textAlignment: 'center',
      }
    )
  );

  const userChoice: string = readlineSync.question(
    `\nWhat is your choice, ${username}?\n`
  );

  switch (userChoice) {
    case '1':
      diceGameRules(username);
      break;
    case '2':
      guessNumberRules(username);
      break;
    case '3':
      madLibsRules(username);
      break;
    case '4':
      ticTacToeRules(username);
      break;
    case '5':
      hangmanRules(username);
      break;
    default:
      console.log(
        `There is no such game with a number ${userChoice}.\nReturning to the main menu...`
      );
  }
};
export default mainMenu;
