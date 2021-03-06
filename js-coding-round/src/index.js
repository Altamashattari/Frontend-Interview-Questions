const { askUser } = require('./askUser');
const { testFetchAPI } = require('./fetch-api');
const { testFactorial } = require('./module-caching');
const { retryTest } = require('./utils/retry');
const { testStream } = require('./utils/stream');

const optionCallbackMap = {
    '1': testStream,
    '2': retryTest,
    '3': testFactorial,
    '4': testFetchAPI,
}

async function main() {
    const answer = await askUser(`
        Please choose an option:
        1. Test Stream
        2. Retry
        3. Test module caching using factorial
        4. Test Fetch API in Node ( Only available in node 18)
    `);

    if(optionCallbackMap[answer]) {
       return optionCallbackMap[answer]();
    }

    throw new Error('Invalid Option Entered!');
}

main();
