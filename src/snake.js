import boxen from "boxen";
import readlineSync from "readline-sync";
import { gameStarts, gameEnds, readyChecker } from "./utils/readyChecker.js";
import Apple from "./snake/apple.js";
import Snake from "./snake/snake.js";
import Field from "./snake/field.js";

const width = 20;
const height = 10;
const apple = new Apple(
  Math.floor(Math.random() * width),
  Math.floor(Math.random() * height)
);
const snake = new Snake(width / 2, height / 2);
const field = new Field(width, height);

const directions = {
  a: "left",
  s: "down",
  d: "right",
  w: "up",
};

let gameOver = false;

const snakeRules = (username) => {
  console.clear();
  console.log(
    boxen("Snake is a computer game with roots in 1970s systems.", {
      title: "Snake",
      textAlignment: "center",
      titleAlignment: "center",
      borderStyle: "round",
    })
  );
  const isReady = readyChecker();
  if (isReady) {
    gameStarts();
    snakeGame(username);
  } else {
    gameEnds();
  }
};

const snakeGame = (username) => {
  let key;

  while (!gameOver) {
    key = readlineSync.keyIn("", {
      hideEchoBack: true,
      mask: "",
      limit: "asdw",
    });

    update(directions[key]);
  }

  if (gameOver) {
    mainMenu(username);
  }
};

const update = (direction) => {
  snake.setDirection(direction);
  snake.moveHead(field);

  if (snake.snake[0].x === apple.x && snake.snake[0].y === apple.y) {
    apple.setNewPosition(field);
    snake.setLevel();
  }

  draw();
};

const draw = () => {
  console.clear();
  console.log(
    boxen(field.draw(snake, apple), {
      borderStyle: "round",
      title: "Snake",
      textAlignment: "center",
      titleAlignment: "center",
    })
  );
};

export default snakeRules;
