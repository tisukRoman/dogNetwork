import React from 'react';
import { compose } from 'redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { connect } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import s from '../Photos/PhotoSlider/PhotosSlider.module.css';
import { clearDogsThunk, createVoteThunk, setAllVotesIdThunk, uploadImgThunk, setUploadedItemsThunk } from '../../Redux/photosReducer';
import { withLoginRedirect } from '../../HOC/withRedirect'
import PreloaderCSS from '../../Assets/Prelouder'
import NoItems from '../NoItems/NoItems';
import {withErrorHandle} from '../../HOC/withErrorHandle'
import Success from '../Success/Success';
import Arrow from '../ArrowBack/Arrow';


SwiperCore.use([Navigation]);


const Upload = (props) => {

  const [preloader, setPreloader] = React.useState(0);
  const [success, setSuccess] = React.useState(false);


  React.useEffect(() => { // USE EFFECT
    props.setUploadedItemsThunk(props.uploadedId);
    setTimeout(() => { setPreloader(1) }, 2000);
    return () => {
      props.clearDogsThunk();
    }
  }, [success])


  const UploadImg = async (e) => { // UPLOAD CALLBACK
    if (e.target.files.length) {
      const file = e.target.files[0];
      await props.uploadImgThunk(file, props.uid);
      setSuccess(true);
    }
  }


  if(success) {
    return <Success setSuccess={setSuccess} success={success}/>
  }



  return (<div сlassName={s.wrapper}>
<Arrow/>
    <h3 className={s.scroll_title}>Here you can post your doggy 🐶 </h3>

    {props.dogs.length? (<div className={s.scroll}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        observer={true}>

        {props.dogs.map(u => (<SwiperSlide key={u.id}>
          <div className={s.slide}>
            {(preloader === 0) ? <PreloaderCSS /> : null}
            <div className={s.label}>{u.breeds ? u.breeds.map(r => r.name) : null}</div>
            <img src={u.url} className={s.img} alt="ever" />
            <div className={s.thumbs}>
              <button className={s.thumbDown + ' ' + (props.dislikedDogsId.some(elem => elem === u.id) ? s.thumbDownActive : '')}
                onClick={() => { props.dislikedDogsId.some(elem => elem === u.id) ? console.log('you disliked it') : props.createVoteThunk(u.id, 0, props.uid) }}>{"\uD83D\uDC4E"}</button>

              <button className={s.thumbUp + ' ' + (props.likedDogsId.some(elem => elem === u.id) ? s.thumbUpActive : '')}
                onClick={() => { props.likedDogsId.some(elem => elem === u.id) ? console.log('you liked it') : props.createVoteThunk(u.id, 1, props.uid) }}>{"\uD83D\uDC4D"}</button>
            </div>
          </div>
        </SwiperSlide>))}

      </Swiper>
    </div>) : <NoItems/>}

    <div className={s.fetch_button} >
      <input type={"file"} onChange={UploadImg} accept={"image/*"} id={"file"} />
      <label for="file">Post a dog photo 📷</label>
    </div>

  </div>)
}

const mapStateToProps = (state) => ({
  dogs: state.photosReducer.dogs,
  uid: state.authReducer.userId,
  uploadedId: state.photosReducer.uploadedId.filter((item, pos, arr) => { return arr.indexOf(item) === pos; }),
  likedDogsId: state.photosReducer.likedDogsId.filter((item, pos, arr) => { return arr.indexOf(item) === pos; }),
  dislikedDogsId: state.photosReducer.dislikedDogsId.filter((item, pos, arr) => { return arr.indexOf(item) === pos; }),
  votesId: state.photosReducer.votesId,
  currentError: state.photosReducer.currentError
})

export default compose(
  withLoginRedirect,
  withErrorHandle,
  connect(mapStateToProps, { clearDogsThunk, createVoteThunk, setAllVotesIdThunk, uploadImgThunk, setUploadedItemsThunk })
)(Upload)
