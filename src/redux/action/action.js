import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const loadURL = pro => {
    return {
        type: 'LOAD_URL',
        payload: pro,
    };
};

const loadProducts = pro => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: pro,
    };
};
const getProduct = pro => {
    return {
        type: 'GET_PRODUCT',
        payload: pro,
    };
};

export const loadURLAction = data => {
    return function (dispatch) {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=900')
            .then(response => {
                dispatch(loadURL(response.data.results));
            })
            .catch(error => {
                console.error(error);
            });
    };
};

export const loadProductsAction = data => {
    return function (dispatch) {
        var pokeData = [];
        data?.forEach(product => {
            axios
                .get(`${product.url}`)
                .then(response => {
                    pokeData.push(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        });
        dispatch(loadProducts(pokeData));
    };
};

export const loadProductAction = id => {
    return function (dispatch) {
        axios
            .get(url + id)
            .then(res => {
                dispatch(getProduct(res.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};
