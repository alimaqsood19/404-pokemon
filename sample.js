const spanEl = document.querySelectorAll('.pokemon-name');
const imageEl = document.querySelector('#pokemon-image');
const btnEl = document.querySelector('#search-btn');
const inputEl = document.querySelector('#name-input');
const moveEl = document.querySelector('#pokemon-move');
const moveList = document.querySelector('#move-list');

const randomNum = Math.floor(Math.random() * 100);

btnEl.addEventListener('click', function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputEl.value}`)
        .then(function (response) {

            const redirectUrl = './404.html'
            if (response.status === 404) {
                // alert('You searched for an incorrect Pokemon!');
                // spanEl[0].textContent = 'INCORRECT POKEMON!';
                document.location.replace(redirectUrl)
            }

            return response.json(); //Preliminary step that modifies to be traversable
        }).then(function (data) {
            if (data.name) {
                for (let span of spanEl) {
                    span.textContent = data.name.toUpperCase();
                }
                imageEl.setAttribute('src', data.sprites.front_default)
                moveEl.textContent = data.moves[randomNum].move.name.toUpperCase();
                const listEl = document.createElement('ul');

                for (let i = 0; i < 5; i++) {
                    const listItem = document.createElement('li');
                    listItem.textContent = data.moves[i].move.name
                    listEl.append(listItem);
                }

                moveList.append(listEl);

            }
        })
})


