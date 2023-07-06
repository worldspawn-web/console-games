import clc from 'cli-color';

import { randomValue } from '../utils/generators.js';

// const hangmanStages = {
//     // hangman visualized stages will be there...

// };

const hangmanThemes = [
  'Sports',
  'Science',
  'Technologies',
  'Programming',
  'Gaming',
];

// chooser
const getThemesList = () => {
  let output = `${clc.yellow('Available themes:')}\n`;
  for (let i = 0; i < hangmanThemes.length; i += 1) {
    output += `${i + 1}. ${hangmanThemes[i]}\n`;
  }
  return output;
};

const getThemeName = (number) => hangmanThemes[number];

const getThemeWord = (number) => {
  const wordsArr = hangmanWords[number];
  const maxValue = wordsArr.length;
  return hangmanWords[number][randomValue(0, maxValue)];
};

const gameOver = (gameStatus, username, goalWord) => {
  console.clear();
  switch (gameStatus) {
    case 'success':
      console.log(
        `Congratulations, ${username}!\nThe word was ${clc.green(goalWord)}.`
      );
      break;
    case 'fail':
      console.log(
        `Unfortunately, ${username}, you couldn't save the guy...\nThe word was ${clc.red(
          goalWord
        )}.`
      );
      break;
  }
};

const isValidLetter = (letterSuggest) =>
  letterSuggest.length === 1 ? true : false;

const containCheck = (letterSuggest, goalWord) => {
  const arr = goalWord.split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === letterSuggest.toLowerCase()) {
      return true;
    }
  }
  return false;
};

const correctLetter = (letterSuggest, goalWord, goalWordHidden) => {
  const arr = goalWord.split('');
  let hiddenIndex = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === letterSuggest.toLowerCase()) {
      hiddenIndex.push(i);
    }
  }
  const hiddenArr = goalWordHidden.split('');
  for (let i = 0; i < hiddenIndex.length; i += 1) {
    hiddenArr[hiddenIndex[i]] = letterSuggest;
  }
  return hiddenArr.join('');
};

const hideWord = (word) => {
  const replacer = '_';
  const arr = [];
  for (let i = 0; i < word.length; i += 1) {
    arr.push(replacer);
  }
  return arr.join('');
};

const isThemeValid = (number) => {
  if (hangmanThemes[number]) {
    return true;
  } else {
    return false;
  }
};

const hangmanWords = {
  Sports: [
    'football',
    'basketball',
    'tennis',
    'golf',
    'hockey',
    'baseball',
    'volleyball',
    'swimming',
    'gymnastics',
    'boxing',
    'snowboarding',
    'rock climbing',
    'athletics',
    'karate',
    'car racing',
    'table tennis',
    'badminton',
    'cycling',
    'skateboarding',
    'powerlifting',
    'diving',
    'rowing',
    'surfing',
    'handball',
  ],
  Science: [
    'physics',
    'chemistry',
    'biology',
    'astronomy',
    'geology',
    'genetics',
    'psychology',
    'anthropology',
    'sociology',
    'ecology',
    'neuroscience',
    'medicine',
    'botany',
  ],
  Technologies: [
    'computer',
    'internet',
    'software',
    'hardware',
    'network',
    'data',
    'algorithm',
    'coding',
    'programming',
    'website',
    'mobile',
    'application',
    'artificial intelligence',
    'machine learning',
    'virtual reality',
    'augmented reality',
    'blockchain',
    'cybersecurity',
    'cloud computing',
    'big data',
    'robotics',
    'nanotechnology',
    'IoT',
    'drones',
    '3D printing',
  ],
  Programming: [
    'variable',
    'function',
    'loop',
    'array',
    'object',
    'string',
    'boolean',
    'integer',
    'float',
    'if statement',
    'for loop',
    'while loop',
    'class',
    'method',
    'inheritance',
    'polymorphism',
    'encapsulation',
    'abstraction',
    'recursion',
    'sorting',
    'searching',
    'debugging',
    'compiler',
    'IDE',
    'API',
  ],
  Gaming: [
    'game',
    'console',
    'controller',
    'player',
    'level',
    'quest',
    'character',
    'multiplayer',
    'online',
    'strategy',
    'role-playing',
    'shooter',
    'adventure',
    'simulation',
    'platformer',
    'puzzle',
    'arcade',
    'sports',
    'RPG',
    'FPS',
    'MMORPG',
    'sandbox',
    'stealth',
    'VR',
    'eSports',
  ],
};

export {
  getThemesList,
  isThemeValid,
  getThemeName,
  getThemeWord,
  hideWord,
  isValidLetter,
  correctLetter,
  containCheck,
  gameOver,
};
