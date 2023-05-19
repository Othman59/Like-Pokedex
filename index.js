const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const pokemonList = document.getElementById('pokemonList');
const pokemonDetails = document.getElementById('pokemonDetails');

// Fonction pour obtenir les détails d'un Pokémon depuis l'API PokeAPI en utilisant son nom ou son identifiant
async function getPokemonDetails(identifier) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    const data = await response.json();
  
    const types = data.types.map(type => type.type.name).join(', ');
    const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join('<br>');
  
    const pokemonHtml = `
      <h2>${data.name} (#${data.id})</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><strong>Type:</strong> ${types}</p>
      <p><strong>Statistiques:</strong><br>${stats}</p>
    `;
  
    pokemonDetails.innerHTML = pokemonHtml;
  }
  