import boxen from 'boxen';
import readlineSync from 'readline-sync';

import randomCubes from './util.js';
import mainMenu from '../bin/main.js';

const diceGameRules = (username) => {
    console.clear();
    console.log(boxen(`\nYou roll the dice first. AI rolls second.\nIf your overall score is higher - you won.\nIf you got a double - your score will be 2x multiplied.\n\nGood Luck, ${username}!`, {title: 'Dice Roll', textAlignment: 'center', titleAlignment: 'center'}));
    // TODO:
    // make 'are you ready' thing a separate module
    // use gamename as a parameter to specify next launch
    setTimeout(() => {
        if (readlineSync.keyInYN('Are you ready?')) {
            console.clear();
            console.log('Game starts!');
            diceGame(username);
        } else {
            console.clear();
            console.log('Come back when you are ready...');
        }
    }, 2500);
};

const diceGame = (username) => {
    const userscore = randomCubes();
    const AIscore = randomCubes();
    setTimeout(() => console.clear(), 1000);
    setTimeout(() => console.log(`Your turn...`), 2000);
    setTimeout(() => console.log(`Your opponent's turn...\n`), 4000);
    if (userscore > AIscore) {
        setTimeout(() =>console.log(`Congratulations, ${username}! You've won!\nYour score - ${userscore}\nYour opponent score is - ${AIscore}`), 5000);
    } else if (userscore < AIscore) {
        setTimeout(() => console.log(`Unfortunately, you've lost!\nYour score - ${userscore}\nYour opponent score - ${AIscore}`), 5000);
    } else {
        setTimeout(() => console.log(`It's a draw!\nYour score- ${userscore}\nYour opponent score - ${AIscore}`), 5000);
    }
    setTimeout(() => mainMenu(username), 8000);
}

export { diceGameRules, diceGame };