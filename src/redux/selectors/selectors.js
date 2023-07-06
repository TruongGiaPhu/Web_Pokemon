// import { createSelector } from 'reselect';

// export const listProduct = state => state.listReducer.listProduct;
// console.log('🚀 ~ file: selectors.js ~ line 4 ~ listProduct', listProduct);

// export const search = state => state.SearchReducer.search;

// export const bloggerSelector = createSelector(
//     listProduct,
//     search,
//     (listProduct, search) => {
//         if (search === '') {
//             return listProduct;
//         } else {
//             return listProduct.filter(item =>
//                 item.name.toLowerCase().includes(search.toLowerCase()),
//             );
//         }
//     },
// );
