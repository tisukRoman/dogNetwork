import { requestDogs } from '../API/API';
import { likeDogsFetch, dislikeDogsFetch, getSpecificImgFetch, deleteVoteFetch } from '../API/API'

const GET_DOGS_PROPS = 'GET_DOGS_IMGS';
const TOGGLE_FETCHING = 'IS_FETCHING';
const CLEAR_DOGS_PROPS = 'CLEAR_DOGS_PROPS';
const DELETE_VOTE = 'DELETE_VOTE';
const SET_LIKED_DOGS = 'SET_LIKED_DOGS';
const DISPLAY_LIKED_DOGS_IDS = 'DISPLAY_LIKED_DOGS_IDS';

let initialState = {
    dogs: [],
    likedDogsID: [],
    dislikedDogsID: [],
    isFetching: false
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS_PROPS:
            return {
                ...state,
                dogs: [...state.dogs, ...action.items]
            }
        case CLEAR_DOGS_PROPS:
            return {
                ...state,
                dogs: []
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_LIKED_DOGS:
            return {
                ...state,
                dogs: [...state.dogs, action.item]
            }
        case DELETE_VOTE:
            return {
                ...state,
                likedDogsID: [...state.likedDogsID.filter(
                    elem => {
                        if (elem === action.id) { return false }
                        return true
                    }
                )],
                dislikedDogsID: [...state.dislikedDogsID.filter(
                    elem => {
                        if (elem === action.id) { return false }
                        return true
                    }
                )]
            }
        case DISPLAY_LIKED_DOGS_IDS:
            return {
                ...state,
                likedDogsID: [...action.items]
            }
        default:
            return state
    }
}


export const setLikedDogs = (item) => ({ type: SET_LIKED_DOGS, item });
export const displayLikedDogsID = (items) => ({ type: DISPLAY_LIKED_DOGS_IDS, items });
export const delDogs = () => ({ type: CLEAR_DOGS_PROPS });
export const deleteVote = (id) => ({ type: DELETE_VOTE, id });
export const getDogs = (items) => ({ type: GET_DOGS_PROPS, items: items });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })


////////////////////////////////////////////////////////////////////////// Thunks below 

export const getDogsThunk = () => (dispatch) => {   //fetching random items and adding to 'dogs'
    dispatch(toggleFetching(true));
    requestDogs()
        .then(
            data => dispatch(getDogs(data))
        );
    dispatch(toggleFetching(false));
}

export const delDogsThunk = () => (dispatch) => {    // clearing 'dog' array
    dispatch(delDogs())
}

export const likeDogsThunk = (id) => (dispatch) => {  //setting in 'LocalStorage'  liked item
    likeDogsFetch(id)
        .then(() => {
            addToLocalStore(id, 'likedDogsID');
            dispatch(DisplayingLikedDogsThunk());
        })
}

export const dislikeDogsThunk = (id) => (dispatch) => {  //setting in 'LocalStorage'  disliked item
    dislikeDogsFetch(id)
        .then(() => addToLocalStore(id, 'dislikedDogsID'))
}

export const DisplayingLikedDogsThunk = () => (dispatch) => {  //copying items in 'LikedDogsID' from 'LocalStorage' 
    let arrString = localStorage.getItem('likedDogsID');
    if (arrString === null) {
        return true;
    } else {
        let arr = JSON.parse(arrString);
        dispatch(displayLikedDogsID(arr))
    }
}

export const deleteVoteThunk = (id) => (dispatch) => {  //deleting specific item from 'likedDogsID' or 'dislikedDogsID' 

    deleteVoteFetch(id)
        .then(() => {
            deleteStorageItem(id, 'likedDogsID');
            dispatch(DisplayingLikedDogsThunk())
        })
}

export const setLikedDogsThunk = () => (dispatch) => {   //setting 'likedDogsIDs' from 'LocalStorage'  and  adding ITEMS to 'dogs'
    let arrString = localStorage.getItem('likedDogsID');
    let item = JSON.parse(arrString);

    if (item === null) return;
    item.map(el => {
        getSpecificImgFetch(el)
            .then(
                data => dispatch(setLikedDogs(data))
            )
    });
}

////////////////////////////////////////////////////////////////////////// additional functions below 

function addToLocalStore(id, list) {
    let arrString = localStorage.getItem(list);
    if (arrString === null) {
        localStorage.setItem(list, JSON.stringify([id]))
    } else {
        let arr = JSON.parse(arrString);
        arr = [...arr, id];
        arr = JSON.stringify(arr);
        localStorage.setItem(list, arr);
    }
}

function deleteStorageItem(id, list) {
    let arrString = localStorage.getItem(list);
    if (arrString === null) {
        return true;
    } else {
        localStorage.removeItem(list)
        let arr = JSON.parse(arrString);
        arr.filter(el => {
            if (el === id) { return false };
            return true;
        });
        arr = JSON.stringify(arr);
        localStorage.setItem(list, arr);
    }
}