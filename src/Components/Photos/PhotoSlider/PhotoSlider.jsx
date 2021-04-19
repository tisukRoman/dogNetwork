import React from 'react';
import { compose } from 'redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { connect } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import s from './PhotosSlider.module.css';
import { getDogsThunk, clearDogsThunk, createVoteThunk} from '../../../Redux/photosReducer';
import { withLoginRedirect } from '../../../HOC/withRedirect'
import PreloaderCSS from '../../../Assets/Prelouder'
import {withErrorHandle} from '../../../HOC/withErrorHandle'
import Arrow from '../../ArrowBack/Arrow'


SwiperCore.use([Navigation]);



const PhotoSlider = (props) => {

    const [preloader, setPreloader] = React.useState(0);



    React.useEffect(() => {

        props.getDogsThunk();
        setTimeout(() => { setPreloader(1) }, 2000);

        return () => {
            props.clearDogsThunk();
        }

    }, [])




    return (<div сlassName={s.wrapper}>

        <Arrow/>
        <h3 className={s.scroll_title}>Enjoy cool pictures of our doggies </h3>
        <div className={s.scroll}>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                observer={true}>

                {props.dogs.map(u => (<SwiperSlide key={u.id}>
                    <div className={s.slide}>
                        {(preloader === 0) ? <PreloaderCSS /> : null}
                        <div className={s.label}>{u.breeds.map(r => r.name)}</div>
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
        </div>
        <div className={s.fetch_button} onClick={() => { props.getDogsThunk() }}>
            <p>LOAD MORE</p>
        </div>
    </div>)
}

const mapStateToProps = (state) => ({
    dogs: state.photosReducer.dogs,
    likedDogsId: state.photosReducer.likedDogsId.filter( (item, pos, arr) => { return arr.indexOf(item) == pos; }),
    dislikedDogsId: state.photosReducer.dislikedDogsId.filter( (item, pos, arr) => { return arr.indexOf(item) == pos; }),
    uid: state.authReducer.userId,
    votesId: state.photosReducer.votesId,
})

export default compose(
    withLoginRedirect,
    withErrorHandle,
    connect(mapStateToProps, { getDogsThunk, clearDogsThunk, createVoteThunk})
)(PhotoSlider)


