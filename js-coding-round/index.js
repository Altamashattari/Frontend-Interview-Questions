const { askUser } = require('./askUser');
const { testFactorial } = require('./module-caching');
const { retryTest } = require('./utils/retry');
const { testStream } = require('./utils/stream');

const optionCallbackMap = {
    '1': testStream,
    '2': retryTest,
    '3': testFactorial,
}

async function main() {
    const answer = await askUser(`
        Please choose an option:

        1. Test Stream
        2. Retry
        3. test module caching using factorial
    `);

    if(optionCallbackMap[answer]) {
       return optionCallbackMap[answer]();
    }

    throw new Error('Invalid Option Entered!');
}

main();
