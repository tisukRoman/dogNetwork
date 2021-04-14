import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) =>{
    return{
        isLoged: state.authReducer.isLoged
    }
}

export const withLoginRedirect = (Component) =>{

    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isLoged) return <Redirect to='/login'/>   
            return <Component {...this.props}/>
        }
    }

    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedRedirectComponent;
    
}