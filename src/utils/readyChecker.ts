import readlineSync from 'readline-sync';

const readyChecker = (): boolean => {
  if (readlineSync.keyInYN('Are you ready?')) {
    return true;
  } else {
    return false;
  }
};

const gameStarts = () => {
  console.clear();
  console.log('Game starts!');
};

const gameEnds = () => {
  console.clear();
  console.log('Come back when you will be ready...');
};

export { readyChecker, gameStarts, gameEnds };
