import boxen from 'boxen';
import readlineSync from 'readline-sync';
import clc from 'cli-color';

import mainMenu from '../bin/main.js';
import { getStory, getStorylines } from './data/madlibs-library.js';
import { readyChecker, gameEnds, gameStarts } from './utils/readyChecker.js';

import { Username } from '../types/username.js';

const madLibsRules = (username: Username) => {
  console.clear();
  console.log(
    boxen(
      `Mad Libs - is a game where you need to insert a specific word to every sentence.\nIn the end, you will receive a full text with your answers.\nBefore we start, you will have to choose a text theme to play with.\n\nGood Luck, ${username}!`,
      { title: 'Mad Libs', textAlignment: 'center', titleAlignment: 'center' }
    )
  );
  if (readyChecker()) {
    gameStarts();
    startMadLib(username);
  } else {
    gameEnds();
  }
};

const startMadLib = (username: Username) => {
  console.clear();
  console.log(getStorylines());
  const storyNumber: number = Number(
    readlineSync.question('Choose your storyline: ')
  );
  console.clear();
  const story = getStory(storyNumber);
  const answers: string[] = [];
  for (let i = 0; i < story.length; i += 1) {
    if (!answers[i]) {
      console.clear();
      console.log(story[i]);
      answers[i] = clc.green(readlineSync.question(`Enter your word: `));
    }
  }
  console.clear();
  const madLibsText: string = story
    .map((question, index) => question.replace('(...)', answers[index]))
    .join(' ');
  console.log(madLibsText);
  console.log('\nComing back to the main menu in 20 seconds...');
  setTimeout(() => mainMenu(username), 20000);
};

export default madLibsRules;
