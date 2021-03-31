import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://api.thedogapi.com/v1/`,
    withCredential: true,
    headers: {
        'x-api-key': '9d99b628-9eab-4317-bf3f-ab45852acad2'
    }
})



export const requestDogs = () => {      // get 10 dog items
    return instance.get('images/search?limit=10')
        .then(response => response.data)
}

export const voteFetch = (id, value) => {   // if value===1 -> Like;  if value===0 -> Dislike
    return instance.post('votes', 
    {"image_id": id,
    "sub_id": 'tisukroman@gmail.com',
    "value": value})
    .then(response => response.data)
}

export const getSpecificImgFetch = (image_id) => {   // get one img with  specific ID
    return instance.get(`images/${image_id}`)
        .then(response => response.data)
}

