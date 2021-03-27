import React from 'react'
import s from './MenuOption.module.css'

const MenuOption = ({url, text}) => {
    

  return (
    <div className={s.menuOption}>
        <img src={url} alt="dog"/>
        <h4 className={s.optionName}>{text}</h4>
    </div>
  );
}

export default MenuOption;