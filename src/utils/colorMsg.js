import clc from 'cli-color';

const successMsg = (msg) => console.log(clc.green(msg));
const failureMsg = (msg) => console.log(clc.red(msg));
const warningMsg = (msg) => console.log(clc.yellow(msg));

export { successMsg, failureMsg, warningMsg };
