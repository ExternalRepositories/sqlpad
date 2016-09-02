import 'whatwg-fetch';

module.exports = (verb, url, body) => {
    var opts = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if (!verb) throw new Error("You must supply a verb to the fetch wrapper");
    opts.method = verb.toUpperCase();
    if (body) opts.body = JSON.stringify(body);
    return fetch(url, opts).then((response) => {
        return response.json();
    });
}