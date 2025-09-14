// Perform a GET request to fetch a post
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.onload = function () {
    console.log('GET response:', xhr.responseText);
};
xhr.send();
xhr.onerror = function () {
    console.error('Error during GET request');
};

// Perform a POST request to create a new post
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhr.onload = function () {
    console.log('POST response:', xhr.responseText);
};
xhr.send(JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }));
xhr.onerror = function () {
    console.error('Error during POST request');
};

// Perform a PUT request to update an existing post
xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhr.onload = function () {
    console.log('PUT response:', xhr.responseText);
};
xhr.send(JSON.stringify({ id: 1, title: 'updated', body: 'baz', userId: 1 }));
xhr.onerror = function () {
    console.error('Error during PUT request');
};

// Perform a PATCH request to partially update a post
xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
xhr.onload = function () {
    console.log('PATCH response:', xhr.responseText);
};
xhr.send(JSON.stringify({ title: 'patched' }));
xhr.onerror = function () {
    console.error('Error during PATCH request');
};

// Perform a DELETE request to remove a post
xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.onload = function () {
    console.log('DELETE response:', xhr.responseText);
};
xhr.send();
xhr.onerror = function () {
    console.error('Error during DELETE request');
};
