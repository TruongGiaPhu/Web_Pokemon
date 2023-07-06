const initState = {
    species: {},
    evolutions: [],
    pokeEvolutions1: [],
    pokeEvolutions2: [],
    pokeEvolutions3: [],
    prev: {},
    next: {},
    isLoading: true,
};

const pokeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_SPECIES':
            return {
                ...state,
                species: action.payload,
            };
        case 'GET_EVOLUTIONS':
            return {
                ...state,
                evolutions: action.payload,
            };
        case 'GET_POKEMON_EVOLUTIONS1':
            return {
                ...state,
                pokeEvolutions1: action.payload,
            };
        case 'GET_POKEMON_EVOLUTIONS2':
            return {
                ...state,
                pokeEvolutions2: action.payload,
            };
        case 'GET_POKEMON_EVOLUTIONS3':
            return {
                ...state,
                pokeEvolutions3: action.payload,
            };
        case 'PREV_POKE':
            return {
                ...state,
                prev: action.payload,
            };
        case 'NEXT_POKE':
            return {
                ...state,
                next: action.payload,
            };
        default:
            return state;
    }
};

export default pokeReducer;
