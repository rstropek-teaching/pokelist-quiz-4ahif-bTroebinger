"use strict";
var nLink;
var pLink;
var link = 'https://pokeapi.co/api/v2/pokemon/';
getPokemon();
function getPokemon() {
    var pokeList = document.getElementById('pokemons');
    if (pokeList != null) {
        fetch(link).then(function (response) {
            response.json().then(function (pokemonlist) {
                var html = '';
                nLink = pokemonlist.next;
                pLink = pokemonlist.previous;
                for (var _i = 0, _a = pokemonlist.results; _i < _a.length; _i++) {
                    var pokemon = _a[_i];
                    html += '<tr><td>${pokemon.name.toUpperCase()}</td>';
                    html += '<td><button onclick=details(${pokemon.url})>Details';
                }
                pokeList.innerHTML = html;
            });
        });
    }
}
