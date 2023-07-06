const initState = {
    listURL: [],
    listProduct: [],
    product: {},
    isLoading: false,
};

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_URL':
            return {
                ...state,
                listURL: action.payload,
                isLoading: true,
            };
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                listProduct: action.payload,
                isLoading: false,
            };

        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload,
            };

        default:
            return state;
    }
};

export default listReducer;
