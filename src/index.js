// const catItem = document.querySelector('.cat-item');
const catSelectList = document.querySelector('.breed-select');
const infoAboutCats = document.querySelector('.cat-info');

const BASE_URL = 'https://api.thecatapi.com/v1/';
const ENDPOINT = 'breeds';
const API_KEY = 'live_LrsKKVTIbLaP8x5hRvNZgGtzOEJSHy0wuAgxvckTv8KCqqb49gnQkiqK0c8H1h3L';

function getCatsBreed () {
    return fetch(`${BASE_URL}${ENDPOINT}?api_key${API_KEY}`)
    .then((resp) => {
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }

        return resp.json();
    })
}

getCatsBreed()
    .then((data) => catSelectList.insertAdjacentHTML('beforeend', createCatsList(data)))
    // .then((data) => console.log(data))
    .catch((err) => console.log(err))


function createCatsList (arr) {
    return arr.map(({name, id}) => `<option value="${id}">${name}</option>`).join()
}

catSelectList.addEventListener('change', getValue);

function getValue () {
    let selectedValue = catSelectList.value;
    return selectedValue;
}


function findBreed () {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${value}`)

    .then((resp) => {
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }

        return resp.json();
    })
    
}
