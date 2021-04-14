import React from 'react';
import Main from '../Components/Main/Main'
import { Switch, Route } from 'react-router';
import PreloaderCSS from '../Assets/Prelouder';
import s from '../App.module.css';
import Aside from '../Components/Aside/Aside';
import { connect } from 'react-redux';
import { displayDislikesThunk, displayLikesThunk, setAllVotesIdThunk, getUploadedThunk } from '../Redux/photosReducer'
const LoginForm = React.lazy(() => import('../Components/LoginPage/LoginForm'));
const Photos = React.lazy(() => import('../Components/Photos/Photos'));
const Disliked = React.lazy(() => import('../Components/Disliked/Disliked'));
const Upload = React.lazy(() => import('../Components/Upload/Upload'));
const Liked = React.lazy(() => import('../Components/Liked/Liked'));



const TheMain = React.memo(({ auth, isLoged, uid, displayDislikesThunk, displayLikesThunk, setAllVotesIdThunk, getUploadedThunk }) => {

    

    if (isLoged) {
        displayLikesThunk(uid);
        displayDislikesThunk(uid);
        setAllVotesIdThunk(uid);
        getUploadedThunk(uid);
    }

    return (<>

        <div className={s.App}>

            <Aside auth={auth} />

            <div className={s.main_screen}>

                <Switch>

                    <React.Suspense fallback={<PreloaderCSS />}>

                        <Route exact path="/login" render={() => <LoginForm auth={auth} />} />
                        <Route exact path="/photos" render={() => <Photos />} />
                        <Route exact path="/disliked" render={() => <Disliked />} />
                        <Route exact path="/upload" render={() => <Upload />} />
                        <Route exact path="/liked" render={() => <Liked />} />
                        <Route exact path="/" render={() => <Main />} />


                    </React.Suspense>

                </Switch>


            </div>
        </div>


    </>)

})

const mapStateToProps = (state) => ({
    isLoged: state.authReducer.isLoged,
    uid: state.authReducer.userId,
})

export default connect(mapStateToProps, { displayDislikesThunk, displayLikesThunk, setAllVotesIdThunk, getUploadedThunk })(TheMain);




