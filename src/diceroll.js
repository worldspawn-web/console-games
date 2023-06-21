import boxen from 'boxen';

import { randomCubes } from './utils/generators.js';
import mainMenu from '../bin/main.js';
import { gameStarts, gameEnds, readyChecker } from './utils/readyChecker.js';
import delay from './utils/delay.js';

const diceGameRules = (username) => {
    console.clear();
    console.log(boxen(`\nYou roll the dice first. AI rolls second.\nIf your overall score is higher - you won.\nIf you got a double - your score will be 2x multiplied.\n\nGood Luck, ${username}!`, {title: 'Dice Roll', textAlignment: 'center', titleAlignment: 'center'}));
    setTimeout(() => {
        if (readyChecker()) {
            gameStarts();
            diceGame(username);
        } else {
            gameEnds();
        }
    }, 2500);
};

const diceGame = async (username) => {
    const userscore = randomCubes();
    const AIscore = randomCubes();

    await delay(1000);
    console.clear();

    await delay(1000);
    console.log(`Your turn...`);

    await delay(2000);
    console.log(`Your opponent's turn...`);

    await delay(1000);
    if (userscore > AIscore) {
        console.log(`\nCongratulations, ${username}! You've won!\nYour score - ${userscore}\nYour opponent score is - ${AIscore}`);
    } else if (userscore < AIscore) {
        console.log(`\nUnfortunately, you've lost!\nYour score - ${userscore}\nYour opponent score - ${AIscore}`);
    } else {
        console.log(`\nIt's a draw!\nYour score- ${userscore}\nYour opponent score - ${AIscore}`);
    }

    await delay(3000);
    mainMenu(username);
}

export { diceGameRules, diceGame };