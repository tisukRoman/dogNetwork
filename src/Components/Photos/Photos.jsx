import React from 'react'
import s from './Photos.module.css'
import PhotoSlider from './PhotoSlider/PhotoSlider'

const Photos = () => {
    

  return (
    <div className={s.photo_page}>
        <PhotoSlider/>
    </div>
  );
}

export default Photos;