import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import s from './Login.module.css'
import firebase from 'firebase'
import {connect} from 'react-redux'
import {setAuthThunk} from '../../Redux/authReducer'
import { Redirect } from 'react-router';


const MyTextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div  className={s.field}>
            <label>
                {label + ' '}
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className={s.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};



const LoginForm = ({auth, setAuthThunk, isLoged}) => {


    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        setAuthThunk(user);
    }


    if(isLoged){
        return <Redirect to="/"/>
     } 

    return <>


        <h1 className={s.header}>Sign Up</h1>

        <Formik
            initialValues={{
                login: "",
                password: "",
                rememberMe: false
            }}
            validationSchema={Yup.object({
                login: Yup.string()
                    .min(5, '5 or more symbols are required')
                    .max(20, 'fewer than 20 symbols are required')
                    .required('Required'),
                password: Yup.string()
                    .min(5, '5 or more symbols are required')
                    .max(15, 'fewer than 15 symbols are required')
                    .required('Required'),
                rememberMe: Yup.boolean()
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(`${JSON.stringify(values, null, 2)} 
Dear user, at present moment the only possible way to log in is authorisation with Google`);
                    resetForm();
                    setSubmitting(false)
                }, 2000)
            }}
        >

            <Form className={s.form}>
                <MyTextField className={s.input} name="login" type="text" label="Login" />
                <MyTextField className={s.input} name="password" type="password" label="Password" />
                <MyTextField className={s.checkbox} name="rememberMe" type="checkbox" label="remember me" />
                <button className={s.button} type="submit">Submit</button>
                <button className={s.button + ' ' + s.googleButton} onClick={login} type="button">Enter with Google </button>
            </Form>


        </Formik>
    </>
}

const mapStateToProps = (state) =>{
    return{
        isLoged: state.authReducer.isLoged
    }
}

export default connect(mapStateToProps, {setAuthThunk})(LoginForm);


