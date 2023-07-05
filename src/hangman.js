import boxen from "boxen";
import readlineSync from "readline-sync";

import mainMenu from "../bin/main.js";
import delay from "./utils/delay.js";
import { gameStarts, gameEnds, readyChecker } from "./utils/readyChecker.js";
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
} from "./data/hangman-stages.js";

const hangmanRules = async (username) => {
  console.clear();
  console.log(
    boxen(
      `Hangman is a classic game, where you need to guess the specific word by one letter.\nFor each mistake - your character will be one step closer to being hanged.\nBefore the game starts, you need to choose a word theme (sports, science, movies, etc).\n\nGood luck, ${username}. Save this poor guy.`,
      { title: "Hangman", textAlignment: "center", titleAlignment: "center" }
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

const preHangman = async (username) => {
  console.clear();
  const themes = getThemesList();
  console.log(themes);
  const userThemeNum = readlineSync.question("Choose your theme: ");
  isThemeValid(userThemeNum)
    ? startHangman(username, userThemeNum)
    : console.log(
        `Theme with number ${userThemeNum} is not valid.\nReturning to main menu...`
      );

  await delay(3000);
  mainMenu(username);
};

const startHangman = async (username, userThemeNum) => {
  debugger;
  console.clear();
  const themeName = getThemeName(userThemeNum);
  console.log(
    `Selected theme is - ${themeName}.\nPicking up an appropriate word for you...`
  );
  const goalWord = getThemeWord(themeName);
  let goalWordHidden = hideWord(goalWord);
  let depressionLevel = 0;
  let correctAnswers = 0;

  await delay(500);
  while (depressionLevel < 5 && correctAnswers < goalWord.length) {
    console.log(`Current depression level: ${depressionLevel}`);

    // await delay(1000);
    console.log(`Theme: ${themeName}\n\n${goalWordHidden}`);

    // await delay(1000);
    const letterSuggest = readlineSync.keyIn("Letter: ");
    //
    // FIX: function returns to the main menu after letter input for some reason
    //
    // await delay(3000);
    if (isValidLetter(letterSuggest)) {
      if (containCheck(letterSuggest, goalWord)) {
        console.log(`There is no such a letter!`);
        goalWordHidden = correctLetter(letterSuggest, goalWord, goalWordHidden);
        correctAnswers += 1;
      } else {
        console.log(`Unfortunately, there is no such a letter!`);
        depressionLevel += 1;
      }
    } else {
      console.log("You have entere not a letter.");
    }

    // await delay(1000);
  }

  if (depressionLevel === 5) {
    gameOver("fail", username, goalWord);
  } else {
    gameOver("succes", username);
  }
};

export default hangmanRules;
