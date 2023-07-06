import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2/item/?limit=1600';

const getURLBalls = pro => {
    return {
        type: 'GET_URL_BALLS',
        payload: pro,
    };
};

const getBalls = pro => {
    return {
        type: 'GET_BALLS',
        payload: pro,
    };
};

export const loadURLBalls = () => {
    return function (dispatch) {
        axios
            .get(URL)
            .then(res => {
                dispatch(getURLBalls(res.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
};

export const loadBalls = data => {
    return function (dispatch) {
        var pokeItem = [];
        data?.forEach(product => {
            axios
                .get(`${product.url}`)
                .then(response => {
                    pokeItem.push(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        });
        dispatch(getBalls(pokeItem));
    };
};

// export const loadBalls = () => {
//     return function (dispatch) {
//         axios
//             .get(URL)
//             .then(res => {
//                 dispatch(getBalls(res.data));
//             })
//             .catch(error => {
//                 console.log('error', error);
//             });
//     };
// };
