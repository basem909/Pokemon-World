/* eslint-disable no-use-before-define */

const getArray = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=60';
  const data = await fetch(url);
  return data.json();
};

const getDataLink = async (id) => {
  const data = await getArray();
  const dataLink = data.results[id - 1].url;
  const pokeDataLink = await fetch(dataLink);
  return pokeDataLink.json();
};

export const getComments = async (e) => {
  const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/comments?item_id=item${e.target.id}`;
  const data = await fetch(commentUrl);
  return data.json();
};

const closePop = () => {
  const sectionCard = document.querySelector('.pokemon-pop');
  const closeBtn = document.querySelector('.fa-solid');
  closeBtn.addEventListener('click', () => {
    sectionCard.style.display = 'none';
  });
};

const showComments = async (e) => {
  const comments = await getComments(e);
  const commentsDiv = document.querySelector('.all-comments');
  commentsDiv.innerHTML = null;
  comments.forEach((comment) => {
    const { username } = comment;
    const creationDate = comment.creation_date;
    const commentLine = comment.comment;
    commentsDiv.insertAdjacentHTML('beforeend', `
    <p class="comment-line"><strong>${creationDate}</strong> ${username}: ${commentLine}<p>`);
  });
};

export const counterComment = async (e) => {
  const comments = await getComments(e);
  const numberComments = comments.length;
  return numberComments;
};

export const displayPokemon = async (e) => {
  const data = await getDataLink(e.target.id);
  const { name } = data;
  const nameUp = name.charAt(0).toUpperCase() + name.slice(1);
  const img = data.sprites.other.dream_world.front_default;
  const type = data.types[0].type.name;
  const typeUp = type.charAt(0).toUpperCase() + type.slice(1);
  const { abilities } = data;
  const abilitieOneUp = abilities[0].ability.name.charAt(0).toUpperCase()
  + abilities[0].ability.name.slice(1);
  const abilitieTwoUp = abilities[1].ability.name.charAt(0).toUpperCase()
  + abilities[1].ability.name.slice(1);
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  const commentsCounter = await counterComment(e);
  const sectionCard = document.querySelector('.pokemon-pop');
  sectionCard.innerHTML = null;
  sectionCard.insertAdjacentHTML('afterbegin', `
  <div class="fixed-item">
        <div class="body-card">
          <i class="fa-solid fa-xmark"></i>
          <div class="poke-img-div">
            <img src="${img}" alt="" class="poke-img">
          </div>
          <div class="poke-data">
            <h2 class="poke-name">${nameUp}</h2>
            <div class="poke-description-card">
              <ul>
                <li class="description-title">Type:</li>
                <li class="poke-type li">${typeUp}</li>
              </ul>
              <ul>
                <li class="description-title">Abilities</li>
                <li class="ability-one li">${abilitieOneUp}</li>
                <li class="ability-two li">${abilitieTwoUp}</li>
              </ul>
              <ul>
                <li class="description-title">Basic Stats</li>
                <li class="hp li"><strong>HP:</strong> ${hp}</li>
                <li class="attack li"><strong>Attack:</strong> ${attack}</li>
                <li class="defense li"><strong>Defense</strong>: ${defense}</li>
                <li class="speed li"><strong>Speed</strong>: ${speed} </li>
              </ul>
            </div>
          </div>
          <div class="display-comment">
          <h3 class="comment-counter"> Comment (${commentsCounter || 0})</h3>
          <div class="all-comments"></div>
        </div>
        <h3 class="comment-title">Add a comment</h3>
        <form id="comment-form">
          <input class="username" type="text" placeholder="insert your username" required="">
          <textarea id="textarea" cols="20" rows="5" placeholder="Enter your comment" required=""></textarea>
          <button type="submit" class="comment-btn" id="${e.target.id}">Comment</button>
        </form>
      </div>`);
  const bodyCard = document.querySelector('.body-card');
  if (type === 'grass') {
    bodyCard.classList.add('grass');
    bodyCard.classList.remove('water');
    bodyCard.classList.remove('fire');
  } else if (type === 'water') {
    bodyCard.classList.add('water');
    bodyCard.classList.remove('grass');
    bodyCard.classList.remove('fire');
  } else {
    bodyCard.classList.add('fire');
    bodyCard.classList.remove('water');
    bodyCard.classList.remove('grass');
  }
  closePop();
  showComments(e);
  postComment(e);
};

const postComment = async () => {
  const commentBtn = document.querySelector('.comment-btn');
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dXDIQAnIOHUjELoXSV9S/comments';
  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = document.querySelector('.username');
    const textArea = document.getElementById('textarea');
    const id = `item${e.target.id}`;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: userName.value,
        comment: textArea.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    showComments(e);
    e.target.parentElement.reset();
    displayPokemon(e);
  });
};