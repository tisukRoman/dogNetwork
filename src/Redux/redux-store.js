import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {photosReducer} from './photosReducer'

let reducers  = combineReducers({
    photosReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;