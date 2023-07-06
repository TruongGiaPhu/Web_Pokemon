import axios from 'axios';

const getPokemon = async () => {
    const results = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return results.data.results;
};
console.log('🚀 ~ file: getApi.js ~ line 4 ~ getPokemon', getPokemon);
export default getPokemon;
