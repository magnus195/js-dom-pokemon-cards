let cards = document.querySelector('.cards');

for (let i = 0; i < data.length; i++) {
    cards.prepend(generateCard(data[i]));
}

function generateCard(pokemon) {
    const card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
  <h2 class="card--title">${pokemon.name}</h2>
  
  <img
    alt="${pokemon.name} sprite"
    width="256"
    height="256"
    class="card--img primary-img"
    src="${pokemon.sprites.other["official-artwork"].front_default}"
  />
  
  <img
    alt="${pokemon.name} sprite"
    width="256"
    height="256"
    class="card--img secondary-img"
    src="${pokemon.sprites.other["dream_world"].front_default}"
  />
  <ul class="card--text">
    <li>HP: ${getStat(pokemon, "hp")}</li>
    <li>ATTACK: ${getStat(pokemon, "attack")}</li>
    <li>DEFENSE: ${getStat(pokemon, "defense")}</li>
    <li>SPECIAL-ATTACK: ${getStat(pokemon, "special-attack")}</li>
    <li>SPECIAL-DEFENSE: ${getStat(pokemon, "special-defense")}</li>
    <li>SPEED: ${getStat(pokemon, "speed")}</li>
  </ul>
  <h3>Featured in:</h3>
  <p>${formatGames(pokemon)}</p>
    `;

    card.addEventListener('hover', () => {
            card.classList.toggle('hover');
        }
    );
    return card;
}

function getStat(pokemon, key) {
    return pokemon.stats.find(stat => stat.stat.name === key).base_stat;
}

// This function capitalizes the first letter of each game name, and replaces hyphens with spaces
// This is to avoid unnecessary API calls, as I don't know anything about pokemon
function formatGames(pokemon) {
    return pokemon.game_indices.map(game => capitalizeWord(game.version.name).replaceAll("-", " ")).join(", ");
}

function capitalizeWord(w) {
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
}
