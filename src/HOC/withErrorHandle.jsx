import React from 'react'
import { connect } from 'react-redux'
import { clearErrorThunk } from '../Redux/photosReducer'
import gif from '../Assets/img/error.gif'
import s from '../Components/Error/Error.module.css'


const mapStateToProps = (state) => ({
    currentError: state.photosReducer.currentError
})


export const withErrorHandle = (Component) => { // HOC

    const ErrorComponentContainer = (props) => {  // Created Container Component 
        if (props.currentError) { return <Error clearErrorThunk={props.clearErrorThunk} currentError={props.currentError} /> }
        else { return <Component props={props} /> } 
    }
    return connect(mapStateToProps, { clearErrorThunk })(ErrorComponentContainer)
}


const Error = ({ currentError, clearErrorThunk }) => { //added Component

    return <div className={s.errorBlock}>
            <h3>{currentError} ⚠️</h3>
            <div className={s.errorImg}>
                <img src={gif} alt="error" />
            </div>
            <div className={s.errorOk} onClick={clearErrorThunk}>OK</div>
        </div>
}
