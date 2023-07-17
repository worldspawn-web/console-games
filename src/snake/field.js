class Field {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.field = [];
  }

  #clearField() {
    this.field = [];
  }

  draw(snake, apple) {
    this.#clearField();

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (apple.x === j && apple.y === i) {
          this.field.push(apple.char);
        }

        snake.snake.forEach((item) => {
          if (item.x === j && item.y === i) {
            this.field.push(snake.char);
          }
        });

        this.field.push(" ");
      }

      this.field.push("\n");
    }

    return this.field.join("");
  }
}

export default Field;
