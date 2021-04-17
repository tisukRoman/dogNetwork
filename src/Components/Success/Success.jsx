import React from 'react'
import s from './Success.module.css'
import gif from '../../Assets/img/Success.gif'
import { Redirect } from 'react-router'

const Success = ({setSuccess, success}) => {


    return <div className={s.successBlock}>
        <div className={s.successImg}>
            <img src={gif} alt="success" />
            <h3>Uploaded Successfully</h3>
        </div>
        <div className={s.successOk} 
        onClick={()=> {setSuccess(false); return <Redirect to="/upload"/>} }>OK</div>

    </div>
}

export default Success