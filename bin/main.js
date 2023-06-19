import boxen from 'boxen';
import readlineSync from 'readline-sync';

import { diceRoll } from '../src/diceroll.js';

const mainMenu = (username) => {
    console.clear();
    console.log(boxen(`\nAvailable games:\n1. Dice Rolling Simulator\n2. Guess the Number(wip)\n3. Mad Libs Generator(wip)\n4. Adventure Game(wip)\n5. Hangman(wip)`, {title: 'Welcome to Simple Console Games!', titleAlignment: 'center', textAlignment: 'center'}));
    const userChoice = readlineSync.question(`\nWhat is your choice, ${username}?\n`);
    switch(userChoice) {
        case '1':
            diceRoll(username);
            break;
        case '2':
            guessNumber();
            break;
        case '3':
            madLibsGen();
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