async function getFirstRepository(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    const reposResponse = await  fetch(userData.repos_url);
    const repositories = await reposResponse.json();
    return repositories[0].name;
}

(async () => {
    const result = await getFirstRepository("KarlaKaplan");
    console.log(result);
})();