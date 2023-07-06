const initState = {
    search: '',
};

const SearchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};

export default SearchReducer;
