import readlineSync from 'readline-sync';

const readyChecker = () => {
    if (readlineSync.keyInYN('Are you ready?')) {
        console.clear();
        console.log('Game starts!');
    } else {
        console.clear();
        console.log('Come back when you are ready...');
    }
}

export default readyChecker;
