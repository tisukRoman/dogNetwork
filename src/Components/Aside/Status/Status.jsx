import React from 'react'
import s from './Status.module.css'

const Status = ({ name, email, likedDogsId, dislikedDogsId, isLoged, uploadedId }) => {


  return (
    <div className={s.status}>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <hr />
        <br />

        {isLoged && <>
            <li>Liked items: {likedDogsId.length}</li>
            <li>Disliked items: {dislikedDogsId.length}</li>
            <li>Uploaded items: {uploadedId.length}</li>
        </>}




      </ul>
    </div>
  );
}

export default Status;