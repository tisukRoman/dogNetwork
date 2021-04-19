import React from 'react';
import { compose } from 'redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { connect } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import s from '../Photos/PhotoSlider/PhotosSlider.module.css';
import { clearDogsThunk, createVoteThunk,  setLikedDogsThunk, setAllVotesIdThunk } from '../../Redux/photosReducer';
import { withLoginRedirect } from '../../HOC/withRedirect'
import PreloaderCSS from '../../Assets/Prelouder'
import NoItems from '../NoItems/NoItems'
import {withErrorHandle} from '../../HOC/withErrorHandle'
import Arrow from '../ArrowBack/Arrow';


SwiperCore.use([Navigation]);



const Liked = (props) => {

  const [preloader, setPreloader] = React.useState(0);


  React.useEffect(() => {
    props.setLikedDogsThunk(props.likedDogsId);
    setTimeout(() => { setPreloader(1) }, 2000);

    return () => {
      props.clearDogsThunk();
    }

  }, [])




  return (<div сlassName={s.wrapper}>

    <Arrow/>
    <h3 className={s.scroll_title}>Here you have all your Liked items ❤️ </h3>


    {props.dogs.length ? (<div className={s.scroll}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        observer={true}>

        {props.dogs.map(u => (<SwiperSlide key={u.id}>
          <div className={s.slide}>
            {(preloader === 0) ? <PreloaderCSS /> : null}
            <div className={s.label}>{u.breeds? u.breeds.map(r => r.name) : null}</div>
            <img src={u.url} className={s.img} alt="ever" />
            <div className={s.thumbs}>
              <button className={s.thumbUp + ' ' + (props.likedDogsId.some(elem => elem === u.id) ? s.thumbUpActive : '')}
                onClick={() => { props.likedDogsId.some(elem => elem === u.id) ? console.log('you liked') : props.createVoteThunk(u.id, 1, props.uid) }}>{"\uD83D\uDC4D"}</button>
            </div>
          </div>
        </SwiperSlide>))}

      </Swiper>
    </div>) : <NoItems/>}

  </div>)
}

const mapStateToProps = (state) => ({
  dogs: state.photosReducer.dogs,
  likedDogsId: state.photosReducer.likedDogsId.filter((item, pos, arr) => { return arr.indexOf(item) == pos; }),
  uid: state.authReducer.userId
})

export default compose(
   withLoginRedirect,
   withErrorHandle,
  connect(mapStateToProps, { clearDogsThunk, createVoteThunk, setLikedDogsThunk, setAllVotesIdThunk })
)(Liked)
