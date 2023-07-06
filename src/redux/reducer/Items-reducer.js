const initState = {
    ListUrlBalls: [],
    listItems: [],
    Item: {},
    isLoading: false,
};

const ItemsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_URL_BALLS':
            return {
                ...state,
                ListUrlBalls: action.payload,
                isLoading: true,
            };
        case 'GET_BALLS':
            return {
                ...state,
                listItems: action.payload,
                isLoading: true,
            };
        // case 'LOAD_PRODUCTS':
        //     return {
        //         ...state,
        //         listProduct: action.payload,
        //         isLoading: false,
        //     };

        // case 'GET_PRODUCT':
        //     return {
        //         ...state,
        //         product: action.payload,
        //     };

        default:
            return state;
    }
};

export default ItemsReducer;
