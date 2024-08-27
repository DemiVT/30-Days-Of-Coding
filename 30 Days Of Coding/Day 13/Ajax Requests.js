// Fetch API
fetch('https://api.github.com/users/octocat')
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML = `<h1>${data.login}</h1>`;
  })
  .catch(error => console.error('Error:', error));
