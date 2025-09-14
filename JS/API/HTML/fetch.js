const output = document.getElementById('output');

function log(title, data) {
    output.textContent += `\n=== ${title} ===\n${JSON.stringify(data, null, 2)}\n`;
}

// GET
fetch('https://httpbin.org/get?user=2')
    .then(res => res.json())
    .then(data => log('Fetch GET', data));

// POST
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Bob', job: 'Designer' })
})
    .then(res => res.json())
    .then(data => log('Fetch POST', data));

// PUT
fetch('https://httpbin.org/put', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Bob', job: 'Lead Designer' })
})
    .then(res => res.json())
    .then(data => log('Fetch PUT', data));

// PATCH
fetch('https://httpbin.org/patch', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ job: 'CTO' })
})
    .then(res => res.json())
    .then(data => log('Fetch PATCH', data));

// DELETE
fetch('https://httpbin.org/delete', { method: 'DELETE' })
    .then(res => res.json())
    .then(data => log('Fetch DELETE', data));
