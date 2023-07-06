import { combineReducers } from 'redux';

import listReducer from './list-reducer';
import pokeReducer from './poke-reducer';
import SearchReducer from './search-reducer';
import ItemsReducer from './Items-reducer';

const rootReducer = combineReducers({
    listReducer: listReducer,
    pokeReducer: pokeReducer,
    SearchReducer: SearchReducer,
    ItemsReducer: ItemsReducer,
});

export default rootReducer;
