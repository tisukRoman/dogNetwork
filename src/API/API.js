import axios from 'axios'

const instance = axios.create({
    "Access-Control-Allow-Credentials": true,
    baseURL: `https://api.thedogapi.com/v1/`,
    responseType: "json",
    headers: {
        'x-api-key': '9d99b628-9eab-4317-bf3f-ab45852acad2'
    }
})


export const requestDogs = () => {      // get 10 dog items
    return instance.get('images/search?limit=10')
        .then(response => response.data)
}


export const voteFetch = (img_id, value, sub_id) => {   // response =>  id(vote_id)
    return instance.post('votes',
        {
            "image_id": img_id,
            "sub_id": sub_id,
            "value": value
        })
        .then(response => response.data)
}


export const deleteVote = (vote_id) => {    // response -> message and nothing else
    return instance.delete('votes/' + vote_id)
        .then(response => response.data)
}


export const getVotes = (sub_id) => {  // response =>  id(vote_id), value, image_id
    return instance.get(`votes?sub_id=${sub_id}`)
        .then(response => response.data)
}


export const getspecificImg = (image_id) => {  // response -> 1 img with specific Id
    return instance.get(`images/${image_id}`)
        .then(response => response.data)
}


export const uploadImg = (file, sub_id) => {  
    let formData = new FormData();
    formData.append("file", file);
    formData.append("sub_id", sub_id);
    return instance.post(`images/upload`, formData, {
        headers:{
            'Content-Type': 'multipart/form-data' 
        }
    })
    .then(response => response.data)
}


export const getUploadedImgs = (sub_id) => {
    return instance.get(`images?sub_id=${sub_id}&limit=100`)
    .then(response => response.data)
}


export const deleteUploaded = (image_id) => {    // response -> message and nothing else
    return instance.delete(`images/${image_id}`)
        .then(response => response.data)
}