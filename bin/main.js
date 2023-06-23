import boxen from 'boxen';
import readlineSync from 'readline-sync';

import { diceGameRules } from '../src/diceroll.js';
import { guessNumberRules } from '../src/guessNumber.js';
import madLibsRules from '../src/madLibs.js';
import ticTacToeRules from '../src/tictactoe.js';

const mainMenu = (username) => {
    console.clear();
    console.log(boxen(`\nAvailable games:\n1. Dice Rolling Simulator\n2. Guess the Number\n3. Mad Libs Generator\n4. Tic-Tac-Toe(wip)\n5. Hangman (wip)`, {title: 'Welcome to Simple Console Games!', titleAlignment: 'center', textAlignment: 'center'}));
    const userChoice = readlineSync.question(`\nWhat is your choice, ${username}?\n`);
    switch(userChoice) {
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
            throw new Error(`${userChoice} is an incorrect value!\nPossible values: 0-5`);
    }
};
export default mainMenu;