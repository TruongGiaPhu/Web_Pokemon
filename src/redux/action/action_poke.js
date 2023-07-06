import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const getSpecies = pro => {
    return {
        type: 'GET_SPECIES',
        payload: pro,
    };
};

const getEvolutions = pro => {
    return {
        type: 'GET_EVOLUTIONS',
        payload: pro,
    };
};

const getPokemonEvolutions1 = pro => {
    return {
        type: 'GET_POKEMON_EVOLUTIONS1',
        payload: pro,
    };
};

const getPokemonEvolutions2 = pro => {
    return {
        type: 'GET_POKEMON_EVOLUTIONS2',
        payload: pro,
    };
};

const getPokemonEvolutions3 = pro => {
    return {
        type: 'GET_POKEMON_EVOLUTIONS3',
        payload: pro,
    };
};

const prevPoke = pro => {
    return {
        type: 'PREV_POKE',
        payload: pro,
    };
};

const nextPoke = pro => {
    return {
        type: 'NEXT_POKE',
        payload: pro,
    };
};

export const loadSpecies = url => {
    return function (dispatch) {
        axios
            .get(url)
            .then(res => {
                dispatch(getSpecies(res.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};

export const loadEvolutions = url => {
    return function (dispatch) {
        axios
            .get(url)
            .then(res => {
                dispatch(getEvolutions(res.data.chain));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};

export const loadPokemonEvolutions = evo => {
    return function (dispatch) {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${evo[0]}`)
            .then(response => {
                dispatch(getPokemonEvolutions1(response.data));
            });

        if (evo[1] !== undefined) {
            const evol1 = [];
            evo[1].forEach(element => {
                axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${element}`)
                    .then(response => {
                        evol1.push(response.data);
                    });
                dispatch(getPokemonEvolutions2(evol1));
            });
        } else {
            dispatch(getPokemonEvolutions2([]));
        }

        if (evo[2] !== undefined) {
            const evol2 = [];
            evo[2].forEach(element => {
                axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${element}`)
                    .then(response => {
                        evol2.push(response.data);
                    });
                dispatch(getPokemonEvolutions3(evol2));
            });
        } else {
            dispatch(getPokemonEvolutions3([]));
        }
    };
};
export const loadPrev = id => {
    return function (dispatch) {
        var prevId;
        if (id === 0) {
            prevId = 900;
        } else {
            prevId = id;
        }
        axios
            .get(url + prevId)
            .then(res => {
                dispatch(prevPoke(res.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};

export const loadNext = id => {
    return function (dispatch) {
        var nextId;
        if (id > 900) {
            nextId = 1;
        } else {
            nextId = id;
        }
        axios
            .get(url + nextId)
            .then(res => {
                dispatch(nextPoke(res.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};
