/*
    Build an async method that calls itself n amount of times until success. 
    Return fail if it could not succeed after n times.
*/
/**
 * 
 * @param {() => Promise<any>} job 
 * @param {number} retryCount
 * @returns {promise}
 */
const retry = async (job, retryCount = 3) => {
    try {
        const res = await job();
        return res;
    } catch (error) {
        if (retryCount > 0) {
            return retry(job, retryCount - 1);
        }
        throw error;
    }
}

const job = (() => {
    let invokeCounter = 0;
    return () => {
        invokeCounter++;
        if (invokeCounter < 4) throw new Error('some error');
        return Promise.resolve(invokeCounter);
    }
})();

const retryTest = () => {
    return retry(job, 2).then(console.log).catch(console.error);
}

module.exports = { retryTest };
