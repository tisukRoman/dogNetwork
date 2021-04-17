import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => ({
    isLoged: state.authReducer.isLoged
})

export const withLoginRedirect = (Component) => { // HOC

    const RedirectComponent = (props) => { // Container
        if (!props.isLoged) return <Redirect to='/login' /> // added Logic
        return <Component {...props} /> // inner Component
    }

    return connect(mapStateToProps)(RedirectComponent)
}