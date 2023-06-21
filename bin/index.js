#!/usr/bin/env node
import readlineSync from 'readline-sync';
import mainMenu from './main.js';

const username = readlineSync.question('Your nickname: ');
console.log(`Nice to meet you, ${username}...`);
setTimeout(() => mainMenu(username), 2000);
