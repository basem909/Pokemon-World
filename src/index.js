import { displayPokemon } from './pokePop.js';
import pokemonShow from './home.js';
import './style.css';

const displayPop = async () => {
  await pokemonShow();
  const commentBtn = document.querySelectorAll('.comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const pokePop = document.querySelector('.pokemon-pop');
      pokePop.style.display = 'block';
      displayPokemon(e);
    });
  });
};

pokemonShow();
displayPop();
