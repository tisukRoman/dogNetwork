import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './ExitButton.module.css'


const ExitButton = ({ isLoged, clearCashThunk, votesId, uploadedId}) => {

  return (
    <div className={s.exitBut}>

      {isLoged ? <>
      <button onClick={ ()=> { clearCashThunk(votesId, uploadedId) } }> Clear Data </button>
      <button onClick={ ()=> { window.location.reload()} }>Exit  </button> </> :
        <NavLink className={s.loginLink} to="/login" > Login </NavLink>}

    </div>
  );
}

export default ExitButton;