import { requestDogs, voteFetch, deleteVote, getVotes, getspecificImg, uploadImg, getUploadedImgs, deleteUploaded } from '../API/API';

const GET_DOGS_PROPS = 'GET_DOGS_IMGS';
const CLEAR_DOGS_PROPS = 'CLEAR_DOGS_PROPS';
const DISPLAY_LIKES = 'DISPLAY_LIKES';
const DISPLAY_DISLIKES = 'DISPLAY_DISLIKES';
const ADD_LIKE = 'ADD_LIKE';
const ADD_DISLIKE = 'ADD_DISLIKE';
const SET_LIKES = 'SET_LIKES';
const SET_DISLIKES = 'SET_DISLIKES';
const SET_ALL_VOTES = 'SET_ALL_VOTES';
const CLEAR_CASH = 'CLEAR_CASH';
const DISPLAY_UPLOADED = 'DISPLAY_UPLOADED';
const SET_UPLOADED = 'SET_UPLOADED';
const ADD_UPLOADED = 'ADD_UPLOADED';
const DISPLAY_ERROR = 'DISPLAY_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

let initialState = {
    dogs: [],
    likedDogsId: [],
    dislikedDogsId: [],
    votesId: [],
    uploadedId: [],
    currentError: null
}


export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS_PROPS:
            return {
                ...state,
                dogs: [...state.dogs, ...action.data]
            }
        case CLEAR_DOGS_PROPS:
            return {
                ...state,
                dogs: []
            }
        case DISPLAY_LIKES:
            return {
                ...state,
                likedDogsId: [...state.likedDogsId, action.id]
            }
        case DISPLAY_DISLIKES:
            return {
                ...state,
                dislikedDogsId: [...state.dislikedDogsId, action.id]
            }
        case ADD_LIKE:
            return {
                ...state,
                likedDogsId: [...state.likedDogsId, action.id]
            }
        case ADD_DISLIKE:
            return {
                ...state,
                dislikedDogsId: [...state.dislikedDogsId, action.id]
            }
        case SET_LIKES:
            return {
                ...state,
                dogs: [...state.dogs, action.item]
            }
        case SET_DISLIKES:
            return {
                ...state,
                dogs: [...state.dogs, action.item]
            }
        case SET_ALL_VOTES:
            return {
                ...state,
                votesId: [...state.votesId, action.id]
            }
        case CLEAR_CASH:
            return {
                ...state,
                likedDogsId: [],
                dislikedDogsId: [],
                uploadedId: []
            }
        case DISPLAY_UPLOADED:
            return {
                ...state,
                uploadedId: [...state.uploadedId, action.id]
            }
        case SET_UPLOADED:
            return {
                ...state,
                dogs: [...state.dogs, action.item]
            }
        case ADD_UPLOADED:
            return {
                ...state,
                uploadedId: [...state.uploadedId, action.id]
            }
        case DISPLAY_ERROR:
            return {
                ...state,
                currentError: action.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                currentError: null
            }
        default:
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////// Action creators below

export const getDogs = (data) => ({ type: GET_DOGS_PROPS, data }); // fills 'dogs' array
export const delDogs = () => ({ type: CLEAR_DOGS_PROPS });  // clears 'dogs' array

export const setLikes = (id) => ({ type: DISPLAY_LIKES, id });  // fills 'likedDogsId' array
export const setDisikes = (id) => ({ type: DISPLAY_DISLIKES, id });  // fills 'dislikedDogsId' array

export const addLike = (id) => ({ type: ADD_LIKE, id });  //adds one id to 'likedDogsId' array
export const addDislike = (id) => ({ type: ADD_DISLIKE, id });  //adds one id to 'dislikedDogsId' array

export const setLikedItems = (item) => ({ type: SET_LIKES, item });  //adds one liked item to 'dogs' array 
export const setDislikedItems = (item) => ({ type: SET_DISLIKES, item });  //adds one disliked item to 'dogs' array

export const setVotes = (id) => ({ type: SET_ALL_VOTES, id }); // fills 'votesId' array
export const clearCash = () => ({ type: CLEAR_CASH }); // clears 'likedDogsId' and 'dislikedDogsId' arrays

export const displayUploaded = (id) => ({ type: DISPLAY_UPLOADED, id }) // fills 'uploadedId' array
export const setUploadedItems = (item) => ({ type: SET_UPLOADED, item });  //adds one uploaded item to 'dogs' array
export const addUploaded = (id) => ({ type: ADD_UPLOADED, id });  //adds one uploaded item to 'uploadedId' array

