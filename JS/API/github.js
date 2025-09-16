// Store your token securely (never hardcode in production)
const githubToken = 'apiKey';

// Example: Get authenticated user information
fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
    }
})
    .then(response => {
        console.log('Response:', response);
        if (!response.ok) {
            console.error('Error Status Text:', response.statusText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(user => {
        console.log('Authenticated user:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
