fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'Partially Updated Post',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.error('Error:', error));