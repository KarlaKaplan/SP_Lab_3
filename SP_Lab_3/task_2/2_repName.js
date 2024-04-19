function getFirstRepository(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json();
        })
        .then(userData => {
            const repositoriesUrl = userData.repos_url;
            return fetch(repositoriesUrl);
        })
        .then(response => {
            return response.json();
        })
        .then(repositories => {
            return (repositories[0].name);
        });
}

getFirstRepository("KarlaKaplan").then(result => console.log(result))
