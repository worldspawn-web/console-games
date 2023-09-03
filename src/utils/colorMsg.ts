import clc from 'cli-color';

const successMsg = (msg: string) => console.log(clc.green(msg));
const failureMsg = (msg: string) => console.log(clc.red(msg));
const warningMsg = (msg: string) => console.log(clc.yellow(msg));

export { successMsg, failureMsg, warningMsg };
