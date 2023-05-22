
// Fonction pour obtenir les détails d'un Pokémon depuis l'API PokeAPI

const pokedex = document.getElementById("pokedex");

console.log(pokedex);

const fecthPokemon = () => {
  const promises = [];
  for (let i = 1; i < 150; i++){
    const url = `https://pokeapi.co/api/v2/pokemon//${i}`;
    promises.push(fetch(url).then((res) => res.json()));
}

  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map((type) => type.type.name).joint(', ')
    }));
    displayPokemon(pokemon);

  });
}; 

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon.map (pokemon =>`
  <li>
    <img class="card-image" src ="${pokemon.image}"/>
    <h2 class="card-title>${pokeman.id}. ${pokeman.name}</h2>
    <p class="card-subtitle">Type: ${pokeman.type}</p>
  </li>

  `
    )
  
    .joint(' ')
  pokedex.innerHTML = pokemonHTMLString;
};

fecthPokemon();


