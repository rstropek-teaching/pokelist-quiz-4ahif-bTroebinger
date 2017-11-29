let nLink: string;
let pLink: string;

let link: string = 'https://pokeapi.co/api/v2/pokemon/';

getPokemon();

function getPokemon() {
    const pokeList = document.getElementById('pokemons');

    if(pokeList != null){
        fetch(link).then(response => {
            response.json().then(pokemonlist =>{
                let html = '';
                nLink = pokemonlist.next;
                pLink = pokemonlist.previous;

                for(const pokemon of pokemonlist.results) {
                    html += '<tr><td>${pokemon.name.toUpperCase()}</td>';
                    html += '<td><button onclick=details(${pokemon.url})>Details';
                }

                pokeList.innerHTML = html;
            })
        })
    }
}