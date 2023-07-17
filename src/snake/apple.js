class Apple {
  constructor(x, y, char = "@") {
    this.x = x;
    this.y = y;
    this.char = char;
  }

  setNewPosition(field) {
    this.x = Math.floor(Math.random() * field.width);
    this.y = Math.floor(Math.random() * field.height);
  }
}

export default Apple;
