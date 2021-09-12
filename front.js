const remoteHost = 'http://127.0.0.1:8000/';

document.cookie = 'customLanguage=testLanguage';

(async () => {
    try {
        const requestResult = await fetch(remoteHost, {
            'credentials': 'include'
        });
        const response = await requestResult.json();

        showResult(response);
    } catch (error) {
        showResult(error);
    }
})();

function showResult(response) {
    document.getElementById('content').innerHTML = response.toString() === '[object Object]' ? JSON.stringify(response, null, '\t') : response;
}
