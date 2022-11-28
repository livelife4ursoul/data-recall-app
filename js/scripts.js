//array of different pokemon objects and individual key values.
let pokemonList = [
    { 
        name: 'Bulbasaur', 
        height: 0.7, 
        types: ['grass', 'poison']
    },
    {
        name: 'Pichu',
        height: 0.3,
        types: ['electric']
    },
    {
        name: 'Charmeleon',
        height: 1.1, 
        types: ['fire']
    },
    {
        name: 'Charizard',
        height: 1.7,
        types: ['fire', 'flying']
    },
    {
        name: 'Butterfree',
        height: 1.1,
        types: ['bug', 'flying']
    },
    {
        name: 'Ninetales',
        height: 1.1, 
        types: ['fire']
    },
    {
        name: 'Parasect',
        height: 1,
        types: ['grass', 'bug']
    },
    {
        name: 'Arbok',
        height: 3.5,
        types: ['poison']
    }
];

//loop to print pokemon objects
for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height >= 3){
        document.write(pokemanList[i].name + ' (height: ' + pokemonList[i].height + ' m) Wow! Big pokemon!' +  '<br>');
    }else if (pokemonList[i].height <= 0.3){
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m) That is a small pokemon.' + '<br>');
    }else {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)' + '<br>');
    }
}