const url = 'https://google-news13.p.rapidapi.com/search?keyword=%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%B0&lr=en-US';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd5083739a0msh6f217dae822a02cp1fa92fjsn6b42a85e696f',
        'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => response.text())
    .then(responce => console.log(responce));