const generateValue = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));

const randomValue = (min: number, max: number): number => {
  const random: number = generateValue(min, max);
  return random > max ? randomValue(min, max) : random;
};

const randomCubes = (): number => {
  const cube1: number = randomValue(1, 6);
  const cube2: number = randomValue(1, 6);
  let playerResult: number = cube1 + cube2;
  if (cube1 === cube2) {
    playerResult *= 2;
  }
  return playerResult;
};

const generateAttempts = (min: number, max: number): number =>
  Math.round((max - min) * 0.1);

export { randomValue, randomCubes, generateAttempts, generateValue };
