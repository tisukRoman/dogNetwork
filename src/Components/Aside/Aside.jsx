import React from 'react'
import s from './Aside.module.css'
import ExitButton from './ExitButton/ExitButton'
import Profile from './Profile/Profile'
import Status from './Status/Status'
import {connect} from 'react-redux'
import {clearCashThunk} from '../../Redux/photosReducer'

const Aside = ({ name, imgURL, email, isLoged, votesId, dislikedDogsId, likedDogsId, clearCashThunk, uploadedId}) => {
    

  return (
    <div className={s.aside}>
      <Profile imgURL={imgURL} isLoged={isLoged}/>
      <Status name={name} email={email} dislikedDogsId={dislikedDogsId} likedDogsId={likedDogsId} isLoged={isLoged} uploadedId={uploadedId}/>
      <ExitButton isLoged={isLoged} votesId={votesId} clearCashThunk={clearCashThunk} uploadedId={uploadedId}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.authReducer.userName,
  imgURL: state.authReducer.imgURL,
  email: state.authReducer.email,
  isLoged: state.authReducer.isLoged,
  likedDogsId: state.photosReducer.likedDogsId.filter( (item, pos, arr) => { return arr.indexOf(item) == pos; }),
  dislikedDogsId: state.photosReducer.dislikedDogsId.filter( (item, pos, arr) => { return arr.indexOf(item) == pos; }),
  votesId: state.photosReducer.votesId,
  uploadedId: state.photosReducer.uploadedId.filter( (item, pos, arr) => { return arr.indexOf(item) == pos; }),
})

export default connect(mapStateToProps, {clearCashThunk})(Aside);