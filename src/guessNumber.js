import boxen from 'boxen';
import readlineSync from 'readline-sync';

import mainMenu from '../bin/main.js';
import { generateAttempts, randomValue } from './util.js';

const guessNumberRules = (username) => {
    console.clear();
    console.log(boxen(`Random number is generated in area you choose.\nThe amount of attempts is proportionally to possible numbers area.\nFor each attempt, you will receive a hint (lower, higher).\n\nGood Luck, ${username}!`, { title: 'Guess the Number', textAlignment: 'center', titleAlignment: 'center' }));
    // TODO:
    // make 'are you ready' thing a separate module
    // use gamename as a parameter to specify next launch
    setTimeout(() => {
        if (readlineSync.keyInYN('Are you ready?')) {
            const minValue = readlineSync.question('Enter the smallest number for the game: ');
            console.clear();
            const maxValue = readlineSync.question('Enter the largest number for the game: ');
            console.clear();
            console.log('Game starts!');
            guessNumber(username, minValue, maxValue);
        } else {
            console.clear();
            console.log('Come back when you are ready...');
        }
    }, 2500);
};

const guessNumber = (username, minValue, maxValue) => {
    console.clear();
    const goalNumber = randomValue(minValue, maxValue);
    console.log(goalNumber);
    let freeAttempts = generateAttempts(minValue, maxValue);
    let usedAttempts = 0;
    console.log(`You have ${freeAttempts} attempts.`);
    let userinput = null;
    while (userinput !== goalNumber) {
        if (freeAttempts < 0) {
            console.log(`Unfortunately, you are out of attempts :(\nThe search number was - ${goalNumber}\nBetter luck next time...`);
            setTimeout(() => mainMenu(username), 3000);
        }
        userinput = Number(readlineSync.question('Your answer: '));
        if (userinput !== goalNumber) {
            freeAttempts -= 1;
            usedAttempts += 1;
            let goalHint = Math.sign(goalNumber - userinput);
            if (goalHint === 1) {
                console.log(`The search number is higher than ${userinput}`);
            } else {
                console.log(`The search number is lower than ${userinput}`);
            }
            console.log(`The amount of attempts left: ${freeAttempts}`);
        }
    }
    usedAttempts += 1;
    setTimeout(() => console.log(`Congratulations! You have found the right number in ${usedAttempts} attempts!`), 500);
    setTimeout(() => mainMenu(username), 5000);
}

export { guessNumberRules, guessNumber };