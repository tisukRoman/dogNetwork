import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://api.thedogapi.com/v1/`,
    headers: {
        'x-api-key': 'ccfb18ae-5643-4e2f-8ec6-15c535be28e0'
    }
})



export const requestDogs = () => {
    return instance.get('images/search?limit=10')
        .then(response => response.data)
}

export const likeDogsFetch = (id) => {
    return instance.post('votes', 
    {"image_id": id,
    "value": 1})
        .then(response => response.data)
}

export const dislikeDogsFetch = (id) => {
    return instance.post('votes', 
    {"image_id": id,
    "value": 0})
        .then(response => response.data)
}

export const getSpecificImgFetch = (image_id) => {
    return instance.get(`images/${image_id}`)
        .then(response => response.data)
}

export const deleteVoteFetch = (vote_id) => {
    return instance.delete(`votes/${vote_id}`)
        .then(response => response.data)
}
