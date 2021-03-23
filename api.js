function fetchPokemon(id) {
  let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}/`; 
  fetch(pokemonURL)
  .then(response => response.json())
  .then(data => {
    displayResults(data)
    })
  };

  let x;
  for(i = 0; i < 300; i++) {
    x = Math.floor(Math.random()*100)
    fetchPokemon(x)
  };

  
function displayResults(json) {
  console.log('Display: ', json);
  let name = json.name;
  let number = json.id;
  let type = json.types[0].type.name;
  let pokemon = [name, number, type]
  document.getElementById('image').innerHTML = '<img src="'+json.sprites.front_default+'">';
  document.getElementById('name').innerText = name;
  document.getElementById('number').innerText  = number;
  document.getElementById('type').innerText  = type

// for (number in pokemon) {
//   displayResults();
  
// }
}; 

function pressBtn() {
  console.log(`pressBtn`);
  let y;
  for(i = 0; i < 300; i++) {
    y = Math.floor(Math.random()*100)
    fetchPokemon(y)
  };
  // fetchPokemon();
  
};
// const nextBtn = document.getElementById('next');
pressBtn.addEventListener('next', displayResults());


