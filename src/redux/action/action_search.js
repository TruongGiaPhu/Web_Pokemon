const search = pro => {
    return {
        type: 'SEARCH',
        payload: pro,
    };
};

export const searchPokemon = pokemon => {
    return function (dispatch) {
        dispatch(search(pokemon));
    };
};
