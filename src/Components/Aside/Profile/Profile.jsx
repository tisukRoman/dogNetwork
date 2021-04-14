import React from 'react'
import s from './Profile.module.css'
import ava from '../../../Assets/img/avatar.png'

const Profile = ({imgURL, isLoged}) => {
    

  return (
    <div className={s.profile}>
      {<img className={s.img} src={isLoged? imgURL : ava } alt="avatar" /> }
      
    </div>
  );
}

export default Profile;