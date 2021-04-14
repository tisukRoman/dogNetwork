import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {photosReducer} from './photosReducer'
import {authReducer} from '../Redux/authReducer'

let reducers  = combineReducers({
    photosReducer,
    authReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;