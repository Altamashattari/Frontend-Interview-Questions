/*
Create a basic implementation of a streams API. 
The user should be able to push values to a stream, 
and subscribe to values that are pushed to that stream.

For example,
const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);

Should return
2
4
6
*/
class Stream {
    #subscribers;

    constructor() {
        this.#subscribers = [];
    }
    /**
     * @param {(value) => void} cb 
     */
    subscribe(cb) {
        this.#subscribers.push(cb);
    }

    push(value) {
        this.#subscribers.forEach(subscriberCallback => subscriberCallback(value));
    }
}

const testStream = () => {
    const z = new Stream();
    z.subscribe((value) => console.log(value));
    z.subscribe((value) => console.log(value * 2));
    z.subscribe((value) => console.log(value * 3));
    z.push(2);
}

module.exports = { Stream, testStream };