const readline = require('readline');

const askUser = (question = '') => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

module.exports = { askUser };

