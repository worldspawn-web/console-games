const randomValue1x6 = () => Math.round(Math.random() * 6);

const randomCubes = () => {
    const cube1 = randomValue1x6();
    const cube2 = randomValue1x6();
    let playerResult = cube1 + cube2;
    if (cube1 === cube2) {
        playerResult *= 2;
    }
    return playerResult;
}

export default randomCubes;