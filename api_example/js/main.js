// Function to get our data

const getData = async (pokemon) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response);
    return response.data;
}

// Create a function that will display our data in HTML
const createList = (id, firstName, lastName) =>{
    const html = `<a href="/kekambas-detail/${id}" class="list-group-item list-group-item-action list-group-item-light" id=${id}>${firstName} ${lastName}</a>`;
    document.querySelector('.kekambas-list').insertAdjacentHTML('beforeend', html);
}

// Function to load data and display HTML
const loadData = async () => {
    const kekambasSection = document.getElementsByClassName('kekambas-list')[0].childElementCount
    if (kekambasSection){
        console.warn('You already have data')
    }else{
        const kekambas = await getData();
        console.log(kekambas);
        kekambas.forEach((element) =>{
            createList(element.id, element.first_name, element.last_name)
        });
    }
}


// Function to clear data from HTML
const clearData = () => {
    document.getElementsByClassName('kekambas-list')[0].innerHTML = '';
}