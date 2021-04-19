import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Arrow.module.css'


const Arrow = () => {
    return <NavLink className={s.arrow} activeClassName={s.arrow} to="/">
        ⬅️
    </NavLink>
}

export default Arrow