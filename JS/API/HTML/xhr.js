const output = document.getElementById('output');

function log(title, data) {
    output.textContent += `\n=== ${title} ===\n${JSON.stringify(data, null, 2)}\n`;
}

// GET
(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://httpbin.org/get?user=2', true);
    xhr.onload = () => log('XHR GET', JSON.parse(xhr.responseText));
    xhr.send();
})();

// POST
(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://httpbin.org/post', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => log('XHR POST', JSON.parse(xhr.responseText));
    xhr.send(JSON.stringify({ name: 'Alice', job: 'Engineer' }));
})();

// PUT
(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://httpbin.org/put', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => log('XHR PUT', JSON.parse(xhr.responseText));
    xhr.send(JSON.stringify({ name: 'Alice', job: 'Manager' }));
})();

// PATCH
(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', 'https://httpbin.org/patch', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => log('XHR PATCH', JSON.parse(xhr.responseText));
    xhr.send(JSON.stringify({ job: 'CTO' }));
})();

// DELETE
(function () {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'https://httpbin.org/delete', true);
    xhr.onload = () => log('XHR DELETE', JSON.parse(xhr.responseText));
    xhr.send();
})();
