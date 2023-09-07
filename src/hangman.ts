import boxen from 'boxen';
import readlineSync from 'readline-sync';
import clc from 'cli-color';

import mainMenu from '../bin/main.js';
import delay from './utils/delay.js';
import { gameStarts, gameEnds, readyChecker } from './utils/readyChecker.js';
import {
  getThemesList,
  isThemeValid,
  getThemeName,
  getThemeWord,
  hideWord,
  isValidLetter,
  correctLetter,
  containCheck,
  gameOver,
} from './data/hangman-stages.js';

import { Username } from '../types/username.js';

const ascii = `
 +---+
 |   |
 O   |
/|\  |
/ \  |
     |
=========
\n`;

const hangmanRules = async (username: Username) => {
  console.clear();
  console.log(
    boxen(
      ascii +
        `Hangman is a classic game, where you need to guess the specific word by one letter.\nFor each mistake - your character will be one step closer to being hanged.\nBefore the game starts, you need to choose a word theme (sports, science, movies, etc).\n\nGood luck, ${username}. Save this poor guy.`,
      { title: 'Hangman', textAlignment: 'center', titleAlignment: 'center' }
    )
  );

  await delay(2000);
  if (readyChecker()) {
    gameStarts();
    preHangman(username);
  } else {
    gameEnds();
  }
};

const preHangman = async (username: Username) => {
  console.clear();
  const themes = getThemesList();
  console.log(themes);
  const userThemeNum = Number(readlineSync.question('Choose your theme: ')) - 1;
  if (isThemeValid(userThemeNum)) {
    await startHangman(username, userThemeNum);
  } else {
    console.log(
      `Theme with number ${userThemeNum} is not valid.\n Returning to the main menu...`
    );
    await delay(3000);
    mainMenu(username);
  }
};

const startHangman = async (username: Username, userThemeNum: number) => {
  console.clear();
  const themeName: string = getThemeName(userThemeNum);
  console.log(
    `Selected theme is - ${themeName}.\nPicking up an appropriate word for you...`
  );
  const goalWord: string = getThemeWord(userThemeNum);
  let goalWordHidden: string = hideWord(goalWord);
  let depressionLevel = 0;
  const uniqueLetters: Set<string> = new Set(goalWord.split(''));
  const openedLetters: Set<string> = new Set();

  await delay(500);
  while (depressionLevel < 5 && openedLetters.size < uniqueLetters.size) {
    // console.clear();
    // console.log(`Temporary answer: ${goalWord}\n\n`);
    console.log(`Current depression level: ${depressionLevel}`);
    console.log(`Theme: ${themeName}\n\n${goalWordHidden}`);

    const letterSuggest = readlineSync.keyIn('Letter: ');

    if (isValidLetter(letterSuggest)) {
      if (containCheck(letterSuggest, goalWord)) {
        console.clear();
        console.log(`That's correct!`);
        goalWordHidden = correctLetter(letterSuggest, goalWord, goalWordHidden);
        openedLetters.add(letterSuggest);
      } else {
        console.clear();
        console.log(`There is no letter - ${clc.red(letterSuggest)}!`);
        depressionLevel += 1;
      }
    } else {
      console.clear();
      console.log('You have entered not a letter.');
    }
  }

  if (depressionLevel === 5) {
    gameOver('fail', username, goalWord);
  } else {
    gameOver('success', username, goalWord);
  }
};

export default hangmanRules;
