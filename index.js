const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const pokemonList = document.getElementById('pokemonList');
const pokemonDetails = document.getElementById('pokemonDetails');

// Fonction pour obtenir la liste des Pokémon depuis l'API PokeAPI
async function getPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await response.json();

  const pokemon = data.results;
  pokemon.forEach(p => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.innerText = `${p.name} (#${getPokemonIdFromUrl(p.url)})`;

    pokemonCard.addEventListener('click', () => {
      getPokemonDetails(p.name);
    });

    pokemonList.appendChild(pokemonCard);
  });
}

// Fonction pour obtenir les détails d'un Pokémon depuis l'API PokeAPI
async function getPokemonDetails(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
  
    const pokemonHtml = `
      <h2>${data.name} (#${data.id})</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <table>
        <tr>
          <th>Statistique</th>
          <th>Valeur</th>
        </tr>
        ${data.stats
          .map(
            stat =>
              `<tr><td>${stat.stat.name}</td><td>${stat.base_stat}</td></tr>`
          )
          .join('')}
      </table>
    `;
  
    pokemonDetails.innerHTML = pokemonHtml;
  }
  
