function formatURL(baseURL, login, pass) {
    const fragments = baseURL.split('//');
    return `${fragments[0]}//${login}:${pass}@${fragments[1]}`
}

module.exports = formatURL