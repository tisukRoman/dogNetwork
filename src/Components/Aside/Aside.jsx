import React from 'react'
import s from './Aside.module.css'
import ExitButton from './ExitButton/ExitButton'
import Profile from './Profile/Profile'
import Status from './Status/Status'

const Aside = () => {
    

  return (
    <div className={s.aside}>
      <Profile/>
      <Status/>
      <ExitButton/>
    </div>
  );
}

export default Aside;