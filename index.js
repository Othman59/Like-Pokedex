const pokemonListElement = document.getElementById('pokemonList');
const pokemonDetailsElement = document.getElementById('pokemonDetails');
const searchInput = document.getElementById('searchInput');

let pokemonList = [];

// ...

// Fonction pour récupérer les détails d'un Pokémon depuis l'API PokeAPI
async function fetchPokemonDetails(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const data = await response.json();
    displayPokemonDetails(data);
  }
// ...
  

// Fonction pour afficher la liste des Pokémon
function displayPokemonList() {
  pokemonListElement.innerHTML = '';

  pokemonList.forEach(pokemon => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.textContent = `${pokemon.name} (#${pokemon.id})`;
    pokemonCard.addEventListener('click', () => fetchPokemonDetails(pokemon));
    pokemonListElement.appendChild(pokemonCard);
   
  });
}

// Fonction pour récupérer les détails d'un Pokémon depuis l'API PokeAPI
async function fetchPokemonDetails(pokemon) {
  const response = await fetch(pokemon.url);
  const data = await response.json();
  displayPokemonDetails(data);
}

// Fonction pour afficher les détails d'un Pokémon
function displayPokemonDetails(pokemon) {
  pokemonDetailsElement.innerHTML = `
    <h2>${pokemon.name} (#${pokemon.id})</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Type: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    <p>Stats:</p>
    <ul>
      ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
    </ul>
  `;
}

// Fonction pour effectuer une recherche de Pokémon
function searchPokemon() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon)}

// Utilisez l'API Fetch pour envoyer une requête GET à l'endpoint des types
fetch('https://pokeapi.co/api/v2/type')
  .then(response => response.json())
  .then(data => {
    // Extraire les noms des types de Pokémon
    const types = data.results.map(type => type.name);
    console.log(types); // Affiche les noms des types de Pokémon
  })
  .catch(error => console.log(error));


