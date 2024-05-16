// Step 1: Fetch
// Step 2: Create element and display pokemon name
// Step 3: in fetch call, give paragraph text content and append to container

const containerEl = document.querySelector('#container')
const paraEl = document.createElement('p');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function (response) {
        console.log(response.status);
        if (response.status === 404) {
            alert('You have searched for an incorrect Pokemon!');
        }
        return response.json()
    }).then(function (data) {
        console.log(data);
        paraEl.textContent = data.name;
        containerEl.appendChild(paraEl);
    })