import boxen from 'boxen';
import readlineSync from 'readline-sync';
import clc from 'cli-color';

import mainMenu from '../bin/main.js';
import { getStory, getStorylines }from './data/madlibs-library.js'

const madLibsPre = (username) => {
    console.clear();
    console.log(boxen(`Mad Libs - is a game where you need to insert a specific word to every sentence.\nIn the end, you will receive a full text with your answers.\nBefore we start, you will have to choose a text theme to play with.\n\nGood Luck, ${username}!`, { title: 'Mad Libs', textAlignment: 'center', titleAlignment: 'center' }));
    // TODO:
    // make 'are you ready' thing a separate module
    // use gamename as a parameter to specify next launch
    setTimeout(() => {
        if (readlineSync.keyInYN('Are you ready?')) {
            console.clear();
            // there should be all storylines available:
            // INSERT
            console.log(getStorylines());
            const storyNumber = readlineSync.question('Choose your storyline: ');
            console.clear();
            console.log('Game starts!');
            setTimeout(() => {
                console.clear();
                startMadLib(username, storyNumber);
            }, 2000)

        } else {
            console.clear();
            console.log('Come back when you are ready...');
        }
    }, 2500);
};

const startMadLib = (username, storyNumber) => {
    const story = getStory(storyNumber);
    const answers = [];
    for (let i = 0; i < story.length; i += 1) {
        if (!answers[i]) {
            console.clear();
            console.log(story[i]);
            answers[i] = clc.green(readlineSync.question(`Enter your word: `));
        }
    }
    console.clear();
    const madLibsText = story.map((question, index) => question.replace('(...)', answers[index])).join(' ');
    console.log(madLibsText);
    console.log('\nComing back to the main menu in 20 seconds...')
    setTimeout(() => mainMenu(username), 20000);
}

export default madLibsPre;
