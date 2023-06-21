const generateValue = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const randomValue = (min, max) => {
    const random = generateValue(min, max);
    return random > max ? randomValue(min, max) : random;
}

const randomCubes = () => {
    const cube1 = randomValue(1, 6);
    const cube2 = randomValue(1, 6);
    let playerResult = cube1 + cube2;
    if (cube1 === cube2) {
        playerResult *= 2;
    }
    return playerResult;
}

const generateAttempts = (min, max) => Math.round((max - min) * 0.1);

export { randomValue, randomCubes, generateAttempts };