export const displayError = (error) => ({ type: DISPLAY_ERROR, error });  //displays message of 'currentError'
export const clearError = () => ({ type: CLEAR_ERROR });  //displays message of 'currentError'

///////////////////////////////////////////////////////////////////////////////////////// Thunks below 


export const getDogsThunk = () => async (dispatch) => {   //fetching 10 random items and adding to 'dogs'
    try {
        let data = await requestDogs();
        dispatch(getDogs(data));
    } catch (error) {
        dispatch(displayError(error.message))
    }
}

export const clearDogsThunk = () => (dispatch) => {    // clearing 'dog' array
    dispatch(delDogs())
}

export const createVoteThunk = (img_id, value, sub_id) => async (dispatch) => {   // create a vote in account (value=1 -> Like ; value=0 -> disLike) and adds its ID in likedDogsId or dislikedDogsId array

    try {
        await voteFetch(img_id, value, sub_id);
        if (value) dispatch(addLike(img_id));
        else dispatch(addDislike(img_id));
    }
    catch (error) {
        dispatch(displayError(error.message))
    }
}

export const clearCashThunk = (votesId, uploadedId) => async (dispatch) => {   // delete all votes in one function 

    votesId.map(el => deleteVote(el));
    uploadedId.map(el => deleteUploaded(el));
    dispatch(clearCash());

}

export const displayLikesThunk = (sub_id) => async (dispatch) => {  // fills 'likedDogsId' with likedDogs id

    try {
        let data = await getVotes(sub_id);
        data.map(el => { if (el.value === 1) dispatch(setLikes(el.image_id)) })
    }
    catch (error) {
        dispatch(displayError(error.message))
    }
}

export const displayDislikesThunk = (sub_id) => async (dispatch) => {  // fills 'dislikedDogsId' with dislikedDogs id

    try {
        let data = await getVotes(sub_id);
        data.map(el => { if (el.value === 0) dispatch(setDisikes(el.image_id)) })
    }
    catch (error) {
        dispatch(displayError(error.message))
    }
}

export const setLikedDogsThunk = (likedDogsId) => (dispatch) => {  // fills 'dogs' with liked items

    likedDogsId.map(async (el) => {
        try {
            let data = await getspecificImg(el);
            dispatch(setLikedItems(data));
        } catch (error) {
            dispatch(displayError(error.message));
        }
    })
}

export const setDislikedDogsThunk = (dislikedDogsId) => (dispatch) => {  // fills 'dogs' with disliked items

    dislikedDogsId.map(async (el) => {
        try {
            let data = await getspecificImg(el);
            dispatch(setDislikedItems(data));
        } catch (error) {
            dispatch(displayError(error.message))
        }
    })
}

export const setAllVotesIdThunk = (sub_id) => async (dispatch) => {  // fills 'votesId' array 

    try {
        let data = await getVotes(sub_id);
        data.map(el => { dispatch(setVotes(el.id)) })
    }
    catch (error) {
        dispatch(displayError(error.message))
    }
}

export const uploadImgThunk = (file, sub_id) => async (dispatch) => {  // send img to server
    try {
        let response = await uploadImg(file, sub_id);
        dispatch(addUploaded(response.data.id));
    } catch (error) {
        dispatch(displayError(error.message));
    }

}

export const getUploadedThunk = (sub_id) => async (dispatch) => { // fills 'uploadedId' array 

    try {
        let data = await getUploadedImgs(sub_id);
        data.map(el => dispatch(displayUploaded(el.id)))

    }
    catch (error) {
        dispatch(displayError(error.message))
    }
}

export const setUploadedItemsThunk = (uploadedId) => (dispatch) => { // fills 'dogs' with uploaded items

    uploadedId.map(async (el) => {
        try {
            let data = await getspecificImg(el);
            dispatch(setUploadedItems(data));
        } catch (error) {
            dispatch(displayError(error.message));
        }
    })

}

export const clearErrorThunk = () => (dispatch) => { // sets 'null' in 'currentError'
    dispatch(clearError())
}

////////////////////////////////////////////////////////////////////////// additional functions below 

/* function addToLocalStore(id, list) {
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
        arr = arr.filter(el => {
            if (el === id) return false;
            return true;
        });
        arr = JSON.stringify(arr);
        localStorage.setItem(list, arr);
    }
} */