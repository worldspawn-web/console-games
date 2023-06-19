const randomValue = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const randomCubes = () => {
    const cube1 = randomValue(1, 6);
    const cube2 = randomValue(1, 6);
    let playerResult = cube1 + cube2;
    if (cube1 === cube2) {
        playerResult *= 2;
    }
    return playerResult;
}

export default randomCubes;