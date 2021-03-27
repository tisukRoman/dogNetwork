import React from 'react'
import s from './Status.module.css'

const Status = () => {
    

  return (
    <div className={s.status}>
      <ul>
          <li>Tyschuk Roman</li>
          <li>tisukroman@gmail.com</li>
          <hr/>
          <li>Studying React about half a year and dreaming about a well-paid job</li>
      </ul>
    </div>
  );
}

export default Status;