const testFetchAPI = () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos';

    // GET REQUEST - won't run in nodejs for now
    fetch(URL)
        .then(res => res.json())
        .then((data) => console.log(data))
        .catch(console.error);

    // POST REQUEST
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    // error handling
    .then(response => {
        if(response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong!');
            });
        }
    })

}

module.exports = { testFetchAPI };