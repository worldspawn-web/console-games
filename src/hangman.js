import boxen from 'boxen';
import readlineSync from 'readline-sync';

import mainMenu from '../bin/main.js';
import delay from './utils/delay.js';
import { gameStarts, gameEnds, readyChecker } from './utils/readyChecker.js';

const hangmanRules = async (username) => {
    console.clear();
    console.log(boxen(`Hangman is a classic game, where you need to guess the specific word by one letter.\nFor each mistake - your character will be one step closer to being hanged.\nBefore the game starts, you need to choose a word theme (sports, science, movies, etc).\n\nGood luck, ${username}. Save this poor guy.`, { title: 'Hangman', textAlignment: 'center', titleAlignment: 'center' }));

    await delay(2000);
    if (readyChecker()) {
        gameStarts();
        startHangman(username);
    } else {
        gameEnds();
    }
};

const startHangman = async (username) => {
    console.clear();
    
};

export default hangmanRules;