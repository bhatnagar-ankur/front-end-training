// Example with a hypothetical API that requires an API key
// const apiKey = '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';

const apiKey = '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';

// Store your token securely (never hardcode in production)
const githubToken = apiKey;

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
