/* eslint-disable no-await-in-loop */

const container = document.querySelector('.items-container');
const pokemonList = 'https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0';
const likeApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/likes';
let pokemons = [];

const getData = async (Api) => {
  const stored = await fetch(Api);
  const data = stored.json();
  return data;
};

export const pokemnData = async () => {
  const data = await getData(pokemonList);
  pokemons = data.results;
  for (let i = 0; i < pokemons.length; i += 1) {
    const pokemonURL = pokemons[i].url;
    const pokemonDetails = await getData(pokemonURL);
    pokemons[i].id = pokemonDetails.id;
    pokemons[i].img = pokemonDetails.sprites.other.dream_world.front_default;
  }
  return pokemons;
};

const likesShow = async () => {
  const likes = await getData(likeApi);
  const pokemons = await pokemnData();
  for (let i = 0; i < likes.length; i += 1) {
    for (let x = 0; x < pokemons.length; x += 1) {
      if (Number(likes[i].item_id) === pokemons[x].id) {
        pokemons[x].likes = likes[i].likes;
      }
    }
  }
  return pokemons;
};

const addlike = async (button) => {
  await fetch(likeApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: button.id }),
  });
  button.innerHTML = `<svg class="like-icon red" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
<desc>Created with Fabric.js 1.7.22</desc>
<defs>
</defs>
<g transform="translate(128 128) scale(0.72 0.72)" style="">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)" >
<path d="M 45 10.715 c 4.77 -4.857 11.36 -7.861 18.64 -7.861 C 78.198 2.854 90 14.87 90 29.694 c 0 35.292 -36.812 34.15 -45 57.453 C 36.812 63.843 0 64.986 0 29.694 C 0 14.87 11.802 2.854 26.36 2.854 C 33.64 2.854 40.23 5.858 45 10.715 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(211,28,28); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</g>
</svg>`;
  button.setAttribute('disabled', '');
  const counterLikes = document.getElementById(`${button.id}counter`);
  const likes = counterLikes.innerHTML.split(' ');
  likes[0] = Number(likes[0]) + 1;
  counterLikes.innerHTML = likes.join(' ');
};

const likeIcon = () => {
  const likeButton = document.querySelectorAll('button');
  likeButton.forEach((button) => {
    button.addEventListener('click', () => {
      addlike(button);
    });
  });
};

const pokemonShow = async () => {
  const pokemons = await likesShow();
  container.innerHTML = '';
  for (let i = 0; i < pokemons.length; i += 1) {
    container.innerHTML += `<article class="pokemon-card">
        <img src="${pokemons[i].img}" alt="${
  pokemons[i].name
}" class="pokemon-img"/>
        <h2 class="pokemon-name">${pokemons[i].name.toUpperCase()}</h2>
        <button class="like-button" id="${pokemons[i].id}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="256"
        height="256"
        viewBox="0 0 256 256"
        xml:space="preserve"
        class="like-icon"
      >
        <desc>Created with Fabric.js 1.7.22</desc>
        <defs></defs>
        <g transform="translate(128 128) scale(0.72 0.72)" style="">
          <g
            style="
              stroke: none;
              stroke-width: 0;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-miterlimit: 10;
              fill: none;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
          >
            <path
              d="M 45 86.304 c -0.459 0 -0.919 -0.105 -1.342 -0.316 C 12.259 70.287 0.527 47.557 0.019 31.52 C -0.325 20.69 4.171 11.488 12.045 6.905 C 20.918 1.743 32.568 2.841 45 9.968 c 12.432 -7.127 24.085 -8.225 32.955 -3.063 c 7.874 4.583 12.369 13.785 12.026 24.615 c -0.509 16.037 -12.24 38.768 -43.64 54.468 C 45.919 86.198 45.46 86.304 45 86.304 z M 24.426 9.698 c -3.46 0 -6.615 0.793 -9.363 2.393 c -6.026 3.507 -9.324 10.52 -9.047 19.239 C 6.462 45.415 16.968 65.466 45 79.939 C 73.032 65.466 83.537 45.415 83.984 31.33 c 0.276 -8.719 -3.021 -15.732 -9.048 -19.239 c -7.25 -4.219 -17.325 -2.825 -28.373 3.924 c -0.959 0.587 -2.167 0.587 -3.127 0 C 36.577 11.824 30.092 9.698 24.426 9.698 z"
              style="
                stroke: none;
                stroke-width: 1;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: rgb(0, 0, 0);
                fill-rule: nonzero;
                opacity: 1;
              "
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </g>
      </svg>
    </button>
        <p class="likes-counter" id="${pokemons[i].id}counter">${
  pokemons[i].likes || 0
} likes</p>
        <a href="#" class="comment" id="${
  pokemons[i].id
}">Comments</a></article>`;
  }
  likeIcon();
};

const itemCounter = async () => {
  const pokemons = await pokemnData();
  const pokemonCounter = document.querySelector('.poke-counter');
  pokemonCounter.innerHTML = `${pokemons.length} Pokemons`;
};

itemCounter();
export default pokemonShow;
