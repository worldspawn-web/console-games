import boxen from 'boxen';
import readlineSync from 'readline-sync';

import mainMenu from '../bin/main.js';
import delay from './utils/delay.js';
import { gameStarts, gameEnds, readyChecker } from './utils/readyChecker.js';
import { generateValue } from './utils/generators.js';

const ticTacToeRules = async (username) => {
    console.clear();
    console.log(boxen(`Tic-Tac-Toe is a classic game that takes place on 3x3 game board.\nThe main goal - is to get 3 symbols in one line, which can be vertical/horizontal/diagonal.\nIf there are no more available moves, game restarts.\n\nGood luck, ${username}`, { title: 'Tic-Tac-Toe', textAlignment: 'center', titleAlignment: 'center' }));

    await delay(2000);
    if (readyChecker()) {
        gameStarts();
        startTicTacToe(username);
    } else {
        gameEnds();
    }
};

const startTicTacToe = async (username) => {
    console.clear();
    const difficulties = ['Easy', 'Normal', 'Hard'];
    const difficulty = readlineSync.keyInSelect(difficulties, 'Choose AI strength: ');
    console.clear();
    console.log(`Selected AI strength: ${difficulties[difficulty]}.`);

    await delay(1500);
    console.clear();
    const userSymbol = readlineSync.question('Choose your symbol: ');
    console.clear();
    const aiSymbol = readlineSync.question('Choose AI symbol: ');
    console.clear();

    await delay(1000);
    gameLogic(userSymbol, aiSymbol, username, difficulty);
}

const gameLogic = async (userSymbol, aiSymbol, username, difficulty) => {
    // temp field TODO: change to a better solution
    const numbers = [1, 2, 3];
    const rows = {
        1: ['_', '_', '_'],
        2: ['_', '_', '_'],
        3: ['_', '_', '_'],
    };
    // def row/cell [USER]
    let userRow = 2;
    let userCell = 2;
    // def row/cell [AI]
    let aiRow = 2;
    let aiCell = 2;
    // checker if it's an AI move
    let aiStatus = false;
    let freeCells = 9;

    // checker for cell availability
    const checkCell = (rownum, cellnum) => rows[rownum][cellnum] === '_' ? true : false;

    const updateGameBoard = () => {
        console.clear();
        console.log(`Current Field:\n\n${rows[1].join(' ')}\n${rows[2].join(' ')}\n${rows[3].join(' ')}\n`);
    }

    // ai generate values
    const aiGen = () => {
        aiRow = generateValue(1, 3);
        aiCell = generateValue(1, 3);
        if (checkCell(aiRow, aiCell)) {
            rows[aiRow][aiCell] = aiSymbol;
            freeCells -= 1;
            aiStatus = false;
        } else {
            aiGen();
        }
    };

    // user values
    const userGen = () => {
        let validInput = false;
        while (!validInput) {
            userRow = readlineSync.keyInSelect(numbers, '\nChoose a row for your move: ') + 1;
            userCell = readlineSync.keyInSelect(numbers, '\nChoose a cell for your move: ');
            if (userRow < 0 || userCell < 0 || userRow > 3 || userCell > 3) {
                console.log('Entered value is invalid. Possible values: 1-3.\nTry again.');
            } else if (!checkCell(userRow, userCell)) {
                console.log('Unfortunately, selected cell is already taken by your opponent. Chose another one.');
            } else {
                validInput = true;
            }
        }
        rows[userRow][userCell] = userSymbol;
        freeCells -= 1;
        aiStatus = true;
    };

    const nextRound = async () => {
        updateGameBoard();
        // who makes a move first
        if (difficulty === 3) {
            await delay(2000);
            aiStatus = true;
            console.log(`You're playing second, ${username}.`)
            aiGen();
        } else {
            await delay(2000);
            aiStatus = false;
            console.log(`You're playing first, ${username}.`)
        }

        // move status
        aiStatus === true ? aiGen() : userGen();

        // checks for draw
        if (freeCells === 0 && winCheck(rows, userSymbol, aiSymbol) === false) {
            console.log(`It's a Draw!`);
            setTimeout(mainMenu, 4000);
        }

        // win/lose check 
        if (winCheck(rows, userSymbol, aiSymbol)) {
            console.clear();
            console.log('Someone just won.')
        } else {
            // next move
            nextRound();
        }

    };

    nextRound();

    // checks for win condition on board
    const winCheck = (rows, userSymbol, aiSymbol) => {
        const winningCombinations = [
            // horizontal
            [rows[1][0], rows[1][1], rows[1][2]],
            [rows[2][0], rows[2][1], rows[2][2]],
            [rows[3][0], rows[3][1], rows[3][2]],

            // vertical
            [rows[1][0], rows[2][0], rows[3][0]],
            [rows[1][1], rows[2][1], rows[3][1]],
            [rows[1][2], rows[2][2], rows[3][2]],

            // diagonal
            [rows[1][0], rows[2][1], rows[3][2]],
            [rows[1][2], rows[2][1], rows[3][0]],
        ];
        for (const combination of winningCombinations) {
            if (
                combination.every((symbol) => symbol === userSymbol) ||
                combination.every((symbol) => symbol === aiSymbol)
            ) {
                return true;
            }
        }
        return false;
    }
};

export default ticTacToeRules;
