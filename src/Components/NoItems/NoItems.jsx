import React from 'react'
import s from './NoItems.module.css'
import empty from '../../Assets/img/empty.gif'

const NoItems = () => {

    return<>
    <h3 className={s.empty_header}>You have no items here at the moment</h3>
    <div className={s.empty_img}>
        <img src={empty} alt="no Items"/>
    </div> 
    </>
        
}

export default NoItems;