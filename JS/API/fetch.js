//#region handleResponse function
/**
 * Handles fetch API responses.
 * Throws an error if response is not OK, otherwise returns parsed JSON.
 * @param {Response} response - Fetch API response object
 * @returns {Promise<Object>} - Parsed JSON data
 */
function handleResponse(response) {
    if (!response.ok) {
        // If response is not OK, parse error and throw with details
        return response.json().then(err => {
            throw new Error(`API error: ${response.status} ${response.statusText} - ${JSON.stringify(err)}`);
        });
    }
    // If response is OK, parse and return JSON
    return response.json();
}
//#endregion

//#region GET request
// Fetch a single post (GET)
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(handleResponse)
    .then(data => console.log('GET success:', data))
    .catch(error => console.error('GET error:', error));
//#endregion

//#region POST request
// Create a new post (POST)
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
    .then(handleResponse)
    .then(data => console.log('POST success:', data))
    .catch(error => console.error('POST error:', error));
//#endregion

//#region PUT request
// Update a post completely (PUT)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'updated', body: 'baz', userId: 1 })
})
    .then(handleResponse)
    .then(data => console.log('PUT success:', data))
    .catch(error => console.error('PUT error:', error));
//#endregion

//#region PATCH request
// Update a post partially (PATCH)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'patched' })
})
    .then(handleResponse)
    .then(data => console.log('PATCH success:', data))
    .catch(error => console.error('PATCH error:', error));
//#endregion

//#region DELETE request
// Delete a post (DELETE)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(handleResponse)
    .then(data => console.log('DELETE success:', data))
    .catch(error => console.error('DELETE error:', error));
//#endregion
