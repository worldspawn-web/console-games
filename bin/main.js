import boxen from 'boxen';
import readlineSync from 'readline-sync';

import { diceGameRules } from '../src/diceroll.js';
import { guessNumberRules } from '../src/guessNumber.js';
import madLibsPre from '../src/madLibs.js';

const mainMenu = (username) => {
    console.clear();
    console.log(boxen(`\nAvailable games:\n1. Dice Rolling Simulator\n2. Guess the Number\n3. Mad Libs Generator\n4. Hangman (wip)\n5. Adventure Game (will be released as separate game)`, {title: 'Welcome to Simple Console Games!', titleAlignment: 'center', textAlignment: 'center'}));
    const userChoice = readlineSync.question(`\nWhat is your choice, ${username}?\n`);
    switch(userChoice) {
        case '1':
            diceGameRules(username);
            break;
        case '2':
            guessNumberRules(username);
            break;
        case '3':
            madLibsPre(username);
            break;
        case '4':
            adventureGame();
            break;
        case '5':
            hangmanGame();
            break;
        default:
            throw new Error(`${userChoice} is an incorrect value!\nPossible values: 0-5`);
    }
};
export default mainMenu;