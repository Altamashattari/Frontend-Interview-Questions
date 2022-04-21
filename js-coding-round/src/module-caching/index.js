const cache = new Map();

const factorial = (n) => {
    if(n < 2) return 1;
    if(cache.has(n)) {
        console.log(`using caching for n=${n}`);
        return cache.get(n);
    }
    cache.set(n, n * factorial(n-1));
    return cache.get(n);
}

const testFactorial = () => {
    console.log(factorial(10));
    console.log(factorial(5));
}

module.exports = { testFactorial };